import { useState, useRef, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import AdminForm from '../../components/AdminForm';
import CommonInputRow from '../../components/CommonInputRow';
import FileInput from '../../components/FileInput';
import { requiredFieldsFilled } from '../../util/formUtils';
import { locationLists } from '../../data/locationLists';
import axios from 'axios';

const ExhibitionRegister = ({ exhibitionData }) => {
  const imgRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    artist: '',
    openTime: '',
    closeTime: '',
    closeDay: '',
    location: '',
    gallery: '',
    address: '',
    startDate: '',
    endDate: '',
    entranceFee: '',
    homePageUrl: '',
    posterUrl: '',
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

  const requiredFields = [
    'title',
    'artist',
    'openTime',
    'closeTime',
    'closeDay',
    'location',
    'gallery',
    'address',
    'startDate',
    'endDate',
    'entranceFee',
    'posterUrl',
  ];

  // exhibitionData가 전달되면(수정모드) 초기값을 설정
  useEffect(() => {
    if (exhibitionData && Object.keys(exhibitionData).length > 0) {
      setInputs(exhibitionData);
      setEditMode(true);
    }
  }, [exhibitionData]);

  // 입력값 상태 변경
  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const locationOptions = [...locationLists];

  const isAllFieldsFilled = requiredFieldsFilled(inputs, requiredFields);

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    console.log(inputs);

    if (!isAllFieldsFilled) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    if (editMode) {
      // 수정 모드: PATCH 요청
      await axios
        .patch(
          `https://api.arthive.dev/api/v1/exhibitions/${exhibitionData.id}`,
          inputs
        )
        .then(() => {
          alert('전시 정보가 수정되었습니다.');
        });
    } else {
      // 등록 모드: POST 요청
      await axios
        .post('https://api.arthive.dev/api/v1/exhibitions', inputs)
        .then(() => {
          alert('새로운 전시가 등록되었습니다.');
        });
    }
  };

  return (
    <div className='ExhibitionRegister'>
      <BoardHeader text='전시 등록' />
      <AdminForm
        inputs={inputs}
        target={'exhibitions'}
        formId={'newExhibitionInfo'}
        buttonName={'저장하기'}
        buttonForm={'newExhibitionInfo'}
        onSubmit={handleSubmitInfo}
      >
        <CommonInputRow
          label='전시명'
          name='title'
          value={title}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='작가'
          name='artist'
          value={artist}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='오픈 시간'
          name='openTime'
          value={openTime}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='마감 시간'
          name='closeTime'
          value={closeTime}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='휴관일'
          name='closeDay'
          value={closeDay}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='지역'
          name='location'
          value={location}
          onChange={handleChangeInfoInputs}
          options={locationOptions}
          type='select'
        />
        <CommonInputRow
          label='갤러리명'
          name='gallery'
          value={gallery}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='전시 주소'
          name='address'
          value={address}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='오픈일'
          name='startDate'
          value={startDate}
          onChange={handleChangeInfoInputs}
          type='date'
        />
        <CommonInputRow
          label='종료일'
          name='endDate'
          value={endDate}
          onChange={handleChangeInfoInputs}
          type='date'
        />
        <CommonInputRow
          label='관람료'
          name='entranceFee'
          value={entranceFee}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='홈페이지'
          name='homePageUrl'
          value={homePageUrl}
          onChange={handleChangeInfoInputs}
        />
        <FileInput
          name='posterUrl'
          value={posterUrl}
          onChange={handleChangeInfoInputs}
          imgRef={imgRef}
        />
      </AdminForm>
    </div>
  );
};

export default ExhibitionRegister;
