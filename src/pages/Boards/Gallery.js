/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Board from '../../components/Board';
import HeartBtn from '../../components/HeartBtn';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

export const GalleryItem = ({ gallery }) => {
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
        <Link to={`/gallery/${gallery.id}`}>
          <img src={gallery.posterUrl} alt='포스터' />
        </Link>
      </div>
      <div css={title}>
        <Link to={`/gallery/${gallery.id}`}>{gallery.galleryName}</Link>
        <HeartBtn like={like} onClick={toggleLike} />
      </div>
      <div css={SubTitle}>{gallery.address}</div>
    </div>
  );
};

export const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.arthive.dev/api/v1/galleries?page=1&size=10')
      .then((response) => {
        setGalleryData(response.data.data);
      });
  }, []);

  return (
    <div>
      <Board text='Gallery'>
        {galleryData.map((gallery) => {
          return (
            <GalleryItem key={gallery.id} gallery={gallery} {...gallery} />
          );
        })}
      </Board>
    </div>
  );
};
