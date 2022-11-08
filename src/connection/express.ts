/***
 * 
 * @description Express.js connection and routing all project 
 * 
 */
import "dotenv/config";
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import dbConfig from './../database/config'
import routes from './../api/router'


/**
 * @desc Main function to setup Express application here
 */
const app: Application = express();

app.set('port', process.env.PORT);

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: '10mb', type: 'application/json' }));

app.use(cors());

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: `Welcome to the crud API! \n Endpoints available at http://localhost:${process.env.PORT}/api/v1` })
});

dbConfig();

app.use('/api/v1', routes);

/// 
/// Any Route NOt FOund
///
app.use((req: Request, res: Response, next: NextFunction) => {
    let err = {
        status: false,
        message: "Not Found."
    };
    next(res.status(404).json(err));
});

export default app;

