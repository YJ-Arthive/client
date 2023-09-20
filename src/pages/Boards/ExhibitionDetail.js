// import { useParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import BoardHeader from '../../components/BoardHeader';
// import { getExhibitionBySlug } from '../../api';

const detailSummary = css`
  // border: 1px solid purple;
  display: flex;
  justify-content: space-between;
  width: 1120px;
  height: 510px;
  margin: 0 auto;
  margin-bottom: 150px;
`;

const detailTable = css`
  // border: 1px solid green;
  width: 473px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  table {
    // border: 1px solid yellow;
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
  // const { exhibitionSlug } = useParams();
  // const exhibition = getExhibitionBySlug(exhibitionSlug);

  return (
    <div>
      <BoardHeader text='Exhibition' />
      <div css={detailSummary}>
        <div>
          <img
            src={
              'https://m.babiluv.com/web/product/big/202101/e6f2158edbaa6b5fb470dc9474ac0ef8.jpg'
            }
            alt='포스터'
          />
        </div>
        <div css={detailTable}>
          <table>
            <tbody>
              <tr>
                <th>
                  전시
                  <span>|</span>
                </th>
                <td>한준호 개인전</td>
              </tr>
              <tr>
                <th>
                  기간
                  <span>|</span>
                </th>
                <td>2023.07.10 ~ 2023.07.22</td>
              </tr>
              <tr>
                <th>
                  시간
                  <span>|</span>
                </th>
                <td>11:00 ~ 19:00</td>
              </tr>
              <tr>
                <th>
                  위치
                  <span>|</span>
                </th>
                <td>리갤러리(LeeGallery) / 서울</td>
              </tr>
              <tr>
                <th>
                  주소
                  <span>|</span>
                </th>
                <td>서울 강남구 학동로 30길 34/ 1층 1호</td>
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
                <td>무료</td>
              </tr>
              <tr>
                <th>
                  사이트
                  <span>|</span>
                </th>
                <td>홈페이지 바로가기</td>
              </tr>
            </tbody>
          </table>
          <span>
            <img src='/assets/heart.png' alt='찜' />
          </span>
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
