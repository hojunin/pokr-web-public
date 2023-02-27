import { OKR as OKR_TYPE } from '@type/okr';

export const fetchOkr = async (): Promise<OKR_TYPE[]> => {
  const res = await fetch(`http://127.0.0.1:8080/api/me_api/okr`, {
    method: 'GET',
    cache: 'default', // SSR 타입에 따라 분기
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsImVtYWlsIjpudWxsLCJleHAiOjE3MDkwMjE5NjN9.BB5PZHeCu3Lp41E1l_I059Z7HmK7rwDh57iVHeRARag',
    },
    mode: 'cors',
  });

  if (!res.ok) {
    switch (res.status) {
      case 401:
        throw new Error('인증 문제 발생');

      default:
        throw new Error('데이터 페칭 실패');
    }
  }

  return res.json();
};
