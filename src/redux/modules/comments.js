import { createSlice } from '@reduxjs/toolkit'

let comments = createSlice({
    name:"comments",
    initialState:[
        {
            id: 0,
            post: 0,
            desc: "ㅋㅋㅋ"
        },
        {
            id: 1,
            post: 0,
            desc: "너무 재밌다.",
        },
        {
            id: 2,
            post: 0,
            desc: "화이팅",
        },
    ],
    reducers:{
        createComment(state, action){
            state.push(action.payload);
        },
        removeComment(state, action){
            console.log(action.payload)
            let  index = state.findIndex(comment =>  comment.id === action.payload);
			state.splice(index,1);
        },
        updateComment(state, action){

        }
    }
})

export let { createComment, removeComment, updateComment } = comments.actions;

export default comments;