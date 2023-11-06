import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNhiemVu } from 'src/apis/nhiemvu'
import { ListNhiemVu } from 'src/types/nhiemvu'
import { useAppSelector } from '../hooks'
import { getAllPerson } from 'src/apis/person'
import { ListPerson } from 'src/types/person'
import { getAllUser } from 'src/apis/user'

interface PersonAllState {
  data: {
    loading: boolean
    data: any
  }
}
const initialState: PersonAllState = {
  data: {
    loading: true,
    data: []
  }
}
export const userAllSlice = createSlice({
  name: 'userAll',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userAllAction.pending, state => {
        state.data.loading = true
      })
      .addCase(userAllAction.fulfilled, (state, action) => {
        state.data.loading = false
        state.data.data = action.payload
      })
      .addCase(userAllAction.rejected, state => {
        state.data.data = []
      })
  }
})
export const userAllAction = createAsyncThunk('userAll/fetch', async () => {
  return await getAllUser()
})
export const UserAllSelector = () => useAppSelector(state => state.userAll.data)
