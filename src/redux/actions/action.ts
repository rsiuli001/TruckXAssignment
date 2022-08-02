export const sagaActions = {
  FETCH_POST_SAGA: 'FETCH_POST_SAGA',
  FETCH_COMMENTS_SAGA: 'FETCH_COMMENTS_SAGA'
};

export const requestPostsAction = (limit: number) => ({ type: sagaActions.FETCH_POST_SAGA, limit });
export const requestCommentsAction = (postId: string, limit?: number, sort?: string) => ({
  type: sagaActions.FETCH_COMMENTS_SAGA,
  postId,
  limit,
  sort
});
