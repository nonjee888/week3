import styled from "styled-components"
import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

import Ment from "../ment/Ment";

const Dd = styled.div`
border-bottom: 1px solid grey;
`

const Comment = () => {
    let navigate = useNavigate();
    const initialState = {
        id: 0,
        post: 0,
        desc: ""
    };

    let [ment, setMent] = useState("");
    let [review,setReview] = useState(initialState);
    let {id} = useParams();
    let [comments, setComments] = useState([]);
    const fetchComments = async () => {
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
      };
    useEffect(()=>{
        fetchComments();
    },[]);
    let commentList = comments.filter((comment)=>{
        return String(comment.post) === id;
    })
    return (
        <>
        <Dd>댓글</Dd>
        <div>
        <input className="input" type="text" value={ment} 
        onChange={(e)=>{setMent(e.target.value);
        setReview({...review, id:Math.random() , post: id, desc:e.target.value});}}/>
        <button onClick={()=>{axios.post("http://localhost:3001/comments",review ); setReview(initialState); setMent(""); navigate(0, { replace: true }); }}>댓글 작성</button>
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