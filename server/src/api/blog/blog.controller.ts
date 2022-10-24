/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express'
import { unauthorizedResponse } from '../../helpers/responses'
import { IPostDTO, IPostCreateBody } from '../../interfaces/blog.dto'
import { getAllPosts, getPostById, createPost, deletePost, updatePost } from './blog.service'

export const index = async (req: Request, res: Response) => {
	try {
		const posts = await getAllPosts()

		return res.status(200).json({
			data: posts,
			message: 'success',
			error: null,
		})
	} catch (error) {
		return res.status(500).json({ message: 'error', error })
	}
}

export const detail = async (req: Request<{ postId: string }>, res: Response) => {
	const { postId } = req.params

	try {
		const post = await getPostById(postId)

		return res.status(200).json({
			data: post,
			message: 'success',
			error: null,
		})
	} catch (error) {
		res.status(500).json({ message: 'error', error })
	}
}

export const create = async (req: Request<{}, {}, IPostCreateBody>, res: Response) => {
	// User Guard.
	if (!req.user) return unauthorizedResponse(res)

	try {
		await createPost(req.body)
		res.status(201).json({ message: 'success', error: null })
	} catch (error: any) {
		res.status(error.statusCode).json({ message: 'error', error })
	}
}

export const update = async (req: Request<{ postId: string }, {}, IPostDTO>, res: Response) => {
	const { postId } = req.params

	try {
		const post = await updatePost(postId, req.body)
		res.status(201).json({ message: 'success', error: null, data: post })
	} catch (error: any) {
		res.status(error.statusCode).json({ message: 'error', error })
	}
}

export const destroy = async (req: Request<{ postId: string }>, res: Response) => {
	const { postId } = req.params

	try {
		await deletePost(postId)
		res.status(200).json({ message: 'success', error: null })
	} catch (error: any) {
		res.status(error.statusCode).json({ message: 'error', error })
	}
}
