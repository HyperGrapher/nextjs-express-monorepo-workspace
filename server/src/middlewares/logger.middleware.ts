import { NextFunction, Request, Response } from 'express'

// Log requests with time to the console
export const logRouteAndTime = (req: Request, res: Response, next: NextFunction) => {
	const date = new Date()
	const datetime = new Date(date.getTime() - date.getTimezoneOffset())
	console.log(`Requested "${req.baseUrl + req.url}" at ${datetime}`)
	next()
}
