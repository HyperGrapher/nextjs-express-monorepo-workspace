import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('auth-token')
	if (!token) {
		req.user = false
		return next()
	}
	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET)
		req.user = verified
		next()
	} catch (error) {
		console.log(error)
		res.status(400).json({ error: true, messages: 'Invalid token' })
	}
}
