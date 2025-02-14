import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userType } from "../api/auth/authLogin"

const initialState: userType = {
  id: '',
  role: '',
  username: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUserInfo: (state, action: PayloadAction<userType>) => {
      state.id = action.payload.id
      state.role = action.payload.role
      state.username = action.payload.username
    },
    resetUserInfo: (state) => {
      state.id = initialState.id
      state.role = initialState.role
      state.username = initialState.username
    },
  },
})

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;
