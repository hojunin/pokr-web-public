/**
 * replaceAll 메소드로 공백을 제거하는 기능을 폴리필한 모듈
 * @param targetString
 * @returns {string}
 */
export const removeSpaceInString = (targetString: string): string => {
	return targetString?.replace(/[" "]/g, '');
};
