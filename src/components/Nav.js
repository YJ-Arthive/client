/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogout } from '../api/userAPI';
import { setUserInit } from '../store/userSlice';

const navbar = css`
  height: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: rgb(255, 255, 255);
  overflow-x: hidden;

  a {
    text-decoration: none;
    color: white;
  }
`;

const navbar_container = css`
  width: 1140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const navbarLogo = css`
  font-size: 28px;
  font-family: 'Noto Sans KR';
  font-weight: 600;

  span {
    color: #c3fd1e;
  }
`;

const navbarMenu = css`
  display: flex;
  color: white;
  padding-left: 160px;

  ul {
    display: flex;
    list-style: none;
    text-decoration: none;
  }

  li {
    padding: 8px 22px;
    font-weight: 500;
  }
`;

const navLinks = css`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;

  img {
    width: 34px;
    padding: 5px 5px 5px 5px;
    margin-top: 5px;
  }
`;

const navbarUser = css`
  display: flex;

  ul {
    display: flex;
    padding: 0px;
    list-style: none;
    gap: 10px;
  }

  li {
    gap: 10px;
  }
`;

function getLinkStyle({ isActive }) {
  return {
    color: isActive ? '#c3fd1e' : undefined,
  };
}

const Nav = ({ isLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const displayName = useSelector((state) => state.user.displayName);

  const handleClickLogoutBtn = async () => {
    const isLogout = await requestLogout();
    if (isLogout) {
      localStorage.removeItem('token');
      dispatch(setUserInit());
      navigate('/');
      window.location.reload(); // 새로고침
    }
  };
  return (
    <div css={navbar}>
      <div css={navbar_container}>
        <div css={navbarLogo}>
          <Link to='/'>
            Arth<span>!</span>ve
          </Link>
        </div>

        <div css={navbarMenu}>
          <ul>
            <li>
              <NavLink to='/exhibition' style={getLinkStyle}>
                EXHIBITION
              </NavLink>
            </li>
            <li>
              <NavLink to='/art' style={getLinkStyle}>
                ART
              </NavLink>
            </li>
            <li>
              <NavLink to='/artist' style={getLinkStyle}>
                ARTIST
              </NavLink>
            </li>
            <li>
              <NavLink to='/gallery' style={getLinkStyle}>
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' style={getLinkStyle}>
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>

        <div css={navLinks}>
          <Link to='my-info'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/mypage.png`}
              alt='마이페이지'
            />
          </Link>
          <Link to='/search'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/search-btn.png`}
              alt='검색페이지'
            />
          </Link>
          <Link to='/my-like'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Nav_Footer/like-heart.png`}
              alt='찜목록'
            />
          </Link>
        </div>

        <div css={navbarUser}>
          {isLogin ? (
            <ul>
              <li>
                <Link to='/login'>{displayName}</Link>
              </li>
              <li>
                <button type='button' onClick={handleClickLogoutBtn}>
                  로그아웃
                </button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to='/login'>로그인</Link>
              </li>
              <li>
                <Link to='/signup'>회원가입</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
