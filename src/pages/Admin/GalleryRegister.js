/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from '../../components/Button';
import BoardHeader from '../../components/BoardHeader';
import axios from 'axios';

const galleryRegisterWrap = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 1200px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const galleryInfo = css`
  // border: 1px solid green;
  // width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  table {
    // border: 1px solid red;
    width: 1000px;
    height: 550px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 60px;

    tr {
      height: 35px;
    }

    th {
      width: 240px;
      font-size: 17px;
      font-weight: 500;
      border-bottom: 1px solid #e9e9e9;
      text-align: left;
      padding-left: 20px;
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
    // justify-content: center;
  }

  input {
    // border: 1px solid #a1a1a1;
    width: 614px;
    height: 33px;
    padding-left: 5px;
  }
`;

const galleryHours = css`
  width: 614px;
  display: inline-block;
  input {
    width: 70px;
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

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    console.log(inputs);

    await axios
      .post('https://api.arthive.dev/api/v1/galleries', inputs)
      .then(() => {
        alert('새로운 갤러리가 등록되었습니다.');
      });
  };

  return (
    <div css={galleryRegisterWrap}>
      <BoardHeader text='갤러리 등록' />
      <div css={galleryInfo}>
        <form id='newGalleryInfo' onSubmit={handleSubmitInfo}>
          <div>
            <table>
              <tr>
                <th>갤러리명</th>
                <td>
                  <input
                    type='text'
                    name='galleryName'
                    value={galleryName}
                    onChange={handleChangeInfoInputs}
                  />
                </td>
              </tr>
              <tr>
                <th>주소</th>
                <td>
                  <input
                    type='text'
                    name='address'
                    value={address}
                    onChange={handleChangeInfoInputs}
                  />
                </td>
              </tr>
              <tr>
                <th>휴관일</th>
                <td>
                  <input
                    type='text'
                    name='closeDay'
                    value={closeDay}
                    placeholder='토, 일, 공휴일'
                    onChange={handleChangeInfoInputs}
                  />
                </td>
              </tr>
              <tr>
                <th>운영시간</th>
                <td>
                  <div css={galleryHours}>
                    <input
                      type='text'
                      name='openTime'
                      value={openTime}
                      placeholder='10:00'
                      onChange={handleChangeInfoInputs}
                    />{' '}
                    ~{' '}
                    <input
                      type='text'
                      name='closeTime'
                      value={closeTime}
                      placeholder='17:00'
                      onChange={handleChangeInfoInputs}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>홈페이지</th>
                <td>
                  <input
                    type='url'
                    name='homepageUrl'
                    value={homepageUrl}
                    onChange={handleChangeInfoInputs}
                  />
                </td>
              </tr>
              <tr>
                <th>포스터</th>
                <td>
                  <input
                    type='url' // 추후 file type 이미지 업로드로 수정
                    name='posterUrl'
                    value={posterUrl}
                    onChange={handleChangeInfoInputs}
                  />
                </td>
              </tr>
            </table>
          </div>
          <Button name={'저장하기'} form='newGalleryInfo' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default GalleryRegister;
