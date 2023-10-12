import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './features/auth'

// import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  }
})

// export default store
// export type AppStore = ReturnType<typeof store.getState>;
// export const wrapper=createWrapper(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch