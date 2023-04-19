import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  entities: [],
  loading: false,
};

export const getPosts = createAsyncThunk("getPosts", async () => {
  const url = "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=20";

  return await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const addPost = createAsyncThunk("addPost", async (post) => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  return await axios
    .post(url, post)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const editPost = createAsyncThunk("editPost", async (post) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;

  // strip body of its id
  let body = post;
  delete body.id;

  // preform request
  return await axios
    .put(url, post)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});

export const deletePost = createAsyncThunk("delete", async (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  return await axios
    .delete(url)
    .then((res) => {
      console.log(res)
      return id;
    })
    .catch((err) => {
      console.log(err);
    });
});

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.loading = false;
      })
      
      .addCase(addPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.loading = false;
      })

      .addCase(editPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const postIndex = state.entities.findIndex(
          (i) => i.id === action.payload.id
        );

        // assumed that you should only alter whats needs to be changed
        state.entities[postIndex].title = action.payload.title;
        state.entities[postIndex].body = action.payload.body;
        state.loading = false;
      })

      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.entities = state.entities.filter((i) => i.id !== action.payload);
        state.loading = false;
      });
  },
});

export default postSlice.reducer;
