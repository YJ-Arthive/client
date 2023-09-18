/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardHeader from './BoardHeader';

const boardWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const boardList = css`
  // border: 1px solid blue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  gap: 50px;
  width: 1156px;
  height: 100%;
  margin-bottom: 70px;
`;

const Board = ({ children, text = '게시판' }) => {
  return (
    <div className='Board'>
      <BoardHeader text={text} />
      <div css={boardWrap}>
        <div css={boardList}>{children}</div>
      </div>
    </div>
  );
};

export default Board;
