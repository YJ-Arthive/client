/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import Button from '../../components/Button';
import BoardHeader from '../../components/BoardHeader';

const ExhibitionRegisterWrap = css`
  border: 1px solid red;
  margin-bottom: 100px;
`;

const ExhibitionInfo = css`
  border: 1px solid green;
  // width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  table {
    border: 1px solid pink;
    width: 1000px;
    // height: 1000px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 60px;

    tr {
      height: 55px;
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

    input {
      // border: 1px solid #a1a1a1;
      width: 600px;
      height: 32px;
      // padding-left: 5px;
    }

    textarea {
      height: 300px;
    }
  }

  button {
    width: 370px;
    // justify-content: center;
    align-items: center;
  }

  img {
    width: 200px;
    // height: 280px;
  }
`;

const ExhibitionRegister = () => {
  const [inputs, setInputs] = useState({
    title: '', // 전시명
    artist: '', // 작가
    openTime: '', // 오픈시간
    closeTime: '', // 마감시간
    closeDay: '',
    location: '', // 지역
    gallery: '', // 갤러리명
    address: '', // 전시 주소
    startDate: '', // 오픈일
    endDate: '', // 종료일
    entranceFee: '', // 관람료
    homePageUrl: '', // 홈페이지
    posterUrl: '', // 포스터
  });

  const {
    title,
    artist,
    openTime,
    closeTime,
    closeDay,
    location,
    gallery,
    address,
    startDate,
    endDate,
    entranceFee,
    homePageUrl,
    posterUrl,
  } = inputs;

  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  // 입력값 상태 변경
  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    saveImgFile();
  };

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    console.log(inputs);

    // await axios
    //   .post('https://api.arthive.dev/api/v1/arts', inputs)
    //   .then(() => {
    //     alert('새로운 전시가 등록되었습니다.');
    //   });
  };
  return (
    <div css={ExhibitionRegisterWrap}>
      <BoardHeader text='전시 등록' />
      <div css={ExhibitionInfo}>
        <form id='newExhibitionInfo' onSubmit={handleSubmitInfo}>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>전시명</th>
                  <td>
                    <input
                      type='text'
                      name='title'
                      value={title}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>작가</th>
                  <td>
                    <input
                      type='text'
                      name='artist'
                      value={artist}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>오픈시간</th>
                  <td>
                    <input
                      type='text'
                      name='openTime'
                      value={openTime}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>마감시간</th>
                  <td>
                    <input
                      type='text'
                      name='closeTime'
                      value={closeTime}
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
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>지역</th>
                  <td>
                    <input
                      type='text'
                      name='location'
                      value={location}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>갤러리명</th>
                  <td>
                    <input
                      type='text'
                      name='gallery'
                      value={gallery}
                      onChange={handleChangeInfoInputs}
                    />{' '}
                  </td>
                </tr>
                <tr>
                  <th>전시 주소</th>
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
                  <th>오픈일</th>
                  <td>
                    <input
                      type='text'
                      name='startDate'
                      value={startDate}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>종료일</th>
                  <td>
                    <input
                      type='text'
                      name='endDate'
                      value={endDate}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>관람료</th>
                  <td>
                    <input
                      type='text'
                      name='entranceFee'
                      value={entranceFee}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>홈페이지</th>
                  <td>
                    <input
                      type='text'
                      name='homePageUrl'
                      value={homePageUrl}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>이미지</th>
                  <td>
                    <img
                      src={
                        imgFile
                          ? imgFile
                          : `${process.env.PUBLIC_URL}/assets/register-preview.png`
                      }
                      alt='이미지 미리보기'
                    />
                    <input
                      type='file'
                      accept='image/*'
                      name='posterUrl'
                      value={posterUrl}
                      onChange={handleChangeInfoInputs}
                      ref={imgRef}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <Button name={'저장하기'} form='newExhibitionInfo' type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExhibitionRegister;
