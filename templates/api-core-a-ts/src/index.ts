import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import appHandler, { appEvents } from '@kagiweb-tech/api-core-a'
import noteRoutes from './noteRoutes'
import taskRoutes from './taskRoutes'

// register routes
// register public routes
appHandler.addPublicRoute(noteRoutes)
// register private routes
appHandler.addPrivateRoute(taskRoutes)

const env = appHandler.getEnv()
const appRoutes = appHandler.getAppRoutes()
const app = express().use(appRoutes)

// bind app event callbacks
appEvents.on('otp-signin', (data) => {
    console.log('otp-signin has been emited!: ', data)
    console.log(`otp-signin ${ data.lt.key } key will be sent to ${ data.lt.recipient }`)
})
appEvents.on('otp-reset-pass', (data) => {
    // console.log('otp-reset-pass has been emited!: ', data)
    console.log(`otp-reset-pass ${ data.lt.key } key will be sent to ${ data.lt.recipient }`)
})

app.listen(env.AppPort, async () => {
    try {
        await appHandler.dbConnect()
        console.log(`- Successfully connected to database`)
        await appHandler.executePostDBConnectionProcess()
        console.log(`- Execute post db conection process`)
    } catch (err) {
        console.log(`!Error, was not able to connect to the mongo database: ${ err }`)
        // throw(err)
    }
    console.log(`- Server is running on port: ${ env.AppPort }`)
})