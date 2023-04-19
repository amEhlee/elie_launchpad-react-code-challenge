import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  isLoading: false
};

const postSlice = createSlice({
  name: "postSlice",
  initialState: initialState,
  reducers: {
    getPosts: (state, action) => {
      state.data = [action.payload];
    },
    addPost: (state, action) => {
      state.data.push(action.payload);
    }
  },
});

// export const { getPosts, addPost,   updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;
