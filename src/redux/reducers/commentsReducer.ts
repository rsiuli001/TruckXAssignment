import { createSlice } from '@reduxjs/toolkit';
import { Comment } from '../../types/comment';

interface CommentState {
  comments: { [key: string]: Comment[] };
}

const initialCommentState: CommentState = {
  comments: {}
};

const commentSlice = createSlice({
  name: 'comments',
  initialState: initialCommentState,
  reducers: {
    fetchComments: (state, action) => {
      const comments: Comment[] = action.payload.comments.data.children;
      return {
        comments: {
          ...state.comments,
          [action.payload.postId]: comments
        }
      };
    }
  }
});

export const { fetchComments } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
