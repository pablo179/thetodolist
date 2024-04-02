import app from './app.js'
import config from './config.js'
import { connectDB } from './db.js'

const server = app.listen(config.port, () => {
    console.info(`Server is running on port ${config.port}`)
})

connectDB()

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info('Server closed')
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
}

const unexpectedErrorHandler = (error) => {
    console.error(error)
    exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)