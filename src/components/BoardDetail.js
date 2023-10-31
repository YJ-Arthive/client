/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardHeader from './BoardHeader';
import HeartBtn from './HeartBtn';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const detailWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1120px;
  height: 510px;
  margin: 0 auto 150px auto;

  span > img {
    float: right;
    margin-top: 20px;
  }
`;

const imgWrap = css`
  width: 500px;
  display: flex;
  justify-content: center;

  img {
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.25);
  }
`;

const detailText = css`
  width: 473px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 38px;
    font-weight: 500;
    margin-bottom: 13px;
  }

  h2 {
    font-size: 22px;
    font-weight: 400;
    color: #5E5E5E;
    margin-bottom: 5px;
  }

  p {
    font-size: 17px;
    font-weight: 400;
    color: #979797;
    margin-bottom: 30px;
  }

  img {
    width: 28px;
    margin-right: 10px;
`;

const galleryTable = css`
  width: 473px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  table {
    height: 260px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  th,
  td {
    border-bottom: 1px solid #e9e9e9;
    font-weight: normal;
  }

  td {
    padding-left: 20px;
    color: #464646;
  }

  span {
    float: right;
    color: #d9d9d9;
  }

  a {
    color: black;
  }
`;

const GalleryDesc = ({ galleryName, address, hours, closed, homePage }) => {
  return (
    <div css={galleryTable}>
      <table>
        <tbody>
          <tr>
            <th>
              갤러리명<span>|</span>
            </th>
            <td>{galleryName}</td>
          </tr>
          <tr>
            <th>
              주소<span>|</span>
            </th>
            <td>{address}</td>
          </tr>
          <tr>
            <th>
              휴관일<span>|</span>
            </th>
            <td>{closed}</td>
          </tr>
          <tr>
            <th>
              운영시간<span>|</span>
            </th>
            <td>{hours}</td>
          </tr>
          <tr>
            <th>
              홈페이지<span>|</span>
            </th>
            <td>
              <Link to={homePage}>갤러리 홈페이지 바로가기</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const BoardDetail = ({
  text,
  src,
  title,
  subTitle,
  description,
  gallery = false,
  galleryName,
  address,
  hours,
  closed,
  homePage,
}) => {
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
      <BoardHeader text={text} />
      <div css={detailWrap}>
        <div css={imgWrap}>
          <img src={src} alt='포스터' />
        </div>
        <div css={detailText}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <p>{description}</p>
          {gallery && (
            <GalleryDesc
              galleryName={galleryName}
              address={address}
              hours={hours}
              closed={closed}
              homePage={homePage}
            />
          )}
          <HeartBtn like={like} onClick={toggleLike} />
        </div>
      </div>
    </div>
  );
};

export default BoardDetail;
