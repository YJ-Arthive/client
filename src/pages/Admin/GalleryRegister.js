/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from '../../components/Button';

const galleryRegisterWrap = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 1160px;
  margin: 0 auto;
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

const GalleryRegister = () => {
  const [inputs, setInputs] = useState({
    galleryName: '',
    address: '',
    closeDay: '',
    openTime: '',
    closeTime: '',
    posterUrl: '',
    homepageUrl: '',
  });

  const {
    galleryName,
    address,
    closeDay,
    openTime,
    closeTime,
    posterUrl,
    homepageUrl,
  } = inputs;

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

    const signData = {
      galleryName,
      address,
      closeDay,
      openTime,
      closeTime,
      posterUrl,
      homepageUrl,
    };

    console.log(signData);
  };

  return (
    <div css={galleryRegisterWrap}>
      <div css={userInfo}>
        <h2>기본정보</h2>
        <form id='newMyInfo' onSubmit={handleSubmitInfo}>
          <table>
            <tr>
              <th>등록일</th>
              <td>오늘 날짜</td>
            </tr>
            <tr>
              <th>갤러리명</th>
              <td>
                <input
                  type='text'
                  value={galleryName}
                  onChange={handleChangeInfoInputs}
                />
              </td>
            </tr>
            <tr>
              <th>주소</th>
              <input
                type='text'
                value={address}
                onChange={handleChangeInfoInputs}
              />
            </tr>
            <tr>
              <th>휴관일</th>
              <td>
                <input value={closeDay} onChange={handleChangeInfoInputs} />
              </td>
            </tr>
            <tr>
              <th>홈페이지</th>
              <input
                type='text'
                value={homepageUrl}
                onChange={handleChangeInfoInputs}
              />
            </tr>
            <tr>
              <th>포스터</th>
              <input
                type='text'
                value={posterUrl}
                onChange={handleChangeInfoInputs}
              />
            </tr>
          </table>
          <Button name={'저장하기'} form='newMyInfo' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default GalleryRegister;
