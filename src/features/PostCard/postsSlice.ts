import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Post {
    id: string;
    title: string;
    author: string;
    score: number;
    num_comments: number;
    created: number;
    url: string;
    thumbnail: string;
    subreddit: string;
    is_video: boolean;
    video_url?: string;
}
  

interface PostsState {
    posts: Post[],
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
}

const initialState: PostsState = {
    posts: [],
    status: 'idle',
    error: null
}
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (subreddit: string) => {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}/.json`);
    return response.data.data.children.map((child: any) => ({
      id: child.data.id,
      title: child.data.title,
      author: child.data.author,
      score: child.data.ups,
      num_comments: child.data.num_comments,
      created: child.data.created,
      url: child.data.url,
      thumbnail: child.data.thumbnail,
      subreddit: child.data.subreddit_name_prefixed,
      is_video: child.data.is_video,
      video_url: child.data.is_video ? child.data.media?.reddit_video?.fallback_url : undefined,
    }));
  });
  
  
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) =>  {
                state.status = 'failed';
                state.error = String(action.error.message);
            })
    }
})

export default postsSlice.reducer;