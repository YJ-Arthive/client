/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const boardHeader = css`
  height: 200px;
  display: flex;
  flex-direction: column;
  font-size: 23px;
  font-weight: bold;
  justify-content: center;
  align-items: center;

  hr {
    border: 1px solid gray;
    width: 45px;
    margin-top: 10px;
  }
`;

const BoardHeader = ({ text }) => {
  return (
    <div css={boardHeader}>
      <p>{text}</p>
      <hr />
    </div>
  );
};

export default BoardHeader;
