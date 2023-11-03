/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { requestLogin } from '../api/userAPI';

const Login = () => {
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
    const result = await requestLogin(email, password);
    const { accessToken, refreshToken } = result;
    localStorage.setItem('access', accessToken);
    localStorage.setItem('refresh', refreshToken);
    router('/'); // home으로 이동하쉐이
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
