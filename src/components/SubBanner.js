/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ExhibitionItem } from '../pages/Boards/Exhibition';
import { ArtistItem } from '../pages/Boards/Artist';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const subBanner = css`
  // border: 1px solid red;
  width: 100%;
  height: 385px;
  margin-bottom: 220px;
`;

const subBannerTitle = css`
  // border: 1px solid red;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93%;
  margin: 0 auto 10px 0;

  li {
    list-style: none;
  }
`;

const header_name = css`
  font-size: 27px;
  font-weight: 700;
`;

const map_point = css`
  background-color: #c3fd1e;
  border-radius: 20px;
  color: black;
  float: right;
  text-align: center;
  display: flex;

  a {
    color: black;
    padding: 2px 9px 2px 9px;
    font-size: 12px;
    font-weight: 500;
    align-items: center;
    text-decoration: none;
  }
`;

const SubBanner_Swiper = css`
  // border: 1px solid black;
  width: 100%;
  padding: 10px 40px 0 40px;

  img {
    // width: 260px;
    // height: 320px;
  }
`;

const SubBanner = ({
  name,
  more_map,
  data,
  showExhibit = false,
  showArtist = false,
}) => {
  return (
    <div css={subBanner}>
      <div css={subBannerTitle}>
        <li css={header_name}>{name}</li>
        <li>
          <span css={map_point}>
            <a href={more_map}>더보기</a>
          </span>
        </li>
      </div>
      <Swiper
        css={SubBanner_Swiper}
        modules={[Navigation, Scrollbar]}
        spaceBetween={47}
        slidesPerView={4}
        loop={true}
        navigation={true}
        scrollbar={{ draggable: true }}
        style={{
          // 화살표 스타일
          '--swiper-navigation-color': '#000000',
          '--swiper-navigation-size': '28px',
        }}
      >
        {showExhibit &&
          data.map((exhibition) => {
            return (
              <SwiperSlide key={exhibition.id}>
                {
                  <ExhibitionItem
                    key={exhibition.id}
                    exhibition={exhibition}
                    {...exhibition}
                    showHeart={false}
                  />
                }
              </SwiperSlide>
            );
          })}
        {showArtist &&
          data.map((artist) => {
            return (
              <SwiperSlide key={artist.id}>
                {
                  <ArtistItem
                    key={artist.id}
                    artist={artist}
                    {...artist}
                    showHeart={false}
                  />
                }
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SubBanner;
