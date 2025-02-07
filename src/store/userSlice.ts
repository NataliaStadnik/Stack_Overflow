import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userType } from "../api/me/getMe"

export interface userState {
  value: userType
}

const initialState: userState = {
  value: {
    id: '',
    role: '',
    username: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUserInfo: (state, action: PayloadAction<userType>) => {
      state.value = action.payload
    },
    resetUserInfo: (state) => {
      state.value = initialState.value
    }
  },
})

export const { setUserInfo, resetUserInfo } = userSlice.actions;
export default userSlice.reducer;
