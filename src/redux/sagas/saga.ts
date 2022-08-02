import { call, put, takeLatest, all } from 'redux-saga/effects';
import { requestCommentsAction, requestPostsAction, sagaActions } from '../actions/action';
import { getComments } from '../apis/getComments';
import { getPosts } from '../apis/getPostsApi';
import { fetchComments } from '../reducers/commentsReducer';
import { fetchData } from '../reducers/postReducer';

export type PromiseFn = (...args: any) => Promise<any>;
export type GetT<T> = T extends Promise<infer N> ? N : any;
export type GetFnResult<T extends PromiseFn> = GetT<ReturnType<T>>;

export function* fetchPostsSaga(action: ReturnType<typeof requestPostsAction>) {
  try {
    let result: GetFnResult<typeof getPosts> = yield call(getPosts, action.limit);
    yield put(fetchData(result.data));
  } catch (e) {
    console.log('debug: fetchDataSaga: err: ', e);
  }
}

export function* FetchPostsWatcher() {
  yield takeLatest(sagaActions.FETCH_POST_SAGA, fetchPostsSaga);
}

export function* fetchCommentsSaga(action: ReturnType<typeof requestCommentsAction>) {
  try {
    let comments: GetFnResult<typeof getComments> = yield call(
      getComments,
      action.postId,
      action.limit,
      action.sort
    );
    
    yield put(fetchComments({ comments: comments.data, postId: action.postId }));
  } catch (e) {
    console.log('debug: fetchCommentsSaga: err: ', e);
  }
}

export function* FetchCommentsWatcher() {
  yield takeLatest(sagaActions.FETCH_COMMENTS_SAGA, fetchCommentsSaga);
}

export default function* rootSaga() {
  yield all([FetchPostsWatcher(), FetchCommentsWatcher()]);
}
