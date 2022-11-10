import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPostId: 0,
}

export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    chooseCurrentPostIdAC(state, action) {
      state.currentPostId=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { chooseCurrentPostIdAC } = app.actions

export default app.reducer