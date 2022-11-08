import { Router } from 'express'
import userRouter from './users'
import reportRouter from './reports'

const router = Router()

router.use('/users', userRouter)

router.use('/reports', reportRouter)


export default router