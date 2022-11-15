

const reportRouter = require("express").Router();
const { executeReport } = require("../../common/report");
const { getAll, getById, update, deleteById, create, report } = require('./../controller/report');

/**
 * 
 * @desc Get Data
 * 
 */
reportRouter.get('/', async (req, res) => {
    const filters = req.query
    const results = await getAll(filters)
    return res.status(200).send(results)
});

/**
 * 
 * @desc Get Single Data
 * 
 */
reportRouter.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const result = await getById(id)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Report Get Error."
        });
    }
});

/**
 * 
 * @desc Update Single Data
 * 
 */
reportRouter.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const result = await update(id, req.body)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Report Update Error."
        });
    }
});

/**
 * 
 * @desc Delete Single Data
 * 
 */
reportRouter.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)
    const result = await deleteById(id)
    return res.status(200).send({
        success: result
    })
});

/**
 * 
 * @desc Create One Data
 * 
 */
reportRouter.post('/', async (req, res) => {
    try {
        const result = await create(req.body)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Report Create Error."
        });
    }

});

/**
 * 
 * @desc Create Report
 * 
 */
reportRouter.post('/execute', async (req, res) => {
    try {
        const { id: primaryId, parameters, limit, offset } = req.body
        const strSql = await getById(primaryId)
        const finalQuery = await executeReport(req.body, strSql.sql_string)
        const result = await report(finalQuery)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Report Create Error."
        });
    }

});

module.exports = reportRouter;