/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputList = css`
  // border: 1px solid red;
  margin-bottom: 23px;
  width: 100%;
`;

const inputList_label = css`
  font-size: 15px;
  font-weight: 400;
  color: #282828;
  margin-bottom: 3px;
`;

const inputList_input = css`
  input {
    width: 100%;
    height: 34px;
    border: 1px solid #d9d9d9;
    padding: 0 8px;
    margin-top: 4px;
  }

  input::placeholder {
    color: #999999;
  }
`;

const errorMsg = css`
  font-size: 12px;
  color: red;
`;

const label_sub = css`
  font-size: 12px;
  font-weight: 400;
  color: #5e5e5e;
  margin: 5px 2px;
`;

const InfoList = ({ label, input, labelSub = false, labelSubText }) => {
  const {
    name,
    value,
    type,
    onChange,
    placeholder,
    checkInput = '',
    accept,
  } = input;
  const isError = value?.length !== 0 && checkInput.isConfirm === false;

  return (
    <section css={inputList}>
      <section css={inputList_label}>{label}</section>
      {labelSub && <p css={label_sub}>{labelSubText}</p>}
      <section css={inputList_input}>
        <input
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          accept={accept}
        />
        {isError && <span css={errorMsg}>{checkInput.errorMessage}</span>}
      </section>
    </section>
  );
};

export default InfoList;
