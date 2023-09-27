/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import AdBanner from '../components/AdBanner';
import SubBanner from '../components/SubBanner';
import data from '../api/home-data';

const homeWrap = css`
  // border: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1220px;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const Home = () => {
  const { hotExhibitions, novExhibitions, hotArtists } = data;

  return (
    <div css={homeWrap}>
      <AdBanner />
      <SubBanner
        name='요즘 뜨는 전시'
        more_map={'/exhibition'}
        data={hotExhibitions}
        showExhibit={true}
      />
      <SubBanner
        name='11월 추천 전시회'
        more_map={'/exhibition'}
        data={novExhibitions}
        showExhibit={true}
      />
      <SubBanner
        name='지금 주목받는 작가'
        more_map={'/artist'}
        data={hotArtists}
        showArtist={true}
      />
    </div>
  );
};

export default Home;
