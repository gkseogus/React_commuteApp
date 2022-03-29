import moment from 'moment';
import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';

// 개발자 콘솔에서 불러올 클라이언트 ID 및 API 키
const CLIENT_ID = '653145946472-jn4efggid62mt7ceunkrvehioalffl32.apps.googleusercontent.com';

const LoginPage = (res: any) => {
  const history = useHistory();
  
  // 버튼 클릭 시 로그인한 사용자 정보를 출력
  const handleAuthClick = async (res: any) => {
    window.localStorage.setItem('setTime',moment().format('YYYY MM월 DD일'));

    window.sessionStorage.setItem('user_id', res.googleId);
    window.sessionStorage.setItem('user_email', res.Ju.zv);
    window.sessionStorage.setItem('user_name', res.Ju.sf);
    window.sessionStorage.setItem('user_name2', `안녕하세요! ${res.Ju.sf}님`);

    window.location.reload();
  };

  // Login Fail
  const responseFail = (err: void) => {
    console.error('Login Fail', err);
  };

  useEffect(() => {
    if(window.sessionStorage.length !== 0){
      history.push('/');
    }
  });

    return (
      <div>
        <GoogleLogin
          clientId={CLIENT_ID}
          onSuccess={handleAuthClick}
          onFailure={responseFail}
          render={_renderProps => (<div></div>)}
          uxMode='redirect'
          redirectUri='http://localhost:3000/api/auth/callback/google'
          autoLoad={true}
        ></GoogleLogin>
      </div>
    );
};

export default React.memo(LoginPage);