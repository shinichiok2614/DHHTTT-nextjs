import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNhiemVu } from 'src/apis/nhiemvu'
import { ListNhiemVu } from 'src/types/nhiemvu'
import { useAppSelector } from '../hooks'

interface NhiemvuState {
  loading: boolean
  data: ListNhiemVu
}
const initialState = {
  nhiemvu: {
    loading: false,
    data: []
  }
}
export const nhiemvuSlice = createSlice({
  name: 'nhiemvu',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(nhiemvuAction.pending, state => {
        state.nhiemvu.loading = true
      })
      .addCase(nhiemvuAction.fulfilled, (state, action) => {
        state.nhiemvu.loading = false
        state.nhiemvu.data = action.payload.data
      })
      .addCase(nhiemvuAction.rejected, state => {
        state.nhiemvu.data = []
      })
  }
})
export const nhiemvuAction = createAsyncThunk('nhiemvu/fetch', async () => {
  return await getNhiemVu()
})
export const NhiemVuSelector = () => useAppSelector(state => state.nhiemvu.nhiemvu)
