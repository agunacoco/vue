import axios from 'axios'
import { response } from 'express';

// axios 인스턴스를 생성.
const instance = axios.create({

});

// 인터셉터는 then이나 catch로 처리되기 전에 요청이나 응답을 가로챌 수 있다.
// 인터셉터는 관리자만 접근할 수 있는 관리자 페이지에 접근하기 전에 관리자 인증을 하는 용도로 활용.
instance.interceptors.request.use(
    (config) => { // 요청을 보내기 전에 수행할 일
        const token = localStorage.getItem('acessToken')
        if (token)
            config.headers.Authorization = token
        else
            console.log('No token')
        config.headers['Content-Type'] = 'multipart/form-data';
        return config;
    },
    (error) => { // 오류 요청을 보내기전 수행할 일
        // Promise객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.
        return Promise.reject(error);
    }
);
// 응답 인터셉터 추가
instance.interceptors.response.use(
    (response) => { // 응답 데이터를 가동
        return response;
    },
    (error) => { // 오류 응답을 처리
        // 
        return Promise.reject(error)
    }
);

export default instance;