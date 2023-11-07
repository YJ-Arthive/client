/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoList from '../components/InfoList';
import Button from '../components/Button';
import { requestSignup } from '../api/userAPI';
import axios from 'axios';

const signUp1 = css`
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
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 50px;
`;

const SignUp = () => {
  const [inputs, setInputs] = useState({
    emailAddress: '',
    name: '',
    phoneNumber: '',
    password: '',
  });
  const router = useNavigate();

  const { emailAddress, name, phoneNumber, password } = inputs;
  const [checkPassword, setCheckPassword] = useState('');

  // 유효성 검사
  const [isConfirmEmail, setIsConfirmEmail] = useState(true);
  const [isConfirmName, setIsConfirmName] = useState(true);
  const [isConfirmPhoneNumber, setIsConfirmPhoneNumber] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isConfirmCheckPassword, setIsConfirmCheckPassword] = useState(false);

  const EMAIL_REGEX =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  const PHONE_REGEX = /^010-\d{4}-\d{4}$/;

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
  const validateEmail = useCallback(() => {
    return EMAIL_REGEX.test(emailAddress);
  }, [emailAddress, EMAIL_REGEX]);
  const validateName = () => name.length > 1;
  const validatePhoneNumber = () => PHONE_REGEX.test(phoneNumber);
  const validatePassword = () => PWD_REGEX.test(password);
  const validateCheckPassword = () =>
    checkPassword === password || checkPassword.length === 0;

  // 이메일 유효성 검사, 중복검사
  useEffect(() => {
    setIsConfirmEmail(validateEmail());
  }, [emailAddress, validateEmail]);

  // 이름 유효성 검사
  useEffect(() => {
    setIsConfirmName(validateName());
  }, [name]);

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
        isConfirmPhoneNumber &&
        isConfirmPassword &&
        isConfirmCheckPassword
      )
    ) {
      alert('필수 사항을 조건에 맞게 모두 입력해주세요.');
      return;
    } else {
      await axios
        .get('https://api.arthive.dev/api/v1/users/duplication')
        .then((response) => {
          console.log(response);
          if (response.isDuplicated === 'true') {
            alert('이미 존재하는 이메일입니다. 다시 입력해 주세요.');
            return;
          }
        });
      await requestSignup(inputs);
      router('/');
    }
  };

  return (
    <div css={signUp1}>
      <div css={signUpWrap}>
        <div css={signUpTitle}>
          <p>회원가입</p>
        </div>
        <form id='signUp' onSubmit={handleSubmitSignUp}>
          <InfoList
            label={'이메일'}
            input={{
              name: 'emailAddress',
              value: emailAddress,
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
              name: 'name',
              value: name,
              onChange: handleChangeInfoInputs,
              placeholder: '홍길동',
              checkInput: {
                isConfirm: isConfirmName,
                errorMessage: '이름을 정확히 입력해주세요. (ex. 홍길동)',
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
