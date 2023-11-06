import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './features/auth'
import { personSlice } from './features/person'
import { nhiemvuSlice } from './features/nhiemvu'
import nhiemvuSelectSlice from './features/nhiemvuSelect'
import { personAllSlice } from './features/personAll'
import { userAllSlice } from './features/userAll'
import userAllSelectSlice from './features/userAllSelect'

// import { createWrapper } from 'next-redux-wrapper'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    person: personSlice.reducer,
    personAll: personAllSlice.reducer,
    nhiemvu: nhiemvuSlice.reducer,
    nhiemvuSelect: nhiemvuSelectSlice.reducer,
    userAll: userAllSlice.reducer,
    userAllSelect: userAllSelectSlice.reducer
  }
})

// export default store
// export type AppStore = ReturnType<typeof store.getState>;
// export const wrapper=createWrapper(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
