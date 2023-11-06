import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getNhiemVu } from 'src/apis/nhiemvu'
import { ListNhiemVu } from 'src/types/nhiemvu'
import { useAppSelector } from '../hooks'
import { getAllPerson } from 'src/apis/person'
import { ListPerson } from 'src/types/person'

interface PersonAllState {
  data: {
    loading: boolean
    data: ListPerson
  }
}
const initialState: PersonAllState = {
  data: {
    loading: true,
    data: []
  }
}
export const personAllSlice = createSlice({
  name: 'personAll',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(personAllAction.pending, state => {
        state.data.loading = true
      })
      .addCase(personAllAction.fulfilled, (state, action) => {
        state.data.loading = false
        state.data.data = action.payload
      })
      .addCase(personAllAction.rejected, state => {
        state.data.data = []
      })
  }
})
export const personAllAction = createAsyncThunk('personAll/fetch', async () => {
  return await getAllPerson()
})
export const PersonAllSelector = () => useAppSelector(state => state.personAll.data)
