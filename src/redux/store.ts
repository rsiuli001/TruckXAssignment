import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { commentReducer } from './reducers/commentsReducer';
import { postReducer } from './reducers/postReducer';
import rootSaga from './sagas/saga';

let sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    posts: postReducer,
    comments: commentReducer
  },
  middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
