import BoardDetail from '../../components/BoardDetail';

const GalleryDetail = () => {
  return (
    <div>
      <BoardDetail
        text='Gallery'
        gallery={true}
        src='https://qi-b.qoo10cdn.com/partner/goods_image/0/8/2/5/316650825g.jpg'
        address='서울 용산구 용산동2가 17/201호'
        closed='토, 일 공휴일'
        hours='10:00 ~ 19:00'
        homePage='홈페이지 바로가기'
      />
    </div>
  );
};

export default GalleryDetail;
