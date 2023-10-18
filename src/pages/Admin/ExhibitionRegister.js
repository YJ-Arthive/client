import { useState, useRef } from 'react';
import BoardHeader from '../../components/BoardHeader';
import AdminForm from '../../components/AdminForm';
import CommonInputRow from '../../components/CommonInputRow';

const ExhibitionRegister = () => {
  const [inputs, setInputs] = useState({
    title: '', // 전시명
    artist: '', // 작가
    openTime: '', // 오픈시간
    closeTime: '', // 마감시간
    closeDay: '', // 휴관일
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

  const locationOptions = [
    { label: '서울', value: '서울' },
    { label: '경기 인천', value: '경기 인천' },
    { label: '대구 경북', value: '대구 경북' },
    { label: '부산 울산 경남', value: '부산 울산 경남' },
    { label: '광주 전라', value: '광주 전라' },
    { label: '대전 충청 세종', value: '대전 충청 세종' },
    { label: '제주 강원', value: '제주 강원' },
  ];

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
      </AdminForm>
    </div>
  );
};

export default ExhibitionRegister;
