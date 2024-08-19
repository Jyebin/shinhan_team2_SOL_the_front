export const REST_API_KEY = 'fc20e739bd85e6abd13569447ce1be73';
// 리다이렉트 경로 설정해줘야 함
export const REDIRECT_URI = 'http://localhost:3000/';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?
client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
