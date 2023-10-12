import { useState, useEffect } from 'react';
import BoardDetail from '../../components/BoardDetail';
import HeartBtn from '../../components/HeartBtn';
import { Navigate, useParams } from 'react-router-dom';
// import { getGalleryById } from '../../api/index';
import axios from 'axios';

const GalleryDetail = () => {
  const { galleryId } = useParams();
  const [galleryDetail, setGalleryDetail] = useState([]);
  const [like, setLike] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.arthive.dev/api/v1/galleries/${galleryId}`)
      .then((response) => {
        setGalleryDetail(response.data);
        if (response.data.like) setLike(true);
      });
  }, [galleryId]);

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

  if (!galleryDetail) {
    return <Navigate to='/gallery' />;
  }

  return (
    <div>
      <BoardDetail
        text='Gallery'
        gallery={true}
        galleryName={galleryDetail.galleryName}
        src={galleryDetail.posterUrl}
        title={galleryDetail.title}
        address={galleryDetail.address}
        closed={galleryDetail.closed}
        hours={galleryDetail.hours}
        homePage={galleryDetail.homePage}
      />
      <HeartBtn like={like} onClick={toggleLike} />
    </div>
  );
};

export default GalleryDetail;
