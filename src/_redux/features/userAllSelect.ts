import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  setSelectedUserAllId: null
}

const userAllSelectSlice = createSlice({
  name: 'userAllSelect',
  initialState,
  reducers: {
    setSelectedUserAllId: (state, action) => {
      state.setSelectedUserAllId = action.payload
    }
  }
})

export const { setSelectedUserAllId } = userAllSelectSlice.actions

export default userAllSelectSlice
