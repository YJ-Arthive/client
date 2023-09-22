/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const heart = css`
  border: 0;
  border-radius: 55px;
  outline: none;
  background-color: white;
  height: 25px;

  img {
    float: right;
    width: 25px;
    cursor: pointer;
  }
`;

const HeartBtn = ({ like, onClick }) => {
  const heartImg = `${process.env.PUBLIC_URL}/assets/heartEmpty.png`;
  const heartFullImg = `${process.env.PUBLIC_URL}/assets/heartFull.png`;

  return (
    <button css={heart} onClick={onClick}>
      <img src={like ? heartFullImg : heartImg} alt='찜' />
    </button>
  );
};

export default HeartBtn;
