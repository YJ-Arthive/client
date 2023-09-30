/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BoardHeader from '../../components/BoardHeader';
import Button from '../../components/Button';

const myInfoWrap = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 1160px;
  margin: 0 auto;
`;

const boardBtn = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  a {
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  div {
    border: 1px solid black;
    width: 580px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
  }

  div:hover {
    background-color: black;
    color: white;
  }
`;

const userInfo = css`
  // border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  form {
    width: 100%;
  }

  table {
    width: 100%;
    height: 370px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 60px;

    th {
      width: 240px;
      font-size: 17px;
      font-weight: 500;
      border-bottom: 1px solid #e9e9e9;
      text-align: left;
      padding-left: 30px;
      // border: 1px solid black;
    }

    td {
      border-bottom: 1px solid #e9e9e9;
      font-size: 15px;
      color: #3d3d3d;
    }
  }

  button {
    width: 370px;
    // margin: 0 auto;
  }
`;

const MyRegister = () => {
  return <div>MyInfo 페이지에 들어가는 전시 등록 신청 내역 컴포넌트</div>;
};

function MyInfo() {
  const [inputs, setInputs] = useState({
    newPwd: '',
    checkNewPwd: '',
    phoneNumber: '', // 서버에서 받아오기
  });

  const { newPwd, checkNewPwd, phoneNumber } = inputs;

  // 유효성 검사
  const [isConfirmPwd, setIsConfirmPassword] = useState(false);
  const [isConfirmCheckPwd, setIsConfirmCheckPassword] = useState(false);
  const [isConfirmPhoneNumber, setIsConfirmPhoneNumber] = useState(false);

  const PWD_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  const PHONE_REGEX = /^010-\d{4}-\d{4}$/;

  const validatePhoneNumber = () => PHONE_REGEX.test(phoneNumber);
  const validatePassword = () => PWD_REGEX.test(newPwd);
  const validateCheckPassword = () =>
    checkNewPwd === newPwd || newPwd.length === 0;

  // 입력값 상태 변경
  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmitInfo = () => {
    e.preventDefault();
    if (
      !(
        isConfirmPwd &&
        isConfirmCheckPwd &&
        isConfirmPhoneNumber &&
      )
    ) {
      alert('변경 사항을 조건에 맞게 입력해주세요.');
      return;
    }

    const signData = {
      newPwd,checkNewPwd,phoneNumber
    };

    console.log(signData);
  };

  return (
    <div css={myInfoWrap}>
      <BoardHeader
        text='회원 정보'
        showHr={false}
        showText={true}
        subText='회원 정보 관리 페이지입니다.'
      />
      <div css={boardBtn}>
        <a href='#exhibition'>
          <div>회원 정보 수정</div>
        </a>
        <a href='#art'>
          <div>전시 등록 신청 내역</div>
        </a>
      </div>
      <div css={userInfo}>
        <h2>기본정보</h2>
        <form id='newMyInfo' onSubmit={handleSubmitInfo}>
          <table>
            <tr>
              <th>이메일</th>
              <td>arthive2023@gmail.com</td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                새 비밀번호
                <input
                  type='password'
                  value={newPwd}
                  onChange={(e) => setNewPwd(e.target.value)}
                />
                <br />
                새 비밀번호 확인
                <input
                  type='password'
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                />
                {passwordMatchError && (
                  <div style={{ color: 'red' }}>
                    비밀번호가 일치하지 않습니다.
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>김홍대</td>
            </tr>
            <tr>
              <th>휴대폰</th>
              <td>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>생년월일</th>
              <td>1998-07-17</td>
            </tr>
          </table>
          <Button name={'저장하기'} form='newMyInfo' type='submit' />
        </form>
      </div>
      <MyRegister />
    </div>
  );
}
export default MyInfo;
