import express from 'express'

import ErrorHandler from '@kagiweb-tech/api-core-a/utils/errorHandler'
import routerIdentity from '@kagiweb-tech/api-core-a/utils/routerIdentity'

import TaskModel, { ITask } from './taskModel'

const router = express.Router()

router.get('/api/v1/tasks', async (req, res) => {
    const [result, statusCode] = await ErrorHandler.execute<ITask[]>(async () => {
        return await TaskModel.find()
    })

    return res.status(statusCode).send(result)
})

router.post('/api/v1/tasks', async (req, res) => {
    const [result, statusCode] = await ErrorHandler.execute<ITask>(async () => {
        return await TaskModel.create({
            title: 'task good',
            description: 'job'
        })
    })

    return res.status(statusCode).send(result)
})

routerIdentity.addAppRouteObj(router)
export default router