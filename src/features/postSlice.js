import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
};

const GETURL = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20";

export const getPosts = createAsyncThunk("getPosts", async (name, thunkAPI) => {
  return await axios
    .get(GETURL)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.entities.push(action.payload);
    },
    updatePost: (state, action) => {
      console.log(action);
      const postIndex = state.entities.findIndex(
        (i) => i.id === action.payload.id
      );

      // assumed that you should only alter whats needs to be changed
      state.entities[postIndex].title = action.payload.title;
      state.entities[postIndex].body = action.payload.body;
    },
    deletePost: (state, action) => {
      state.entities = state.entities.filter((i) => i.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        console.log(action);
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { addPost, updatePost, deletePost } = postSlice.actions;

export default postSlice.reducer;
