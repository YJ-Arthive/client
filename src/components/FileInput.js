/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef, useState } from 'react';
// import preview from `${process.env.PUBLIC_URL}/assets/preview-placeholder.png`;

const fileInput = css`
  position: relative;
  width: 182px;
  height: 262px;
  border-radius: 0 15px 0 15px;
  overflow: hidden;
`;

const fileInputPreview = css`
  display: block;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;

const fileClearButton = css`
  position: absolute;
  top: 9px;
  right: 9px;
  width: 26px;
  height: 26px;
  padding: 7px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
`;

function FileInput({ name, value, onChange }) {
  const preview = `${process.env.PUBLIC_URL}/assets/preview-placeholder.png`;
  const [imgFile, setImgFile] = useState('');

  const inputRef = useRef();

  const saveImgFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = '';
    onChange(name, null);
  };

  return (
    <div css={fileInput}>
      <img
        css={fileInputPreview}
        src={imgFile ? imgFile : preview}
        alt='이미지 미리보기'
      />
      <input
        className='FileInput-hidden-overlay'
        type='file'
        accept='image/*'
        onChange={saveImgFile}
        ref={inputRef}
      />
      {value && (
        <button css={fileClearButton} onClick={handleClearClick}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/ic-reset.png`}
            alt='선택해제'
          />
        </button>
      )}
    </div>
  );
}

export default FileInput;
