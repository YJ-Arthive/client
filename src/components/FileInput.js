// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const imgPreview = css`
  width: 200px;
`;

function FileInput({ name, value, onChange, imgRef }) {
  const [imgFile, setImgFile] = useState('');

  const saveImgFile = () => {
    if (imgRef.current) {
      // imgRef가 정의되어 있는 경우에만 처리
      const file = imgRef.current.files[0];
      if (file) {
        // 파일이 존재하는 경우에만 처리
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImgFile(reader.result);
        };
      }
    }
  };
  return (
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
          css={imgPreview}
        />
        <input
          type='file'
          accept='image/*'
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e);
            saveImgFile();
          }}
          ref={imgRef}
        />
      </td>
    </tr>
  );
}

export default FileInput;
