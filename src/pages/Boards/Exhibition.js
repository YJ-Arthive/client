/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getExhibitions } from '../../api/index';
import BoardHeader from '../../components/BoardHeader';
import HeartBtn from '../../components/HeartBtn';
import { useSelector } from 'react-redux';

const buttonWrap = css`
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
const registerAdminBtn = css`
  a {
    color: blue;
  }
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

const ExhibitionButton = () => {
  const isAdmin = useSelector((state) => state.user.isAdmin);

  // 기본 정렬
  // const [order, setOrder] = useState({
  //   period: 'current',
  //   order: 'createdAt',
  //   location: 'all',
  // });

  const initialState = {
    period: '현재전시',
    order: '최신순',
    location: '지역 전체',
  };

  // 기본 정렬
  const [state, setState] = useState(initialState);

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    // 정렬함수
  };

  const onClearSelect = () => {
    console.log('모든 버튼 초기화');
    setState(initialState);
  };

  return (
    <div className='ExhibitionButton' css={buttonWrap}>
      <button css={registerBtn}>
        <Link to='/exhibition/register'>등록신청</Link>
      </button>
      {isAdmin && (
        <button css={registerAdminBtn}>
          <Link to='/admin/exhibition-register/0'>등록하기</Link>
        </button>
      )}
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
      <button onClick={onClearSelect}>초기화</button>
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

const exhibitionItem = css`
  // border: 1px solid pink;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const poster = css`
  cursor: pointer;
  img {
    width: 250px;
    height: 100%;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);
  }
  margin-bottom: 10px;
`;

const title = css`
  // border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  font-size: 20px;

  span {
    text-align: right;
  }

  img {
    width: 25px;
    cursor: pointer;
  }
`;

const location = css`
  font-size: 15px;
`;

const period = css`
  font-size: 13px;
  color: #5e5e5e;
`;

export const ExhibitionItem = ({ exhibition, showHeart = true }) => {
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
    <div css={exhibitionItem}>
      <Link to={`/exhibition/${exhibition.id}`}>
        <div css={poster}>
          <img src={exhibition.posterUrl} alt='포스터' />
        </div>
      </Link>
      <div css={title}>
        <Link to={`/exhibition/${exhibition.id}`}>{exhibition.title}</Link>
        {showHeart && <HeartBtn like={like} onClick={toggleLike} />}
      </div>
      <div css={location}>
        {exhibition.gallery}/ {exhibition.location}
      </div>
      <div css={period}>
        {exhibition.startDate} ~ {exhibition.endDate}
      </div>
    </div>
  );
};

export const Exhibition = () => {
  const exhibitions = getExhibitions();

  return (
    <div>
      <BoardHeader text='Exhibition' />
      <div css={exhibitionWrap}>
        <ExhibitionButton />
        <div css={exhibitionList}>
          {exhibitions.map((exhibition) => {
            return (
              <ExhibitionItem
                key={exhibition.id}
                exhibition={exhibition}
                {...exhibition}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
