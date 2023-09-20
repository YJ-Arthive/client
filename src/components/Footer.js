/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footer = css`
  width: 100%;
  height: 230px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: black;
  color: white;
  font-size: 14px;
  bottom: 0;

  hr {
    width: 50%;
    border: 0.5px solid white;
  }
`;

const footerContainer = css`
  justify-content: space-between;
  /* border: 1px solid white; */
  width: 1160px;
  height: 180px;
  display: flex;
  padding-left: 50px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

const footerContent = css`
  width: 240px;

  img {
    width: 22px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    line-height: 25px;
  }
`;

const footerCopyright = css`
  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Footer = () => {
  return (
    <footer css={footer}>
      <div css={footerContainer}>
        <div css={footerContent}>
          <p>상호명 : 아타이브</p>
          <p>대표 : 한유진</p>
          <p>대표번호 : 010-2327-9817</p>
        </div>
        <div css={footerContent}>
          <p>주소 : 서울특별시 마포구 동교로 111-222</p>
          <p>사업자등록번호 : 000-11-77777</p>
          <p>팩스번호 : 02-232-9817</p>
        </div>
        <div css={footerContent}>
          <p>호스팅 제공자 : AWS</p>
          <p>통신판매업신고번호 : 2023-062677</p>
          <p>메일 : mooo7890@gmail.com</p>
        </div>

        <div css={footerContent}>
          <div className='footer_img'>
            <span>
              <a href='https://github.com/cc-yujin'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/github.png`}
                  alt='깃헙'
                />
              </a>
            </span>
            <span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/twitter.png`}
                alt='트위터'
              />
            </span>
            <span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/instagram.png`}
                alt='인스타그램'
              />
            </span>
            <span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/mail.png`}
                alt='메일'
              />
            </span>
          </div>
          <p>개인정보관리자 : 한유진</p>
        </div>
      </div>

      <hr></hr>

      <div className='footer_below'>
        <div css={footerCopyright}>
          <p>@{new Date().getFullYear()} Arthive. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
