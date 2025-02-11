import { createSlice } from "@reduxjs/toolkit"

export interface authState {
  value: boolean
}

const initialState: authState = {
  value: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setAuthTrue: (state) => {
      state.value = true
    },
    setAuthFalse: (state) => {
      state.value = false
    },
  },
})

export const { setAuthFalse, setAuthTrue } = authSlice.actions;

export default authSlice.reducer;
