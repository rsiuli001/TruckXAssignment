import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../../types/post';

interface PostState {
  posts: Post[];
}

const initialPostState: PostState = {
  posts: []
};

const postSlice = createSlice({
  name: 'post',
  initialState: initialPostState,
  reducers: {
    fetchData: (state, action) => {
      return {
        posts: action.payload.data?.children
      };
    }
  }
});

export const { fetchData } = postSlice.actions;

export const postReducer = postSlice.reducer;
