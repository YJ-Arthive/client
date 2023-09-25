import { useState } from 'react';
import BoardDetail from '../../components/BoardDetail';
import HeartBtn from '../../components/HeartBtn';
import { useParams } from 'react-router-dom';
import { getGalleryBySlug } from '../../api/index';

const GalleryDetail = () => {
  const { gallerySlug } = useParams();
  const gallery = getGalleryBySlug(gallerySlug);
  console.log(gallery);

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
    <div>
      <BoardDetail
        text='Gallery'
        gallery={true}
        galleryName='흥에'
        // src={gallery.posterUrl}
        // address={gallery.address}
        // closed={gallery.closed}
        // hours={gallery.hours}
        // homePage={gallery.homePage}
      />
      <HeartBtn like={like} onClick={toggleLike} />
    </div>
  );
};

export default GalleryDetail;
