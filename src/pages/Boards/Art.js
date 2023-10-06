// import { useParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import BoardHeader from '../../components/BoardHeader';
import { getArts } from '../../api/index';
import HeartBtn from '../../components/HeartBtn';

const artWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const artList = css`
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

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ArtItem = ({ art }) => {
  return (
    <div css={artItem}>
      <div css={poster}>
        <Link to={`/art/${art.slug}`}>
          <img src={art.posterUrl} alt='포스터' />
        </Link>
      </div>
      <div css={title}>
        <Link to={`/art/${art.slug}`}>{art.title} </Link>
        <HeartBtn />
      </div>
      <div css={artist}>{art.artist}</div>
    </div>
  );
};

export const Art = () => {
  const arts = getArts();

  return (
    <div>
      <BoardHeader text='Art' />
      <div css={artWrap}>
        <div css={artList}>
          {arts.map((art) => {
            return <ArtItem key={art.id} art={art} {...art} />;
          })}
        </div>
      </div>
    </div>
  );
};
