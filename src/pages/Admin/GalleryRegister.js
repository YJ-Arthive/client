/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import axios from 'axios';
import AdminForm from '../../components/AdminForm';
import CommonInputRow from '../../components/CommonInputRow';

const imgPreview = css`
  width: 200px;
`;

const GalleryRegister = ({ galleryData }) => {
  const [editMode, setEditMode] = useState(false);
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

  // galleryData가 전달되면(수정모드) 초기값을 설정
  useEffect(() => {
    if (galleryData && Object.keys(galleryData).length > 0) {
      setInputs(galleryData);
      setEditMode(true);
    }
  }, [galleryData]);

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

    if (editMode) {
      // 수정 모드: PATCH 요청
      await axios
        .patch(
          `https://api.arthive.dev/api/v1/galleries/${galleryData.id}`,
          inputs
        )
        .then(() => {
          alert('갤러리 정보가 수정되었습니다.');
        });
    } else {
      // 등록 모드: POST 요청
      await axios
        .post('https://api.arthive.dev/api/v1/galleries', inputs)
        .then(() => {
          alert('새로운 갤러리가 등록되었습니다.');
        });
    }
  };

  return (
    <div className='GalleryRegister'>
      <BoardHeader text='갤러리 등록' />
      <AdminForm
        inputs={inputs}
        target={'galleries'}
        formId={'newGalleryInfo'}
        buttonName={'저장하기'}
        buttonForm={'newGalleryInfo'}
        onSubmit={handleSubmitInfo}
      >
        <CommonInputRow
          label='갤러리명'
          name='galleryName'
          value={galleryName}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='주소'
          name='address'
          value={address}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='휴관일'
          name='closeDay'
          value={closeDay}
          placeholder='토, 일, 공휴일'
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='오픈 시간'
          name='openTime'
          value={openTime}
          placeholder='10:00'
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='마감 시간'
          name='closeTime'
          value={closeTime}
          placeholder='17:00'
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='홈페이지'
          name='homepageUrl'
          value={homepageUrl}
          onChange={handleChangeInfoInputs}
        />
        <tr>
          <th>이미지</th>
          <td>
            <img
              css={imgPreview}
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
      </AdminForm>
    </div>
  );
};

export default GalleryRegister;
