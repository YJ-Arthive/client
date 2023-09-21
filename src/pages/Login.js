/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const login = css`
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

const Login = () => {
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div css={login}>
      <div css={loginWrap}>
        <div css={loginTitle}>
          <p>로그인</p>
        </div>
        <form id='login' onSubmit={handleSubmitLogin}>
          <div css={login_label}>이메일</div>
          <input css={login_input} name='email' type='text' />
          <div css={login_label}>비밀번호</div>
          <input css={login_input} name='password' type='password' />
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
