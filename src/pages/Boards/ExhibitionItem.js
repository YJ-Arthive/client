/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const exhibitionItem = css`
  display: flex;
  flex-direction: column;
  border: 1px solid pink;
  width: 250px;
  height: 427px;
`;

const poster = css`
  width: 250px;
`;

const ExhibitionItem = () => {
  return (
    <div css={exhibitionItem}>
      <div css={poster}>포스터</div>
      <div>타이틀</div>
      <div>장소</div>
      <div>기간</div>
    </div>
  );
};

export default ExhibitionItem;
