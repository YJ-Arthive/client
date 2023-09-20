/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputList = css`
  // border: 1px solid red;
  margin-bottom: 19px;
`;

const inputList_label = css`
  font-size: 14px;
  font-weight: 400;
  color: #5e5e5e;
  margin-bottom: 8px;
`;

const inputList_input = css`
  input {
    width: 100%;
    height: 34px;
    border: 1px solid #d9d9d9;
    padding: 0 8px;
  }

  input::placeholder {
    color: #999999;
  }
`;

const errorMsg = css`
  font-size: 12px;
  color: red;
`;

// const inputError = css``;

const InfoList = ({ label, input }) => {
  const { name, value, type, onChange, placeholder, checkInput } = input;
  const isError = value?.length !== 0 && checkInput.isConfirm === false;

  return (
    <section css={inputList}>
      <section css={inputList_label}>{label}</section>
      <section css={inputList_input}>
        <input
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          // css={isError ? `${inputError}` : null}
        />
        {isError && <span css={errorMsg}>{checkInput.errorMessage}</span>}
      </section>
    </section>
  );
};

export default InfoList;
