import { useRef, useEffect } from 'react';

/**
 * useEffect에서 무조건 최초 1회 실행되는 점을 생략합니다.
 * @param callback
 * @param deps
 */
const useMountEffect = (callback: () => void, deps: any[]) => {
	const isFirstRender = useRef(true);
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
		} else {
			return callback();
		}

		return () => {};
	}, deps);
};

export default useMountEffect;
