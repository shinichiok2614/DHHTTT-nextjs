import { createSlice } from '@reduxjs/toolkit'
import IAccountInfo from 'src/types/account'

export interface AuthState {
  account: {
    loading: boolean
    accountData: IAccountInfo | undefined
  }
}

const initialState = {
  acccount: {
    loading: false,
    accountData: undefined
  }
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increments: state => {
      state.acccount.loading = true
    }
  }
})
export const { increments } = authSlice.actions
