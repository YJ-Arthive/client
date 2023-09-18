// import { useParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BoardHeader from '../../components/BoardHeader';
import ExhibitionItem from './ExhibitionItem';
import items from '../../api/exhibition-mock.json';

const buttonWrap = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  width: 1156px;
  max-width: 100%;
  height: 42px;
  margin: 0 auto;
  margin-bottom: 55px;

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
  // 기본 정렬
  // const [order, setOrder] = useState({
  //   period: 'current',
  //   order: 'createdAt',
  //   location: 'all',
  // });
  // 기본 상태 (=기본 정렬)
  const [state, setState] = useState({
    period: '현재전시',
    order: '최신순',
    location: '지역 전체',
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // 정렬함수
  };

  // const handleChangeOrder = (e) => {
  //   setOrder({
  //     ...order,
  //     [e.target.name]: e.target.value,
  //   });
  //   handleOrder = () => set
  //   if (e.target.name === 'location') {
  //     // 필터링
  //   }
  // };

  const onClearSelect = () => {
    console.log('모든 버튼 초기화');
    setState({
      period: '현재전시',
      order: '최신순',
      location: '지역 전체',
    });
  };

  return (
    <div className='ExhibitionButton' css={buttonWrap}>
      <button css={registerBtn}>
        <Link to='/exhibition/register'>등록신청</Link>
      </button>
      <select
        name='period'
        value={state.period}
        onChange={handleChangeState}
        css={currentBtn}
      >
        <option value={'현재전시'}>현재전시</option>
        <option value={'예정전시'}>예정전시</option>
        <option value={'지난전시'}>지난전시</option>
      </select>
      <select
        name='order'
        value={state.order}
        onChange={handleChangeState}
        css={latestBtn}
      >
        <option value={'최신순'}>최신순</option>
        <option value={'종료순'}>종료순</option>
        <option value={'인기순'}>인기순</option>
      </select>
      <select
        name='location'
        value={state.location}
        onChange={handleChangeState}
        css={localBtn}
      >
        <option value={'지역전체'}>지역 전체</option>
        <option value={'서울'}>서울</option>
        <option value={'경기 인천'}>경기 인천</option>
        <option value={'대구 경북'}>대구 경북</option>
        <option value={'부산 울산 경남'}>부산 울산 경남</option>
        <option value={'광주 전라'}>광주 전라</option>
        <option value={'대전 충청 세종'}>대전 충청 세종</option>
        <option value={'제주 강원'}>제주 강원</option>
      </select>
      <button css={resetBtn} onClick={onClearSelect}>
        초기화
      </button>
    </div>
  );
};

const exhibitionWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const exhibitionList = css`
  // border: 1px solid blue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  gap: 50px;
  width: 1156px;
  height: 100%;
  margin-bottom: 70px;
`;

const Exhibition = () => {
  // const { exhibitionSlug } = useParams();
  // const exhibition = getExhibitionSlug(exhibitionSlug);
  console.log(items);
  return (
    <div>
      <BoardHeader text='Exhibition' />
      <div css={exhibitionWrap}>
        <ExhibitionButton />
        <div css={exhibitionList}>
          {items.map((item) => {
            return <ExhibitionItem key={item.id} item={item} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
