import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user', // slice의 이름
  initialState: {
    // state의 처음 상태
    displayName: '',
    emailAddress: '',
    isAdmin: false,
  },
  reducer: {
    // reducer에서 액션 설정
    setUserInfo(state, action) {
      state.displayName = action.payload.displayName;
      state.emailAddress = action.payload.emailAddress;
    },
    setUserInit(state) {
      // 초기화
      state.displayName = '';
      state.email = '';
    },
    setIsAdmin(state, action) {
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

// state 변경함수들(reducers)이 object 로 꺼내어짐
export const { setUserInfo, setUserInit, setIsAdmin } = user.actions;
export default user;
