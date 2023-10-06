/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BoardHeader from '../components/BoardHeader';
import { ExhibitionItem } from './Boards/Exhibition';
import { ArtItem } from './Boards/Art';
import { ArtistItem } from './Boards/Artist';
import { GalleryItem } from './Boards/Gallery';
import { getExhibitions, getArts, getArtists, getGalleries } from '../api';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get('keyword');
  const [keyword, setKeyword] = useState(initKeyword || '');
  const [trimmedKeyword, setTrimmedKeyword] = useState();
  const [count, setCount] = useState(null);
  // let exhibitions = getExhibitions(initKeyword);

  const [exhibitions, setExhibitions] = useState([]); // exhibitions 상태 추가
  const [arts, setArts] = useState([]);
  const [artists, setArtists] = useState([]);
  const [galleries, setGalleries] = useState([]);

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setExhibitions([]);
    setArts([]);
    setArtists([]);
    setGalleries([]);

    const trimmedKeyword = keyword.trim();
    if (trimmedKeyword === '') {
      return;
    }

    setTrimmedKeyword(trimmedKeyword);
    setSearchParams(
      trimmedKeyword
        ? {
            keyword: trimmedKeyword,
          }
        : {}
    );

    try {
      // 검색어가 제출될 때마다 데이터를 가져오기
      const exhibitionsData = await getExhibitions(trimmedKeyword);
      setExhibitions(exhibitionsData);

      const artsData = await getArts(trimmedKeyword);
      setArts(artsData);

      const artistsData = await getArtists(trimmedKeyword);
      setArtists(artistsData);

      const galleriesData = await getGalleries(trimmedKeyword);
      setGalleries(galleriesData);

      setCount(
        exhibitions.length + arts.length + artists.length + galleries.length
      );
    } catch (error) {
      console.error('데이터를 가져오는 데 실패했습니다.:', error);
    }

    console.log(keyword);
    console.log(exhibitions);
    console.log(arts);
    console.log(artists);
    console.log(galleries);
  };

  return (
    <div css={searchWrap}>
      <BoardHeader text='통합 검색' />
      <div>
        <form css={searchBar} onSubmit={handleSubmit}>
          <input
            name='keyword'
            value={keyword}
            onChange={handleKeywordChange}
            placeholder='검색어를 입력해주세요.'
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
        {count !== null && count > 0 ? (
          <p>
            &apos;{trimmedKeyword}&apos;에 대한 검색결과가 총 {count}개
            있습니다.
          </p>
        ) : (
          count !== null && <p>{trimmedKeyword}에 대한 검색결과가 없습니다.</p>
        )}
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
          <h3>전시({exhibitions.length})</h3> <hr />
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
        <div id='art'>
          <h3>작품(0)</h3>
          <hr />
          {arts.map((art) => {
            return <ArtItem key={art.id} art={art} {...art} />;
          })}
        </div>
        <div id='artist'>
          <h3>작가(0)</h3> <hr />
          {artists.map((artist) => {
            return <ArtistItem key={artist.id} artist={artist} {...artist} />;
          })}
        </div>
        <div id='gallery'>
          <h3>갤러리(0)</h3> <hr />
          {galleries.map((gallery) => {
            return (
              <GalleryItem key={gallery.id} gallery={gallery} {...gallery} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
