import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

let posts = createSlice({
    name:"posts",
    initialState: [],
    reducers:{
        createPost(state, action){
            state.push(action.payload);
            axios.post("http://localhost:3001/posts", action.payload );
        },
        removePost(state, action){
            let  index = state.findIndex(post =>  post.id === action.payload);
			state.splice(index,1);
            axios.delete(`http://localhost:3001/posts/${action.payload}`);
        },
        updatePost(state, action){
            let  index = state.findIndex(post =>  post.id === action.payload.id);
			state.splice(index, 1, action.payload);
            axios.patch(`http://localhost:3001/posts/${action.payload.id}`, action.payload);
        },
        likePost(state, action){
            let index = state.findIndex(post => post.id === action.payload.id);
			// state[index].count +=1;
            axios.patch(`http://localhost:3001/posts/${action.payload.id}`, action.payload);
        }
    }
})

export let { readPost,createPost, removePost, updatePost, likePost } = posts.actions;

export default posts;