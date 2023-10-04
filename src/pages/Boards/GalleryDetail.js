import { useState } from 'react';
import BoardDetail from '../../components/BoardDetail';
import HeartBtn from '../../components/HeartBtn';
import { Navigate, useParams } from 'react-router-dom';
import { getGalleryBySlug } from '../../api/index';

const GalleryDetail = () => {
  const { gallerySlug } = useParams();
  const gallery = getGalleryBySlug(gallerySlug);

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

  if (!gallery) {
    return <Navigate to='/gallery' />;
  }

  return (
    <div>
      <BoardDetail
        text='Gallery'
        gallery={true}
        galleryName={gallery.galleryName}
        src={gallery.posterUrl}
        title={gallery.title}
        address={gallery.address}
        closed={gallery.closed}
        hours={gallery.hours}
        homePage={gallery.homePage}
      />
      <HeartBtn like={like} onClick={toggleLike} />
    </div>
  );
};

export default GalleryDetail;
