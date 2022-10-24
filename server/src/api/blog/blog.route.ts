import express from 'express'
import { logRouteAndTime } from '../../middlewares/logger.middleware'
import { index, detail, create, update, destroy } from './blog.controller'
import { validateUser } from '../../middlewares/auth.middleware'

const router = express.Router()

// middleware just for Blog route
router.use(logRouteAndTime)

// Parses jwt token and adds user to the request.
// If token not valid or exists then user is false
router.use(validateUser)

// Routes without params
router.route('/').get(index).post(create) // 'api/blog'

// Routes with params
router.route('/:postId').get(detail).patch(update).delete(destroy) // 'api/blog/3'

export default router
