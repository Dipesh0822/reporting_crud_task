const ticketRouter = require("express").Router();
const { getAll, getById, update, deleteById, create } = require('./../controller/ticket');

/**
 * 
 * @desc Get Data
 * 
 */
ticketRouter.get('/', async (req, res) => {
    const filters = req.query
    const results = await getAll(filters)
    return res.status(200).send(results)
});

/**
 * 
 * @desc Get Single Data
 * 
 */
ticketRouter.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const result = await getById(id)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Ticket Get Error."
        });
    }
});

/**
 * 
 * @desc Update Single Data
 * 
 */
ticketRouter.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const result = await update(id, req.body)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Ticket Update Error."
        });
    }
});

/**
 * 
 * @desc Delete Single Data
 * 
 */
ticketRouter.delete('/:id', async (req, res) => {
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
ticketRouter.post('/', async (req, res) => {
    try {
        const result = await create(req.body)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "Ticket Create Error."
        });
    }

});

module.exports = ticketRouter;