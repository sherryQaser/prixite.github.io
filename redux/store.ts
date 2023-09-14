import { configureStore } from '@reduxjs/toolkit'
import blogReducers from './features/blogSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const reducer = {}
// const persistedReducer = persistReducer(persistConfig, blogReducers)
export const store = configureStore({
  reducer: {
    blogReducers,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
