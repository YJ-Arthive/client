import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BoardHeader from '../../components/BoardHeader';
import axios from 'axios';
import AdminForm from '../../components/AdminForm';
import CommonInputRow from '../../components/CommonInputRow';
import FileInput from '../../components/FileInput';

async function sendEditGalleryDataRequest(galleryData, inputs) {
  await axios.patch(
    `https://api.arthive.dev/api/v1/galleries/${galleryData.id}`,
    inputs
  );
  alert('갤러리 정보가 수정되었습니다.');
}

async function sendCreateGalleryDataRequest(inputs, imgRef) {
  const uuid = crypto.randomUUID();
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '/');
  const objectKey = `${today}/${uuid}`;

  const response = await axios.post(
    'https://api.arthive.dev/api/v1/files/pre-signed-url',
    { objectKey: objectKey }
  );
  const { preSignedUrl, cdnLink } = response.data;

  const final = { ...inputs };
  final.posterUrl = cdnLink;

  const file = imgRef.current.files[0];
  await axios.put(preSignedUrl, file);

  await axios.post('https://api.arthive.dev/api/v1/galleries', final);

  alert('새로운 갤러리가 등록되었습니다.');
}

const GalleryRegister = ({ galleryData }) => {
  const imgRef = useRef();
  const navigate = useNavigate();
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

  const { galleryName, address, closeDay, openTime, closeTime, homepageUrl } =
    inputs;

  const requiredFields = [
    'galleryName',
    'address',
    'closeDay',
    'openTime',
    'closeTime',
    'posterUrl',
    'homepageUrl',
  ];

  const requiredFieldsFilled = () => {
    for (const field of requiredFields) {
      if (!inputs[field]) {
        return false;
      }
    }
    return true;
  };

  // galleryData가 전달되면(수정모드) 초기값을 설정
  useEffect(() => {
    if (galleryData && Object.keys(galleryData).length > 0) {
      setInputs(galleryData);
      setEditMode(true);
    }
  }, [galleryData]);

  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmitInfo = async (e) => {
    e.preventDefault();

    if (!requiredFieldsFilled()) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    if (editMode) {
      await sendEditGalleryDataRequest(galleryData, inputs);
    } else {
      await sendCreateGalleryDataRequest(inputs, imgRef);
      navigate('/gallery');
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
        <FileInput
          name='posterUrl'
          onChange={handleChangeInfoInputs}
          imgRef={imgRef}
        />
      </AdminForm>
    </div>
  );
};

export default GalleryRegister;
