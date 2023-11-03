import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
  name: 'user',
  initialState: {
    displayName: '',
    emailAddress: '',
    isAdmin: false,
  },
  reducer: {
    setUserInfo(state, action) {
      state.displayName = action.payload.displayName;
      state.emailAddress = action.payload.emailAddress;
    },
    setIsAdmin(state, action) {
      state.isAdmin = action.payload.isAdmin;
    },
  },
});

// state 변경함수들(reducers)이 object 로 꺼내어짐
export const { setUserInfo, setUserInit, setIsAdmin } = user.actions;

export default user;
