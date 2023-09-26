/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const adBanner = css`
  // border: 1px solid pink;
  margin-top: 50px;
  margin-bottom: 150px;
  width: 1160px;
`;

const adBanner_swiper = css`
  border-radius: 47px;
  height: 400px;

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

const AdBanner = () => {
  return (
    <div css={adBanner}>
      <Swiper
        css={adBanner_swiper}
        modules={[Pagination, Autoplay]}
        spaceBetween={0} // 슬라이드 간격
        slidesPerView={1} // 한번에 보여지는 슬라이드 개수
        loop={true} // 루프 슬라이드
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{
          '--swiper-pagination-color': '#C3FD1E',
          '--swiper-pagination-bullet-size': '10px',
        }}
      >
        <SwiperSlide>
          <a href='https://www.daum.net/'>
            <img
              src='https://newsimg-hams.hankookilbo.com/2022/10/19/7576de8e-e4f6-4827-9f17-cfefe4be052f.jpg'
              alt='광고 이미지_1'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.daum.net/'>
            <img
              src='https://newsimg-hams.hankookilbo.com/2022/10/19/64ff9dd1-43eb-4bb7-9fb7-ece0a2f793fc.jpg'
              alt='광고 이미지_2'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.daum.net/'>
            <img
              src='https://image.tving.com/upload/cms/caip/CAIP0400/P000388342.jpg/dims/resize/1280'
              alt='광고 이미지_3'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.daum.net/'>
            <img
              src='https://tvstore-phinf.pstatic.net/20230619_40/1687163208080VlnMv_JPEG/00031.jpg'
              alt='광고 이미지_4'
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.daum.net/'>
            <img
              src='https://img.seoul.co.kr/img/upload/2021/09/17/SSI_20210917150355.jpg'
              alt='광고 이미지_5'
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdBanner;
