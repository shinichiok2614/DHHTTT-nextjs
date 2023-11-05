import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedNhiemvuId: null
}

const nhiemvuSelectSlice = createSlice({
  name: 'nhiemvuSelect',
  initialState,
  reducers: {
    setSelectedNhiemvuId: (state, action) => {
      state.selectedNhiemvuId = action.payload
    }
  }
})

export const { setSelectedNhiemvuId } = nhiemvuSelectSlice.actions

export default nhiemvuSelectSlice
