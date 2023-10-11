/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Board from '../../components/Board';
import HeartBtn from '../../components/HeartBtn';
import { getArtists } from '../../api/index';

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

  a {
    text-decoration: none;
    color: black;
  }
`;

const SubTitle = css`
  font-size: 15px;
`;

const itemWrap = css`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 437px;
  margin-bottom: 20px;
`;

export const ArtistItem = ({ artist, showHeart = true }) => {
  const [like, setLike] = useState(false);

  // 사용자가 좋아요를 눌렀는지 확인
  // useEffect(async () => {
  //   const fetchData = async () => {
  //     const res = await axios.get(...)
  //     if (res.data.type === 'liked') setLike(true);
  //   };
  //   fetchData();
  // }, []);

  const toggleLike = async () => {
    // const res = await axios.post(...) // [POST] 사용자가 좋아요 누름 -> DB 갱신
    setLike(!like);
  };
  return (
    <div css={itemWrap}>
      <div css={poster}>
        <Link to={`/artist/${artist.id}`}>
          <img src={artist.posterUrl} alt='포스터' />
        </Link>
      </div>
      <div css={title}>
        <Link to={`/artist/${artist.id}`}>{artist.artistName} </Link>
        {showHeart && <HeartBtn like={like} onClick={toggleLike} />}
      </div>
      <div css={SubTitle}>{artist.artistEn}</div>
    </div>
  );
};

export const Artist = () => {
  const artists = getArtists();

  return (
    <div>
      <Board text='Artist'>
        {artists.map((artist) => {
          return <ArtistItem key={artist.id} artist={artist} {...artist} />;
        })}
      </Board>
    </div>
  );
};
