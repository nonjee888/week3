import { createSlice } from '@reduxjs/toolkit'

let comments = createSlice({
    name:"comments",
    initialState:[
        {
            id: 0,
            post: 0,
            title: "ㅋㅋㅋ"
        },
        {
            id: 1,
            post: 0,
            title: "너무 재밌다.",
        },
        {
            id: 2,
            post: 0,
            title: "화이팅",
        },
    ],
    reducers:{
        createComment(state, action){
            state.push(action.payload);
        },
        removeComment(state, action){
            let  index = state.findIndex(comment =>  comment.id === action.payload);
			state.splice(index,1);
        },
        updateComment(state, action){

        }
    }
})

export let { createComment, removeComment, updateComment } = comments.actions;

export default comments;