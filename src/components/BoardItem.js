/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import HeartBtn from './HeartBtn';

const boardItem = css`
  // border: 1px solid pink;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 437px;
  margin-bottom: 20px;
`;

const poster = css`
  cursor: pointer;
  img {
    width: 250px;
    height: 100%;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.25);
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

const subTitle = css`
  font-size: 15px;
`;

const period = css`
  font-size: 13px;
  color: #5e5e5e;
`;

const BoardItem = ({ item }) => {
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
    <div css={boardItem}>
      <div css={poster}>
        <img src={item.posterUrl} alt='포스터' />
      </div>
      <div css={title}>
        {item.title}
        <HeartBtn like={like} onClick={toggleLike} />
      </div>
      <div css={subTitle}>
        {item.gallery}
        {item.location}
      </div>
      <div css={period}>
        {item.startDate} ~ {item.endDate}
      </div>
    </div>
  );
};

export default BoardItem;
