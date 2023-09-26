/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import BoardHeader from '../components/BoardHeader';

const searchWrap = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const searchBar = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 470px;
  height: 52px;
  border-radius: 30px;
  border: 2px solid #070707;
  background: #f9f9f9;
  margin-bottom: 100px;

  input {
    width: 400px;
    height: 35px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 17px;
    padding-right: 15px;
    margin-right: 8px;
  }

  button {
    border: none;
    height: 50px;
    background-color: transparent;
    align-items: center;
    cursor: pointer;
    padding-top: 10px;
  }

  img {
    width: 25px;
    margin-bottom: 5px;
  }
`;

const boardBtn = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  a {
    text-align: center;
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  div {
    border: 1px solid black;
    width: 260px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
  }

  div:hover {
    background-color: black;
    color: white;
  }
`;

const searchResult = css`
  width: 1040px;
  // border: 1px solid black;
  margin: 70px 0;

  hr {
    margin: 30px 0 100px;
  }
`;

const searchCount = css`
  width: 1040px;
  margin-bottom: 10px;
  font-size: #1e1e1e;
`;

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <div css={searchWrap}>
      <BoardHeader text='통합 검색' />
      <div>
        <form css={searchBar}>
          <input
            name='keyword'
            value={keyword}
            onChange={handleKeywordChange}
          />
          <button type='submit'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/searchBtn.png`}
              alt='검색버튼'
            />
          </button>
        </form>
      </div>
      <div css={searchCount}>
        <p>(검색어)에 대한 검색결과가 총 (1)개 있습니다.</p>
      </div>
      <div css={boardBtn}>
        <a href='#exhibition'>
          <div>전시</div>
        </a>
        <a href='#art'>
          <div>작품</div>
        </a>
        <a href='#artist'>
          <div>작가</div>
        </a>
        <a href='#gallery'>
          <div>갤러리</div>
        </a>
      </div>
      <div css={searchResult}>
        <div id='exhibition'>
          <h3>전시(0)</h3> <hr />
        </div>
        <div id='art'>
          <h3>작품(0)</h3>
          <hr />
        </div>
        <div id='artist'>
          <h3>작가(0)</h3> <hr />
        </div>
        <div id='gallery'>
          <h3>갤러리(0)</h3> <hr />
        </div>
      </div>
    </div>
  );
};

export default Search;
