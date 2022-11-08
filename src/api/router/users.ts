import { Router, Request, Response } from 'express'
import { GetAllUsersFilters } from '../../database/dal/types';
import { CreateUserDTO, UpdateUserDTO } from '../dto/user.dto';
const userRouter = Router()
import * as controller from './../controller/user'

userRouter.get('/', async (req: Request, res: Response) => {
    const filters: GetAllUsersFilters = req.query
    const results = await controller.getAll(filters)
    return res.status(200).send(results)
});

//
// @desc Get One User
// 
userRouter.get('/:id', async (req: Request, res: Response) => {
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

//
// @desc One User Update
//
userRouter.put('/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const payload: UpdateUserDTO = req.body
        const result = await controller.update(id, payload)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "User Update Error."
        });
    }
});

//
// @desc One User Delete 
//
userRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const result = await controller.deleteById(id)
    return res.status(200).send({
        success: result
    })
});

//
// @desc Create One User
//
userRouter.post('/', async (req: Request, res: Response) => {
    try {
        const payload: CreateUserDTO = req.body
        const result = await controller.create(payload)
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({
            message: "User Create Error."
        });
    }

});

export default userRouter