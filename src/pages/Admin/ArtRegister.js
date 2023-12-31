import { useState, useRef, useEffect } from 'react';
import BoardHeader from '../../components/BoardHeader';
import AdminForm from '../../components/AdminForm';
import CommonInputRow from '../../components/CommonInputRow';
import FileInput from '../../components/FileInput';
import { requiredFieldsFilled } from '../../util/formUtils';
import axios from 'axios';

const ArtRegister = ({ artData }) => {
  const imgRef = useRef();
  const [editMode, setEditMode] = useState(false);
  const [inputs, setInputs] = useState({
    artTitle: '',
    artist: '',
    artInfo: '',
    posterUrl: '',
  });

  const { artTitle, artist, artInfo, posterUrl } = inputs;

  const requiredFields = ['artTitle', 'artist', 'artInfo', 'posterUrl'];

  useEffect(() => {
    if (artData && Object.keys(artData).length > 0) {
      setInputs(artData);
      setEditMode(true);
    }
  }, [artData]);

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
      await axios.patch(
        `https://api.arthive.dev/api/v1/arts/${artData.id}`,
        inputs
      );
      alert('작품 정보가 수정되었습니다.');
    } else {
      await axios.post('https://api.arthive.dev/api/v1/arts', inputs);
      alert('새로운 작품이 등록되었습니다.');
    }
  };

  return (
    <div className='ArtRegister'>
      <BoardHeader text='작품 등록' />
      <AdminForm
        inputs={inputs}
        target={'arts'}
        formId={'newArtsInfo'}
        buttonName={'저장하기'}
        buttonForm={'newArtsInfo'}
        onSubmit={handleSubmitInfo}
      >
        <CommonInputRow
          label='전시명'
          name='artTitle'
          value={artTitle}
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
          name='artInfo'
          value={artInfo}
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

export default ArtRegister;
