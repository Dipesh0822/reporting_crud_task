/**
 * 
 * @desc Application Start Script
 * 
*/
import http from 'http';
import { Logger } from './common/index';
import app from './connection/express';

const SERVER_SHUTDOWN_TIMEOUT_MS = 10_000;

/**
 * Helper function to log an exit code before exiting the process.
 */
const logAndExitProcess = (exitCode: number) => {
    Logger.error('Exiting process',
        {
            exit_code_number: exitCode
        }
    );
    process.exit(exitCode);
};

/**
 * Returns a promise that attempts to shut an http server down,
 * resolving if it succeeded and rejecting if it failed or timed out.
 */
const shutdownServerWithTimeout = async (server: http.Server): Promise<unknown> =>
    Promise.race([
        new Promise((resolve, reject) =>
            setTimeout(() => reject(Error('Timeout shutting server')), SERVER_SHUTDOWN_TIMEOUT_MS)
        )
    ]);

/**
 * Helper function to setup signal handlers on the process to gracefully
 * shutdown the server.
 */
const setupSignalHandlers = (server: http.Server) => {
    process.on('SIGTERM', async () => {
        Logger.info('Received signal: SIGTERM');
        try {
            await shutdownServerWithTimeout(server);
            logAndExitProcess(0);
        } catch (err) {
            Logger.error('Failed to shutdown server', err);
            logAndExitProcess(1);
        }
    });
    process.on('SIGINT', async () => {
        Logger.info('Received signal: SIGINT');
        try {
            await shutdownServerWithTimeout(server);
            logAndExitProcess(0);
        } catch (err) {
            Logger.error('Failed to shutdown server', err);
            logAndExitProcess(1);
        }
    });
};

/**
 * Sets up event listeners on unexpected errors and warnings. These should theoretically
 * never happen. If they do, we assume that the app is in a bad state. For errors, we
 * exit the process with code 1.
 */
const setupProcessEventListeners = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process.on('unhandledRejection', (reason: any) => {
        Logger.warning('encountered unhandled rejection', { reason_object: reason });
        logAndExitProcess(1);
    });

    process.on('uncaughtException', (err: Error) => {
        Logger.error('encountered uncaught exception', err);
        logAndExitProcess(1);
    });

    process.on('warning', (warning: Error) => {
        Logger.warning(
            'encountered warning',
            {
                warning_object: warning
            }
        );
    });
};

/**
 * Start an Express server and installs signal handlers on the
 * process for graceful shutdown.
 */
(async () => {
    try {
        const createApp = app;
        const server = createApp.listen(createApp.get('port'), () => {
            Logger.info(
                'Started express server',
                {
                    port_number: createApp.get('port')
                }
            );
        });
        setupSignalHandlers(server);
        setupProcessEventListeners();
    } catch (err) {
        Logger.error('error caught start application', err);
    }
})();