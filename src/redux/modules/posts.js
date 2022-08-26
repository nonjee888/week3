import { createSlice } from '@reduxjs/toolkit'

let posts = createSlice({
    name:"posts",
    initialState:[
        {
            id: 0,
            writer: "나야나",
            title: "안녕하세요",
            body: "7조분들",
            date: "2022.8.26",
            count: 0
        },
        {
            id: 1,
            writer: "나야나",
            title: "부족한 실력이지만",
            body: "열심히 하겠습니다.",
            date: "2022.8.26",
            count: 0
        },
        {
            id: 2,
            writer: "나야나",
            title: "다들",
            body: "화이팅",
            date: "2022.8.26",
            count: 0
        },
    ],
    reducers:{
        createPost(state, action){
            state.push(action.payload);
        },
        removePost(state, action){
            let  index = state.findIndex(post =>  post.id === action.payload);
			state.splice(index,1);
        },
        updatePost(state, action){
            let  index = state.findIndex(post =>  post.id === action.payload.id);
			state.splice(index, 1, action.payload);
        },
        likePost(state, action){
            let index = state.findIndex(post => post.id === action.payload);
			state[index].count +=1;
        }
    }
})

export let { createPost, removePost, updatePost, likePost } = posts.actions;

export default posts;