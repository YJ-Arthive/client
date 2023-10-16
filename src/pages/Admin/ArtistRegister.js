/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import Button from '../../components/Button';
import BoardHeader from '../../components/BoardHeader';
// import FileInput from '../../components/FileInput';
// import axios from 'axios';

const ArtistRegisterWrap = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // width: 1200px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

const ArtistInfo = css`
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
    border: 1px solid red;
    width: 1000px;
    height: 450px;
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
    align-items: center;
  }

  input {
    // border: 1px solid #a1a1a1;
    width: 614px;
    height: 33px;
    padding-left: 5px;
  }

  img {
    width: 200px;
  }
`;

const ArtistRegister = () => {
  const [inputs, setInputs] = useState({
    artist: '',
    artistEn: '',
    field: '',
    country: '',
    posterUrl: '',
  });

  const { artist, artistEn, field, country, posterUrl } = inputs;

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
    saveImgFile();
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    console.log(inputs);

    // await axios
    //   .post('https://api.arthive.dev/api/v1/artists', inputs)
    //   .then(() => {
    //     alert('새로운 작가가 등록되었습니다.');
    //   });
  };

  return (
    <div css={ArtistRegisterWrap}>
      <BoardHeader text='작가 등록' />
      <div css={ArtistInfo}>
        <form id='newArtistInfo' onSubmit={handleSubmitInfo}>
          <div>
            <table>
              <tbody>
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
                  <th>영문 이름</th>
                  <td>
                    <input
                      type='text'
                      name='artistEn'
                      value={artistEn}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>국적</th>
                  <td>
                    <input
                      type='text'
                      name='country'
                      value={country}
                      onChange={handleChangeInfoInputs}
                    />
                  </td>
                </tr>
                <tr>
                  <th>분야</th>
                  <td>
                    <input
                      type='text'
                      name='field'
                      value={field}
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

            <Button name={'저장하기'} form='newArtistInfo' type='submit' />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArtistRegister;
