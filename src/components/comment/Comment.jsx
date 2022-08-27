import styled from "styled-components"
import { useDispatch } from "react-redux/";
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

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
    // let comments = useSelector((state)=>{return state.comments});
    let [comments, setComments] = useState([]);
    // = useSelector((state)=>{return state.posts});
    const fetchComments = async () => {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
      };
    useEffect(()=>{
        // axios.get('http://localhost:3001/comments').then((info) => {
        // let copy = [...info.data];
        // setComments(copy);
        setTimeout(()=>{fetchComments();},500);
    },[comments]);
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
        <button onClick={()=>{axios.post("http://localhost:3001/comments",review );; setReview(initialState); setMent("")}}>댓글 작성</button>
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