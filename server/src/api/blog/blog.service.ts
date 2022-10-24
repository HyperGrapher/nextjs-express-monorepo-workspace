/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IPostCreateBody } from '../../interfaces/blog.dto'
import { IPostDTO } from '../../interfaces/blog.dto'

export const getAllPosts = async (): Promise<any> => {
	return { message: 'ok' }
}

export const getPostById = async (postId: string): Promise<any> => {
	return { message: 'ok' }
}

export const createPost = async (body: IPostCreateBody): Promise<any> => {
	return { message: 'ok' }
}

export const updatePost = async (postId: string, postBody: IPostDTO) => {
	return { message: 'ok' }
}

export const deletePost = async (postId: string): Promise<any> => {
	return { message: 'ok' }
}
