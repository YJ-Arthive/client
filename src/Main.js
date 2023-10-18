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
import { Exhibition } from './pages/Boards/Exhibition';
import ExhibitionDetail from './pages/Boards/ExhibitionDetail';
import ExhibitionRegisterUser from './pages/Boards/ExhibitionRegisterUser';
import { Art } from './pages/Boards/Art';
import ArtDetail from './pages/Boards/ArtDetail';
import { Artist } from './pages/Boards/Artist';
import ArtistDetail from './pages/Boards/ArtistDetail';
import { Gallery } from './pages/Boards/Gallery';
import GalleryDetail from './pages/Boards/GalleryDetail';
import About from './pages/Boards/About';
import MyRegisterDetail from './pages/MyPage/MyRegisterDetail';
import NotFound from './pages/NotFound';
// Admin
import Admin from './pages/Admin/Admin';
import ExhibitionRegister from './pages/Admin/ExhibitionRegister';
import GalleryRegister from './pages/Admin/GalleryRegister';
import ArtRegister from './pages/Admin/ArtRegister';
import ArtistRegister from './pages/Admin/ArtistRegister';
import ExhibitionEdit from './pages/Admin/ExhibitionEdit';
import ArtEdit from './pages/Admin/ArtEdit';
import ArtistEdit from './pages/Admin/ArtistEdit';
import GalleryEdit from './pages/Admin/GalleryEdit';

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
            <Route path=':exhibitionId' element={<ExhibitionDetail />} />
            <Route path='register' element={<ExhibitionRegisterUser />} />
          </Route>

          <Route path='art'>
            <Route index element={<Art />} />
            <Route path=':artId' element={<ArtDetail />} />
          </Route>

          <Route path='artist'>
            <Route index element={<Artist />} />
            <Route path=':artistId' element={<ArtistDetail />} />
          </Route>

          <Route path='gallery'>
            <Route index element={<Gallery />} />
            <Route path=':galleryId' element={<GalleryDetail />} />
          </Route>

          <Route path='admin'>
            <Route index element={<Admin />} />
            <Route
              path='exhibition-register'
              element={<ExhibitionRegister />}
            />
            <Route path='gallery-register' element={<GalleryRegister />} />
            <Route path='art-register' element={<ArtRegister />} />
            <Route path='artist-register' element={<ArtistRegister />} />

            <Route path='exhibition-edit' element={<ExhibitionEdit />} />
            <Route path='art-edit' element={<ArtEdit />} />
            <Route path='artist-edit' element={<ArtistEdit />} />
            <Route path='gallery-edit' element={<GalleryEdit />} />
          </Route>

          <Route path='about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
