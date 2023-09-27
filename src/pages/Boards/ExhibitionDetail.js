/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BoardHeader from '../../components/BoardHeader';
import { getExhibitionBySlug } from '../../api/index';
import HeartBtn from '../../components/HeartBtn';

const detailSummary = css`
  display: flex;
  justify-content: space-between;
  width: 1120px;
  height: 510px;
  margin: 0 auto;
  margin-bottom: 150px;
`;

const imgWrap = css`
  width: 500px;
  display: flex;
  justify-content: center;

  img {
    max-width: 500px;
    max-height: 500px;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);
  }
`;

const detailTable = css`
  width: 473px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  table {
    height: 460px;
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
    // height: 30px;
  }

  img {
    float: right;
    width: 28px;
    margin-right: 10px;
  }
`;

const exhibitionDescription = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1120px;
  height: 100%;
  padding: 100px;
  border-top: 1px solid gray;
  margin: 0 auto;
`;

const ExhibitionDetail = () => {
  const { exhibitionSlug } = useParams();
  const exhibition = getExhibitionBySlug(exhibitionSlug);

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
      <BoardHeader text='Exhibition' />
      <div css={detailSummary}>
        <div css={imgWrap}>
          <img src={exhibition.posterUrl} alt='포스터' />
        </div>
        <div css={detailTable}>
          <table>
            <tbody>
              <tr>
                <th>
                  전시
                  <span>|</span>
                </th>
                <td>{exhibition.title}</td>
              </tr>
              <tr>
                <th>
                  기간
                  <span>|</span>
                </th>
                <td>
                  {exhibition.startDate} ~ {exhibition.endDate}
                </td>
              </tr>
              <tr>
                <th>
                  시간
                  <span>|</span>
                </th>
                <td>{exhibition.hours}</td>
              </tr>
              <tr>
                <th>
                  위치
                  <span>|</span>
                </th>
                <td>
                  {exhibition.gallery} / {exhibition.location}
                </td>
              </tr>
              <tr>
                <th>
                  주소
                  <span>|</span>
                </th>
                <td>{exhibition.address}</td>
              </tr>
              <tr>
                <th>
                  휴관
                  <span>|</span>
                </th>
                <td>일요일</td>
              </tr>
              <tr>
                <th>
                  관람료
                  <span>|</span>
                </th>
                <td>{exhibition.entranceFee}</td>
              </tr>
              <tr>
                <th>
                  사이트
                  <span>|</span>
                </th>
                <td>
                  <Link to={exhibition.homePage}>홈페이지 바로가기</Link>
                </td>
              </tr>
            </tbody>
          </table>
          <HeartBtn like={like} onClick={toggleLike} />
        </div>
      </div>

      <div css={exhibitionDescription}>
        <p>전시설명</p>
        <p>포스터</p>
        <p>전시 상세 설명 줄글</p>
        <p>카카오맵</p>
      </div>
    </div>
  );
};

export default ExhibitionDetail;
