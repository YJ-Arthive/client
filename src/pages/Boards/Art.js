// import { useParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardHeader from '../../components/BoardHeader';
import items from '../../api/art-mock.json';

const artWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const artList = css`
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

const artist = css`
  font-size: 15px;
`;

const artItem = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 437px;
  margin-bottom: 20px;
`;

const ArtItem = ({ item }) => {
  return (
    <div css={artItem}>
      <div css={poster}>
        <img src={item.posterUrl} alt='포스터' />
      </div>
      <div css={title}>
        {item.title}
        <span>
          <img src='assets/heart.png' alt='찜' />
        </span>
      </div>
      <div css={artist}>{item.artist}</div>
    </div>
  );
};

const Art = () => {
  return (
    <div>
      <BoardHeader text='Art' />
      <div css={artWrap}>
        <div css={artList}>
          {items.map((item) => {
            return <ArtItem key={item.id} item={item} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Art;
