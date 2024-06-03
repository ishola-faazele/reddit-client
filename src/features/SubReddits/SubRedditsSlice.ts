import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Subreddit {
    id: string, 
    displayName: string,
    title: string,
    subscribers: number,
    public_description: string
}


interface SubredditsState {
    subreddits: Subreddit[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: SubredditsState = {
    subreddits: [],
    status: 'idle',
    error: null
}

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async () => {
    const response = await axios.get("https://www.reddit.com/subreddits/.json");
    return response.data.data.children.map((child: any) => child.data);
})

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddits.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.subreddits = action.payload
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.status = 'failed',
                state.error = String(action.error.message);
            })
    }
})


export default subredditsSlice.reducer;