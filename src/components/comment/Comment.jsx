import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux/";
import {useParams} from "react-router-dom"
import { useState } from "react";

import { createComment } from "../../redux/modules/comments";

import Ment from "../ment/Ment";

const Dd = styled.div`
border-bottom: 1px solid grey;
`

const Comment = () => {
    const initialState = {
        id: 0,
        post: 0,
        desc: ""
    };
    let dispatch = useDispatch();
    let [ment, setMent] = useState("");
    let [review,setReview] = useState(initialState);
    let {id} = useParams();
    let comments = useSelector((state)=>{return state.comments});
    let commentList = comments.filter((comment)=>{
        return String(comment.post) === id;
    })
    return (
        <>
        <Dd>댓글</Dd>
        <div>
        <input className="input" type="text" value={ment} 
        onChange={(e)=>{setMent(e.target.value);
        setReview({...review, id:comments.length+1 , post: id, desc:e.target.value});}}/>
        <button onClick={()=>{dispatch(createComment(review)); setReview(initialState); setMent("")}}>댓글 작성</button>
        </div>
        <div>
            {commentList.map((comment)=>{
                return (
                    <Ment ment = {comment} key={comment.id}/>
                )
            })}
        </div>
        </>
    )
}

export default Comment;