import { configureStore, combineReducers } from '@reduxks/toolkit'
import { counterSlice } from './counterSlice'
import { todoListSlice } from './todoListSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'todos' ]
}

const rootReducer = combineReducers({
  count: counterSlice,
  todos: todoListSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer) // NHISM 2 REDUCER VAFO VỚI NHAU

export const store = configureStore({       // NHISM 2 REDUCER VAFO VỚI NHAU
  reducers: persistedReducer
})

export const persistor = persistStore(store)
