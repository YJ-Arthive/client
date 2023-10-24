/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import Button from '../../components/Button';
import InfoList from '../../components/InfoList';
// import { getMyInfo } from '../../api/myinfo';

const myInfoWrap = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  h2 {
    margin-bottom: 20px;
  }

  form {
    width: 100%;
  }

  table {
    width: 100%;
    height: 450px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 30px;

    th {
      width: 240px;
      height: 50px;
      font-size: 17px;
      font-weight: 500;
      border-bottom: 1px solid #e9e9e9;
      text-align: left;
      padding-left: 30px;
    }

    td {
      border-bottom: 1px solid #e9e9e9;
      font-size: 15px;
      color: #3d3d3d;
    }

    input {
      width: 180px;
      height: 34px;
      border: 1px solid #d9d9d9;
      padding: 0 8px;
      margin: 0;
    }
  }

  button {
    width: 370px;
  }
`;

const buttonWrap = css`
  display: flex;
  justify-content: center;
`;

const MyRegister = () => {
  return (
    <div className='MyRegister'>
      <h2>전시 등록 신청 내역</h2>
    </div>
  );
};

function MyInfo() {
  // const [data, setData] = useState(); // name, email, birth, phoneNumber
  useEffect(() => {
    // myinfo 정보 불러오기
    // getMyInfo().then((res) => setData(res));
  }, []);

  const [inputs, setInputs] = useState({
    newPwd: '',
    checkNewPwd: '',
    phoneNumber: '010-2323-3434', // 서버에서 받아 온다.
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

  useEffect(() => {
    setIsConfirmPassword(validatePassword());
  }, [newPwd]);

  useEffect(() => {
    setIsConfirmPhoneNumber(validatePhoneNumber());
  }, [phoneNumber]);

  useEffect(() => {
    setIsConfirmCheckPassword(validateCheckPassword());
  }, [checkNewPwd]);

  // 입력값 상태 변경
  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmitInfo = (e) => {
    e.preventDefault();
    if (!(isConfirmPwd && isConfirmCheckPwd && isConfirmPhoneNumber)) {
      alert('변경 사항을 조건에 맞게 입력해주세요.');
      return;
    }

    const signData = {
      newPwd,
      checkNewPwd,
      phoneNumber,
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
        <a href='#myinfo'>
          <div>회원 정보 수정</div>
        </a>
        <a href='#exhibition'>
          <div>전시 등록 신청 내역</div>
        </a>
      </div>
      <div css={userInfo}>
        <h2>기본정보</h2>
        <form id='newMyInfo' onSubmit={handleSubmitInfo}>
          <table>
            <tbody>
              <tr>
                <th>이메일</th>
                <td>abc123@naver.com</td>
                {/* {data?.email} */}
              </tr>
              <tr>
                <th>비밀번호 변경</th>
                <td>
                  <InfoList
                    label={'새 비밀번호'}
                    input={{
                      name: 'newPwd',
                      value: newPwd,
                      type: 'password',
                      onChange: handleChangeInfoInputs,
                      checkInput: {
                        isConfirm: isConfirmPwd,
                        errorMessage:
                          '영문, 숫자, 특수문자 포함 8~20자 사이로 입력해주세요.',
                      },
                    }}
                  />
                  <InfoList
                    label={'비밀번호 확인'}
                    input={{
                      name: 'checkNewPwd',
                      value: checkNewPwd,
                      type: 'password',
                      onChange: handleChangeInfoInputs,
                      checkInput: {
                        isConfirm: isConfirmCheckPwd,
                        errorMessage: '비밀번호가 일치하지 않습니다.',
                      },
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>이름</th>
                <td>한유진</td>
                {/* <td>{data?.name}</td> */}
              </tr>
              <tr>
                <th>휴대폰</th>
                <td>
                  <InfoList
                    input={{
                      name: 'phoneNumber',
                      value: phoneNumber,
                      onChange: handleChangeInfoInputs,
                      checkInput: {
                        isConfirm: isConfirmPhoneNumber,
                        errorMessage:
                          '형식에 맞춰 입력해주세요. (ex. 010-0000-0000)',
                      },
                    }}
                  />
                </td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>1998-09-09</td>
                {/* <td>{data?.birth}</td> */}
              </tr>
            </tbody>
          </table>
          <div css={buttonWrap}>
            <Button name={'저장하기'} form='newMyInfo' type='submit' />
          </div>
        </form>
      </div>
      <MyRegister />
    </div>
  );
}
export default MyInfo;
