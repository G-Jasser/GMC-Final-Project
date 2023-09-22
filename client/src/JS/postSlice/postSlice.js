import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"


export const getPost = createAsyncThunk('post/get', async () => {
    try {
        let result = axios.get('http://localhost:5000/post/all')
        return result
    } catch (error) {
        console.log(error)
    }
})

export const addPost = createAsyncThunk('post/add', async (post) => {
    try {
        let result = axios.post('http://localhost:5000/post/add', post)
        return result
    } catch (error) {
        console.log(error)
    }
})
export const deletePost = createAsyncThunk('post/delete', async (id) => {
    try {
        let result = axios.delete(`http://localhost:5000/post/${id}`)
        return result
    } catch (error) {
        console.log(error)
    }
})

export const updatePost = createAsyncThunk('post/update', async ( id, post) => {
    try {
        let result = axios.put(`http://localhost:5000/post/${id}`, post)
        return result
    } catch (error) {
        console.log(error)
    }
})


const initialState = {
    post: null,
    status: null
}

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [getPost.pending]: (state) => {
            state.status = "pending";
        },
        [getPost.fulfilled]: (state, action) => {
            state.status = "success";
            state.post = action.payload.data?.list
        },
        [getPost.rejected]: (state, action) => {
            state.status = "failed";
        },
        [addPost.pending]: (state) => {
            state.status = "pending";
        },
        [addPost.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [addPost.rejected]: (state, action) => {
            state.status = "failed";
        },
        [deletePost.pending]: (state) => {
            state.status = "pending";
        },
        [deletePost.fulfilled]: (state, action) => {
            state.status = "success";
        },
        [deletePost.rejected]: (state, action) => {
            state.status = "failed";
        },
        [updatePost.pending]: (state) => {
            state.status = "pending";
        },
        [updatePost.fulfilled]: (state, action) => {
            state.status = "success";
            state.post = action.payload.data?.post
        },
        [updatePost.rejected]: (state, action) => {
            state.status = "failed";
        }

    }
})
// Action creators are generated for each case reducer function
export const { } = postSlice.actions

export default postSlice.reducer