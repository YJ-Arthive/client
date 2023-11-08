/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const AdminRegisterBtn = ({ boardName }) => {
  const registerURL = `/admin/${boardName}-register/0`;
  return (
    <div css={adminBtnWrap}>
      <button css={registerAdminBtn}>
        <Link to={registerURL}>등록하기</Link>
      </button>
    </div>
  );
};

export default AdminRegisterBtn;

const adminBtnWrap = css`
  width: 1156px;
  margin: 0 auto 15px;
`;

const registerAdminBtn = css`
  width: 102px;
  height: 41px;
  background-color: white;
  border: 1px solid #5e5e5e;
  font-size: 18px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: blue;
  }
`;
