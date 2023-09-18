/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import items from '../../api/artist-mock.json';
import Board from '../../components/Board';

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

const ArtistItem = ({ item }) => {
  return (
    <div css={artItem}>
      <div css={poster}>
        <img src={item.posterUrl} alt='포스터' />
      </div>
      <div css={title}>
        {item.artist}
        <span>
          <img src='assets/heart.png' alt='찜' />
        </span>
      </div>
      <div css={artist}>{item.artistEn}</div>
    </div>
  );
};

const Artist = () => {
  return (
    <div>
      <Board text='Artist'>
        {items.map((item) => {
          return <ArtistItem key={item.id} item={item} {...item} />;
        })}
      </Board>
    </div>
  );
};

export default Artist;
