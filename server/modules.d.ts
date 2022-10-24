declare namespace NodeJS {
	export interface ProcessEnv {
		PORT: string;
		TOKEN_SECRET: string;
	}
}

declare namespace Express {
	export interface Request {
		user: any;
	}
	export interface Response {
		user: any;
	}
  }