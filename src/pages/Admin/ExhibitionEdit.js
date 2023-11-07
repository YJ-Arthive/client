import { useState, useRef, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import AdminForm from '../../components/AdminForm';
import CommonInputRow from '../../components/CommonInputRow';
import { locationLists as locationOptions } from '../../data/locationLists';

const ExhibitionEdit = ({ exhibitionId }) => {
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

  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  useEffect(() => {
    // 전시 데이터를 로드하고 inputs 상태를 초기화
    //   axios
    //     .get(`URL_TO_FETCH_EXHIBITION_DATA/${exhibitionId}`)
    //     .then((response) => {
    //       const exhibitionData = response.data;
    //       setInputs({
    //         title: exhibitionData.title,
    //         artist: exhibitionData.artist,
    //         openTime: exhibitionData.openTime,
    //         closeTime: exhibitionData.closeTime,
    //         // ... 나머지 입력 필드 초기화
    //       });
    //     })
    //     .catch((error) => {
    //       // 에러 처리
    //     });
  }, [exhibitionId]); // exhibitionId가 변경될 때마다 실행

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

    // PATCH 요청을 보내어 수정된 데이터를 저장
    // axios
    //   .patch(`URL_TO_UPDATE_EXHIBITION_DATA/${exhibitionId}`, inputs)
    //   .then(() => {
    //     alert('전시가 수정되었습니다.');
    //   })
    //   .catch((error) => {
    //     // 에러 처리
    //   });
  };

  return (
    <div className='ExhibitionRegister'>
      <BoardHeader text='전시 수정' />
      <AdminForm
        inputs={inputs}
        target={'exhibitions'}
        formId={'exhibitionEditForm'}
        buttonName={'수정하기'}
        buttonForm={'exhibitionEditForm'}
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
          label='오픈시간'
          name='openTime'
          value={openTime}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='마감시간'
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
export default ExhibitionEdit;
