/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import InfoList from '../components/InfoList';
import Button from '../components/Button';

const signUp = css`
  // border: 1px solid red;
  background-color: #fbfbfb;
  padding: 120px 0 190px;
`;

const signUpWrap = css`
  display: flex;
  flex-direction: column;
  border: 1px solid #d9d9d9;
  width: 457px;
  height: 829px;
  border-radius: 30px;
  background-color: white;
  margin: 0 auto;
  padding: 50px 35px;
  overflow: scroll;
`;

const signUpTitle = css`
  // border: 1px solid blue;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    birthday: '',
    phoneNumber: '',
    password: '',
  });

  const { email, username, birthday, phoneNumber, password } = inputs;
  const [checkPassword, setCheckPassword] = useState('');

  // 유효성 검사
  const [isConfirmEmail, setIsConfirmEmail] = useState(true);
  const [isConfirmName, setIsConfirmName] = useState(true);
  const [isConfirmBirthday, setIsConfirmBirthday] = useState(false);
  const [isConfirmPhoneNumber, setIsConfirmPhoneNumber] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isConfirmCheckPassword, setIsConfirmCheckPassword] = useState(false);

  const EMAIL_REGEX =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  const PHONE_REGEX = /^010-\d{4}-\d{4}$/;
  const BIRTHDAY_REGEX =
    /^(?:19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  // 입렵값 상태 변경
  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleChangeCheckPassword = (e) => {
    setCheckPassword(e.currentTarget.value);
  };

  // 각 유효성 검사 함수
  const validateEmail = () => EMAIL_REGEX.test(email);
  const validateName = () => username.length > 1;
  const validateBirthday = () => BIRTHDAY_REGEX.test(birthday);
  const validatePhoneNumber = () => PHONE_REGEX.test(phoneNumber);
  const validatePassword = () => PWD_REGEX.test(password);
  const validateCheckPassword = () =>
    checkPassword === password || checkPassword.length === 0;

  // 이메일 유효성 검사
  useEffect(() => {
    setIsConfirmEmail(validateEmail());
  }, [email]);

  // 이름 유효성 검사
  useEffect(() => {
    setIsConfirmName(validateName());
  }, [username]);

  // 생년월일 유효성 검사
  useEffect(() => {
    setIsConfirmBirthday(validateBirthday());
  }, [birthday]);

  // 휴대전화 유효성 검사
  useEffect(() => {
    setIsConfirmPhoneNumber(validatePhoneNumber());
  }, [phoneNumber]);

  // 비밀번호 유효성 검사
  useEffect(() => {
    setIsConfirmPassword(validatePassword());
  }, [password]);

  // 비밀번호 확인 유효성 검사
  useEffect(() => {
    setIsConfirmCheckPassword(validateCheckPassword());
  }, [password, checkPassword]);

  // 폼 제출 처리
  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    if (
      !(
        isConfirmEmail &&
        isConfirmName &&
        isConfirmBirthday &&
        isConfirmPhoneNumber &&
        isConfirmPassword &&
        isConfirmCheckPassword
      )
    ) {
      alert('필수 사항을 조건에 맞게 모두 입력해주세요.');
      return;
    }

    const signData = {
      email,
      password,
      username,
      birthday,
      phoneNumber,
    };

    console.log(signData);
  };

  return (
    <div css={signUp}>
      <div css={signUpWrap}>
        <div css={signUpTitle}>
          <p>회원가입</p>
        </div>
        <form id='signUp' onSubmit={handleSubmitSignUp}>
          <InfoList
            label={'이메일'}
            input={{
              name: 'email',
              value: email,
              onChange: handleChangeInfoInputs,
              placeholder: 'arthive@gmail.com',
              checkInput: {
                isConfirm: isConfirmEmail,
                errorMessage:
                  '형식에 맞춰 입력해주세요. (ex. arthive@gmail.com)',
              },
            }}
          />
          <InfoList
            label={'성함'}
            input={{
              name: 'username',
              value: username,
              onChange: handleChangeInfoInputs,
              checkInput: {
                isConfirm: isConfirmName,
                errorMessage: '이름을 정확히 입력해주세요. (ex. 홍길동)',
              },
            }}
          />
          <InfoList
            label={'생년월일'}
            input={{
              name: 'birthday',
              value: birthday,
              placeholder: 'YYYY-MM-DD',
              onChange: handleChangeInfoInputs,
              checkInput: {
                isConfirm: isConfirmBirthday,
                errorMessage: '형식에 맞춰 입력해주세요. (ex. YYYY-MM-DD)',
              },
            }}
          />
          <InfoList
            label={'휴대전화'}
            input={{
              name: 'phoneNumber',
              value: phoneNumber,
              placeholder: '010-0000-0000',
              onChange: handleChangeInfoInputs,
              checkInput: {
                isConfirm: isConfirmPhoneNumber,
                errorMessage: '형식에 맞춰 입력해주세요. (ex. 010-0000-0000)',
              },
            }}
          />
          <InfoList
            label={'비밀번호'}
            input={{
              name: 'password',
              value: password,
              type: 'password',
              onChange: handleChangeInfoInputs,
              placeholder: '',
              checkInput: {
                isConfirm: isConfirmPassword,
                errorMessage:
                  '영문, 숫자, 특수문자 포함 8~20자 사이로 입력해주세요.',
              },
            }}
          />
          <InfoList
            label={'비밀번호 확인'}
            input={{
              name: 'checkPassword',
              value: checkPassword,
              type: 'password',
              onChange: handleChangeCheckPassword,
              placeholder: '',
              checkInput: {
                isConfirm: isConfirmCheckPassword,
                errorMessage: '비밀번호가 일치하지 않습니다.',
              },
            }}
          />
          <section>
            <Button name='가입하기' form='signUp' type='submit' />
          </section>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
