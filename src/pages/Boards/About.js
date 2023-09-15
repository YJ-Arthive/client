/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardHeader from '../../components/BoardHeader';

const about_1_wrap = css`
  background-color: rgb(244, 244, 244);
  height: 800px;
`;

const about_1 = css`
  width: 1200px;
  text-align: center;
  margin: 0 auto;

  h1 {
    text-align: center;
    padding-top: 70px;
    padding-bottom: 30px;
    font-size: 80px;
  }

  h2 {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  span {
    color: #c3fd1e;
    -webkit-text-stroke: 0.8px black;
  }

  p {
    text-align: center;
    font-size: 20px;
    line-height: 33px;
  }
`;

const about_p = css`
  padding-top: 40px;
`;

const about_2_wrap = css`
  height: 700px;
`;

const about_2 = css`
  width: 1200px;
  text-align: center;
  /* border: 1px solid yellow; */
  margin: 0 auto;
  padding-top: 120px;
`;

const about_2_img = css`
  padding-top: 70px;

  img {
    width: 250px;
    height: 250px;
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);
  }
`;

const about_3_wrap = css`
  height: 400px;
  background-color: #f6f6f6;
`;

const about_3 = css`
  width: 1000px;
  text-align: center;
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const about_3_logo = css`
  h1 {
    text-align: center;
    font-size: 90px;
  }
  span {
    color: #c3fd1e;
    -webkit-text-stroke: 0.8px black;
  }
`;

const About = () => {
  return (
    <div className='About'>
      <BoardHeader text='About' />
      <div css={about_1_wrap}>
        <div css={about_1}>
          <h1>
            Arth<span>!</span>ve
          </h1>
          <h2>아타이브는 어쩌구 저쩌구 입니다람쥐</h2>
          <div css={about_p}>
            <p>아타이브는 예술을 만나는 특별한 경험을 선사합니다.</p>
            <p>
              예술 작품의 물결에 몸을 맡기고, 창조적인 영감의 풍경을
              탐험해보세요.
            </p>
            <p>
              작가들의 눈부신 창작물과 독창적인 스토리텔링은 극적인 이야기로
              여러분을 초대합니다.
            </p>
          </div>
          <div css={about_p}>
            <p>
              풍성한 전시회가 쏟아지는 저희 웹사이트는 예술의 세계에 한 발짝 더
              가까워지기 위한 완벽한 시작점입니다.
            </p>
            <p>
              작품을 둘러보고, 작가와 대화하며, 갤러리들의 아름다운 장소를
              탐험해보세요.
            </p>
          </div>
          <div css={about_p}>
            <p>
              우리의 목표는 예술을 사랑하는 모든 이들에게 새로운 발견과 아름다운
              체험을 선사하는 것입니다.
            </p>
            <p>
              여러분의 예술적 여정을 함께하며, 지금 바로 저희 웹사이트에서
              예술의 미소를 만나보세요.
            </p>
          </div>
          <br />
        </div>
      </div>
      <div css={about_2_wrap}>
        <div css={about_2}>
          <h2>다양한 전시 정보, 작품, 작가, 갤러리를 한 눈에</h2>
          <div css={about_2_img}>
            <img src='../assets/about/about_exhibition.png' alt='전시' />
            <img src='../assets/about/about_art.jpg' alt='작품' />
            <img src='../assets/about/about_artist.jpeg' alt='작가' />
            <img src='../assets/about/about_gallery.jpeg' alt='갤러리' />
          </div>
        </div>
      </div>

      <div css={about_3_wrap}>
        <div css={about_3}>
          <div>
            <h1>예술의 즐거움과 영감을 발견하는 곳</h1>
          </div>
          <div css={about_3_logo}>
            <h1>
              Arth<span>!</span>ve
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
