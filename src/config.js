export const REST_API_KEY = '563cc1a5a644c5b8bb44dd3b85577012';
// 리다이렉트 경로 설정해줘야 함
export const REDIRECT_URI = 'http://localhost:9070/api/oauth2/kakao';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?
client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
