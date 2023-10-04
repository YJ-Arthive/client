/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import { useState } from 'react';
import BoardDetail from '../../components/BoardDetail';
import HeartBtn from '../../components/HeartBtn';
import { Navigate, useParams } from 'react-router-dom';
import { getArtBySlug } from '../../api/index';

const ArtDetail = () => {
  const { artSlug } = useParams();
  const art = getArtBySlug(artSlug);
  console.log(art);
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

  if (!art) {
    // 존재하지 않는 슬러그일 때 리다이렉트 경로 지정
    return <Navigate to='/art' />;
  }

  return (
    <div>
      <BoardDetail
        text='Art'
        src={art.posterUrl}
        title={art.title}
        subTitle={art.artist}
        description={art.artInfo}
      />
      <HeartBtn like={like} onClick={toggleLike} />
    </div>
  );
};

export default ArtDetail;
