const fileRouter = require("express").Router();
const { getAll, getById, deleteById, create } = require('./../controller/file');

/**
 * 
 * @desc Get Data
 * 
 */
fileRouter.get('/', async (req, res) => {
    const filters = req.query
    const results = await getAll(filters)
    return res.status(200).send(results)
});

/**
 * 
 * @desc Get Single Data
 * 
 */
fileRouter.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const result = await getById(id)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "File Get Error."
        });
    }
});

/**
 * 
 * @desc Delete Single Data
 * 
 */
fileRouter.delete('/:id', async (req, res) => {
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
fileRouter.post('/', async (req, res) => {
    try {
        const result = await create(req.body)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "File Create Error."
        });
    }

});

module.exports = fileRouter;