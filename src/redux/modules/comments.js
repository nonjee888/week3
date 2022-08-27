import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let comments = createSlice({
    name:"comments",
    initialState:[],
    reducers:{
        createComment(state, action){
            state.push(action.payload);
            axios.post("http://localhost:3001/comments",action.payload );
        },
        removeComment(state, action){
            let  index = state.findIndex(comment =>  comment.id === action.payload);
			state.splice(index,1);
            axios.delete(`http://localhost:3001/comments/${action.payload}`);
        },
        updateComment(state, action){
            let  index = state.findIndex(post =>  post.id === action.payload.id);
			state.splice(index, 1, action.payload);
            axios.patch(`http://localhost:3001/comments/${action.payload.id}`, action.payload);
        }
    }
})

export let { createComment, removeComment, updateComment } = comments.actions;

export default comments;