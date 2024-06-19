import type { RootState } from "..";
import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: null,
  isSystemAdmin: null,
  isAdmin: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<Model.User | null>) => {
      state.user = payload;
    },
    setUserAvatar: (state, { payload }: PayloadAction<string>) => {
      if (state.user) state.user = { ...state.user, image: payload };
    },
    setUserName: (state, { payload }: PayloadAction<string>) => {
      if (state.user) state.user = { ...state.user, username: payload };
    },
  },
});

export const { setUser, setUserAvatar } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export const selectUserAvatar = (state: RootState) => (state.user ? state.user.user?.image : null);

export const selectUserId = (state: RootState) => (state.user ? state.user.user?.id : null);

export default userSlice.reducer;
