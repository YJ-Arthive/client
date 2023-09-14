/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const notFound = css`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFound = () => {
  return (
    <div css={notFound}>
      <h1>존재하지 않는 페이지입니다.</h1>
      <h3>올바른 주소가 맞는지 다시 한 번 확인해 주세요.</h3>
      <Link to='/'>
        <div>홈으로 가기</div>
      </Link>
    </div>
  );
};

export default NotFound;
