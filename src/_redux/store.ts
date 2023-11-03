import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './features/auth'
import { personSlice } from './features/person'
import { nhiemvuSlice } from './features/nhiemvu'

// import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    person: personSlice.reducer,
    nhiemvu: nhiemvuSlice.reducer
  }
})

// export default store
// export type AppStore = ReturnType<typeof store.getState>;
// export const wrapper=createWrapper(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
