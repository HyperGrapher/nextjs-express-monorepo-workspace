export interface IPostDTO {
	postId: string
	text: string
	title: string
	username: string
	created_at: string
	published: string
	comments: ICommentDTO[]
}

export type IPostCreateBody = Pick<IPostDTO, 'text' | 'username' | 'title' | 'published'>

export interface ICommentDTO {
	commentId: string
	text: string
	username: string
}

export interface IPostDetailDTO {
	error: null | boolean
	message: string
	data: IPostDTO | null
}

export interface IPostListDTO {
	error: null | boolean
	message: string
	data: IPostDTO[]
}
