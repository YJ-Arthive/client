// import { useParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import BoardHeader from '../../components/BoardHeader';
import ExhibitionItem from './ExhibitionItem';

const buttonWrap = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  border: 1px solid red;
  width: 1156px;
  max-width: 100%;
  height: 42px;
  margin: 0 auto;

  button {
    width: 102px;
    height: 41px;
    background-color: white;
    border: 1px solid #5e5e5e;
    font-size: 18px;
    cursor: pointer;
  }

  select {
    height: 41px;
    background-color: white;
    border: 1px solid #5e5e5e;
    font-size: 18px;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    outline: none;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const registerBtn = css`
  margin-right: auto;
`;
const currentBtn = css`
  width: 102px;
`;
const latestBtn = css`
  width: 102px;
`;
const localBtn = css`
  width: 122px;
`;
const resetBtn = css``;

const ExhibitionButton = () => {
  return (
    <div className='ExhibitionButton' css={buttonWrap}>
      <button css={registerBtn}>
        <Link to='/exhibition/register'>등록신청</Link>
      </button>
      <select css={currentBtn}>
        <option>현재전시</option>
        <option>예정전시</option>
        <option>지난전시</option>
      </select>
      <select css={latestBtn}>
        <option>최신순</option>
        <option>종료순</option>
        <option>인기순</option>
      </select>
      <select css={localBtn}>
        <option>지역 전체</option>
        <option>서울</option>
        <option>경기 인청</option>
        <option>대구 경북</option>
        <option>부산 울산 경남</option>
        <option>광주 전라</option>
        <option>대전 충청 세종</option>
        <option>제주 강원</option>
      </select>
      <button css={resetBtn}>초기화</button>
    </div>
  );
};

const exhibitionWrap = css`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const exhibitionList = css`
  border: 1px solid blue;
  width: 1156px;
  height: 2100px;
`;

const Exhibition = () => {
  // const { exhibitionSlug } = useParams();
  // const exhibition = getExhibitionSlug(exhibitionSlug);
  return (
    <div>
      <BoardHeader text='Exhibition' />
      <div css={exhibitionWrap}>
        <ExhibitionButton />
        <div css={exhibitionList}>
          <ExhibitionItem />
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
