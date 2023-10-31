import GalleryRegister from './GalleryRegister';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GalleryEdit = () => {
  const { galleryId } = useParams();
  const [galleryData, setGalleryData] = useState({}); // 갤러리 데이터 상태
  const [loaded, setLoaded] = useState(false); // 데이터 로드 여부 상태

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://api.arthive.dev/api/v1/galleries/${galleryId}`
        );
        setGalleryData(response.data);
        setLoaded(true);
      } catch (e) {
        console.error('데이터 로드 실패:', e);
      }
    })(); //
  }, [galleryId]);

  return (
    <div className='GalleryEditPage'>
      {loaded ? (
        <GalleryRegister galleryData={galleryData} />
      ) : (
        <p>데이터를 로딩 중입니다...!!</p>
      )}
    </div>
  );
};

export default GalleryEdit;
