/**
 * 자주 사용되는 정규식을 모아놓은 모듈입니다.
 */
const androidRegExp = /android\s([0-9.]*)/;
const iosRegExp = /iphone\s([0-9.]*)/;

const phoneRegExp = /^(?:(010\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/;
const emailRegExp =
	/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*.+=-])(?=.*[0-9]).{8,32}$/;
const nameRegExp = /^[가-힣]{2,20}$/;
const carNumberRegExe = /\d{2,3}[가-힣]{1}\d{4}$/;
const numberRegExp = /^[0-9]+$/;
const specialSymbolExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

export {
	androidRegExp,
	iosRegExp,
	phoneRegExp,
	emailRegExp,
	passwordRegExp,
	nameRegExp,
	carNumberRegExe,
	numberRegExp,
	specialSymbolExp,
};
