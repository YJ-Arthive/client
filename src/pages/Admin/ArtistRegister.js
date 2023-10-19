import { useState, useRef, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import AdminForm from '../../components/AdminForm';
import CommonInputRow from '../../components/CommonInputRow';
import FileInput from '../../components/FileInput';
import { requiredFieldsFilled } from '../../util/formUtils';
import axios from 'axios';

const ArtistRegister = ({ artistData }) => {
  const imgRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [inputs, setInputs] = useState({
    artist: '',
    artistEn: '',
    field: '',
    country: '',
    posterUrl: '',
  });

  const { artist, artistEn, field, country, posterUrl } = inputs;

  const requiredFields = [
    'artist',
    'artistEn',
    'field',
    'country',
    'posterUrl',
  ];

  useEffect(() => {
    if (artistData && Object.keys(artistData).length > 0) {
      setInputs(artistData);
      setEditMode(true);
    }
  }, [artistData]);

  // 입력값 상태 변경
  const handleChangeInfoInputs = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isAllFieldsFilled = requiredFieldsFilled(inputs, requiredFields);

  const handleSubmitInfo = async (e) => {
    e.preventDefault();
    console.log(inputs);

    if (!isAllFieldsFilled) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    if (editMode) {
      await axios
        .patch(
          `https://api.arthive.dev/api/v1/artists/${artistData.id}`,
          inputs
        )
        .then(() => {
          alert('작가 정보가 수정되었습니다.');
        });
    } else {
      await axios
        .post('https://api.arthive.dev/api/v1/artists', inputs)
        .then(() => {
          alert('새로운 작가가 등록되었습니다.');
        });
    }
  };

  return (
    <div className='ArtistRegister'>
      <BoardHeader text='작가 등록' />
      <AdminForm
        inputs={inputs}
        target={'arts'}
        formId={'newArtsInfo'}
        buttonName={'저장하기'}
        buttonForm={'newArtsInfo'}
        onSubmit={handleSubmitInfo}
      >
        <CommonInputRow
          label='작가'
          name='artist'
          value={artist}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='영문 이름'
          name='artistEn'
          value={artistEn}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='국적'
          name='country'
          value={country}
          onChange={handleChangeInfoInputs}
        />
        <CommonInputRow
          label='분야'
          name='field'
          value={field}
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

export default ArtistRegister;
