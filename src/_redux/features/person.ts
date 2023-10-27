import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPersonInfo } from 'src/apis/person'
import IPersonInfo from 'src/types/person'
import { useAppSelector } from '../hooks'
export interface PersonState {
  person: {
    loading: boolean
    personData: IPersonInfo | undefined
  }
}
const initialState: PersonState = {
  person: {
    loading: false,
    personData: undefined
  }
}
export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPersonInfoAction.pending, state => {
        state.person.loading = true
      })
      .addCase(getPersonInfoAction.fulfilled, (state, action) => {
        state.person.loading = true
        state.person.personData = action.payload
      })
      .addCase(getPersonInfoAction.rejected, state => {
        state.person.personData = undefined
      })
  }
})
export const getPersonInfoAction = createAsyncThunk('person/fetch', async () => await getPersonInfo())
export const PersonSelector = () => useAppSelector(state => state.person.person)
