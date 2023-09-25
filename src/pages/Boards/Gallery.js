/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Board from '../../components/Board';
import HeartBtn from '../../components/HeartBtn';
import { useState } from 'react';
import { getGalleries } from '../../api/index';
import { Link } from 'react-router-dom';

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

const GalleryItem = ({ gallery }) => {
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
    <div css={artItem}>
      <div css={poster}>
        <Link to={`/gallery/${gallery.slug}`}>
          <img src={gallery.posterUrl} alt='포스터' />
        </Link>
      </div>
      <div css={title}>
        <Link to={`/gallery/${gallery.slug}`}>{gallery.galleryName}</Link>
        <HeartBtn like={like} onClick={toggleLike} />
      </div>
      <div css={artist}>{gallery.address}</div>
    </div>
  );
};

const Gallery = () => {
  const galleries = getGalleries();

  return (
    <div>
      <Board text='Gallery'>
        {galleries.map((gallery) => {
          return (
            <GalleryItem key={gallery.id} gallery={gallery} {...gallery} />
          );
        })}
      </Board>
    </div>
  );
};

export default Gallery;
