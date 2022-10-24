import { Response } from 'express'

export const unauthorizedResponse = (res: Response<any>, message = 'Unauthorized Request!') =>
	res.status(401).json({
		message,
		error: true,
	})

export const successResponse = (res: Response<any>, message = 'Success') =>
	res.status(201).json({
		message,
		error: false,
	})
