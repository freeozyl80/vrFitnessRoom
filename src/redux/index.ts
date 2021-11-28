import { combineReducers, configureStore } from "@reduxjs/toolkit";


import { EventSlice, EventStateProps  } from '@/components/Event/reducer'

const reducer = combineReducers({
  event: EventSlice.reducer,
});

export interface ReducerProps {
  event: EventStateProps,
}

const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware)=>[...getDefaultMiddleware(), xxx ] 默认的两个中间件包括redux-thunk，xxx表示新加的中间件
  devTools: true, //使用谷歌的一个插件
});

export default store;
