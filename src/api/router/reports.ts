import { Router, Request, Response } from 'express'
import { executeReport } from './../../common/report';
import { GetAllReportsFilters } from '../../database/dal/types';
import { CreateReportDTO, DynamicReportDTO, UpdateReportDTO } from '../dto/report.dto';
const reportRouter = Router()
import * as controller from './../controller/report'

//
// @desc Get Report with pagination
// 
reportRouter.get('/', async (req: Request, res: Response) => {
    const filters: GetAllReportsFilters = req.query

    const results = await controller.getAll(filters)

    return res.status(200).send(results)
});

//
// @desc Get One Report
// 
reportRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const result = await controller.getById(id)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Report Get Error."
        });
    }
});

//
// @desc One Report Update
//
reportRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const payload: UpdateReportDTO = req.body
        const result = await controller.update(id, payload)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Report Update Error."
        });
    }
});

//
// @desc One Report Delete 
//
reportRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await controller.deleteById(id)
    return res.status(200).send({
        success: result
    })
});

//
// @desc Create One Report
//
reportRouter.post('/', async (req: Request, res: Response) => {
    try {
        const payload: CreateReportDTO = req.body
        const result = await controller.create(payload)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Report Create Error."
        });
    }

});


//
// @desc Create Report
//
reportRouter.post('/execute', async (req: Request, res: Response) => {
    try {
        const payload: DynamicReportDTO = req.body
        const strSql = await controller.getById(payload.id)
        const finalQuery = await executeReport(payload, strSql.sql_string)
        const result = await controller.report(finalQuery)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Report Create Error."
        });
    }

});



export default reportRouter