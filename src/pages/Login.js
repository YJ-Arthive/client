/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// import { login } from '../api/login';

const users = [
  {
    username: 'blue',
    password: '1234',
    userInfo: { name: 'hanYujin' },
  },
  {
    username: 'white',
    password: '1234',
    userInfo: { name: 'kimHongdae' },
  },
  {
    username: 'red',
    password: '1234',
    userInfo: { name: 'redGiant' },
  },
];

const _secret = '1234qwer!@#$';

const login = async (email, password) => {
  // TODO: 올바른 username, password를 입력하면 {message: 'SUCCESS', token: (원하는 문자열)} 를 반환
  const user = users.find(
    (user) => user.username === email && user.password === password
  );
  return user
    ? {
        message: 'SUCCESS',
        token: JSON.stringify({ user: user.userInfo, secret: _secret }),
      }
    : null;
};

const getUserInfo = async (token) => {
  // TODO: login 함수에서 받은 token을 이용해 사용자 정보를 받아오세요.
  const parsedToken = JSON.parse(token);
  if (!parsedToken?.secret || parsedToken.secret !== _secret) return null;

  const loggedUser = users.find((user) => {
    if (user.userInfo.name === parsedToken.user.name) return user;
  });
  return loggedUser ? loggedUser.userInfo : null;
};

const Login = () => {
  const [userInfo, setUserInfo] = useState({ name: '' });
  const [email, setEmail] = useState('');
  const [password, setPw] = useState('');
  const router = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    // const result = await login(email, password); api폴더의 login함수 불러오기
    // const {accessToken, refreshToken} = result;
    // localStorage.setItem('access', accessToken);
    // localStorage.setItem('refresh', refreshToken);
    router('/'); // home으로 이동하쉐이

    // TODO: form 에서 email password를 받아 login 함수를 호출하세요.
    const formData = new FormData(e.currentTarget);

    const loginRes = await login(
      formData.get('email'),
      formData.get('password')
    );
    if (!loginRes) return;

    const userInformation = await getUserInfo(loginRes.token);
    if (!userInformation) return;

    setUserInfo(userInformation);
  };

  return (
    <div css={login1}>
      <div css={loginWrap}>
        <div css={loginTitle}>
          <p>로그인</p>
        </div>
        <form id='login' onSubmit={handleSubmitLogin}>
          <div css={login_label}>이메일</div>
          <input
            css={login_input}
            name='email'
            type='text'
            value={email}
            onChange={onChangeEmail}
          />
          <div css={login_label}>비밀번호</div>
          <input
            css={login_input}
            name='password'
            type='password'
            value={password}
            onChange={onChangePw}
          />
        </form>
        <section>
          <Button name='로그인' form='login' type='submit' />
        </section>
        <section css={linkSignUp}>
          <Link to='/signup'>회원가입</Link>
        </section>
      </div>
      <div>
        <h2>User info</h2>
        {JSON.stringify(userInfo)}
      </div>
    </div>
  );
};

export default Login;
const login1 = css`
  background-color: #fbfbfb;
  padding: 120px 0 190px;
`;

const loginWrap = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  width: 457px;
  height: 497px;
  border-radius: 30px;
  background-color: white;
  margin: 0 auto;
  padding: 50px 35px;
  overflow: scroll;
`;

const loginTitle = css`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const login_label = css`
  font-size: 14px;
  font-weight: 400;
  color: #5e5e5e;
  margin-bottom: 8px;
`;

const login_input = css`
  width: 100%;
  height: 34px;
  border: 1px solid #d9d9d9;
  padding: 0 8px;
  margin-bottom: 25px;
`;

const linkSignUp = css`
  display: flex;
  justify-content: right;
  font-size: 14px;
  margin: 10px 5px;
  a {
    text-decoration: none;
    color: #3c3c3c;
  }
`;
