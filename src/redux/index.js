import { combineReducers } from 'redux'
import TodoReducer from './slices/todo'
import { configureStore } from '@reduxjs/toolkit'


const rootReducer = combineReducers({
    todo: TodoReducer,
})


export const store = configureStore({
    reducer: rootReducer,
})