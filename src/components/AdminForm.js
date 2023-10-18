/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from './Button';

const AdminFormWrap = css`
  // border: 1px solid red;
  margin-bottom: 100px;
`;

const FormInfo = css`
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  table {
    // border: 1px solid pink;
    width: 1000px;
    // height: 1000px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 60px;

    tr {
      height: 55px;
    }

    th {
      width: 240px;
      font-size: 17px;
      font-weight: 500;
      border-bottom: 1px solid #e9e9e9;
      text-align: left;
      padding-left: 20px;
      // border: 1px solid black;
    }

    td {
      border-bottom: 1px solid #e9e9e9;
      font-size: 15px;
      color: #3d3d3d;
    }

    input {
      // border: 1px solid #a1a1a1;
      width: 600px;
      height: 32px;
      // padding-left: 5px;
    }

    textarea {
      height: 300px;
    }
  }

  button {
    width: 370px;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
  }

  img {
    width: 200px;
    // height: 280px;
  }
`;

const buttonWrap = css`
  display: flex;
  justify-content: center;
`;

// 수정, 등록 폼 공통 컴포넌트
const AdminForm = ({ formId, buttonName, buttonForm, onSubmit, children }) => {
  return (
    <div css={AdminFormWrap}>
      <div css={FormInfo}>
        <form id={formId} onSubmit={onSubmit}>
          <div>
            <table>
              <tbody>{children}</tbody>
            </table>
            <div css={buttonWrap}>
              <Button name={buttonName} form={buttonForm} type='submit' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
