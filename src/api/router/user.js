

const userRouter = require("express").Router();
const controller = require('./../controller/user/index')

/**
 * 
 * @desc Get Data
 * 
 */
userRouter.get('/', async (req, res) => {
    const filters = req.query
    const results = await controller.getAll(filters)
    return res.status(200).send(results)
});

/**
 * 
 * @desc Get Single Data
 * 
 */
userRouter.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const result = await controller.getById(id)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "User Get Error."
        });
    }
});

/**
 * 
 * @desc Update Single Data
 * 
 */
userRouter.put('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const payload = req.body
        const result = await controller.update(id, payload)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "User Update Error."
        });
    }
});

/**
 * 
 * @desc Delete Single Data
 * 
 */
userRouter.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)
    const result = await controller.deleteById(id)
    return res.status(200).send({
        success: result
    })
});

/**
 * 
 * @desc Create One Data
 * 
 */
userRouter.post('/', async (req, res) => {
    try {
        const payload = req.body
        const result = await controller.create(payload)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "User Create Error."
        });
    }

});

module.exports = userRouter;