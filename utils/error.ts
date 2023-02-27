interface ErrorParams {
	name: string;
	message: string;
}
// JavaScript 에러 객체를 확장한 커스텀 에러. 에러 타입별로 구체화가 필요합니다.
export class CustomError extends Error {
	constructor(error: ErrorParams) {
		super(error.name);
		this.name = error.name;
		this.message = error.message;
	}
}
