/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MyInfo from './pages/MyPage/MyInfo';
import Search from './pages/Search';
import MyLike from './pages/MyPage/MyLike';
import Exhibition from './pages/Boards/Exhibition';
import ExhibitionDetail from './pages/Boards/ExhibitionDetail';
import ExhibitionRegister from './pages/Boards/ExhibitionRegister';
import Art from './pages/Boards/Art';
import Artist from './pages/Boards/Artist';
import Gallery from './pages/Boards/Gallery';
import About from './pages/Boards/About';
import MyRegisterDetail from './pages/MyPage/MyRegisterDetail';
import NotFound from './pages/NotFound';

export const globalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR';
  }

  body {
    padding: 0px;
    margin: 0px;
    overflow-x: hidden;
  }
`;

function Main() {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='my-info' element={<MyInfo />} />
          <Route path='my-info/register' element={<MyRegisterDetail />} />
          <Route path='search' element={<Search />} />
          <Route path='my-like' element={<MyLike />} />
          <Route path='exhibition'>
            <Route index element={<Exhibition />} />
            <Route
              path='first-exhibition-detail'
              element={<ExhibitionDetail />}
            />
            <Route path='register' element={<ExhibitionRegister />} />
          </Route>
          <Route path='art' element={<Art />} />
          <Route path='artist' element={<Artist />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
