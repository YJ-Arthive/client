/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const boardItem = css`
  // border: 1px solid pink;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 437px;
  margin-bottom: 20px;
`;

const poster = css`
  cursor: pointer;
  img {
    width: 250px;
    height: 100%;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);
  }
  margin-bottom: 10px;
`;

const title = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  font-size: 20px;

  span {
    text-align: right;
  }

  img {
    width: 25px;
    cursor: pointer;
  }
`;

const subTitle = css`
  font-size: 15px;
`;

const period = css`
  font-size: 13px;
  color: #5e5e5e;
`;

const BoardItem = ({ item }) => {
  return (
    <div css={boardItem}>
      <div css={poster}>
        <img src={item.posterUrl} alt='포스터' />
      </div>
      <div css={title}>
        {item.title}
        <span>
          <img src='assets/heart.png' alt='찜' />
        </span>
      </div>
      <div css={subTitle}>
        {item.gallery}/ {item.location}
      </div>
      <div css={period}>
        {item.startDate} ~ {item.endDate}
      </div>
    </div>
  );
};

export default BoardItem;
