/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Express, Request, Response } from 'express'
import blogRoutes from './api/blog/blog.route'
import { ROUTES } from './config/constants.config'
import dotenv from 'dotenv'
import helmet from 'helmet'
import { successResponse } from './helpers/responses'
import cors from 'cors'

dotenv.config()
const app: Express = express()
const port = process.env.PORT || '8080'

// Register middlewares
app.use(cors())
app.use(express.json()) // Parses json request body
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded.
app.use(helmet()) // Adds recomended response headers for additional security.

// Register routes
app.use(ROUTES.blog, blogRoutes)

// Root endpoint
app.get('/', (req: Request, res: Response<any>) => {
	return successResponse(res)
})

// Client endpoint
app.get('/express', (req: Request, res: Response<any>) => {
	return res.json({message: 'Hi from express server running on port 8080!'})
})

// Initilize the app
app.listen(port, () => {
	console.info(`Server is running at: http://localhost:${port}`)
})
