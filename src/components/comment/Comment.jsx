import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux/";
import {useParams} from "react-router-dom"
import { useState } from "react";

import { removeComment, createComment } from "../../redux/modules/comments";

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
    console.log(comments)
    return (
        <>
        <Dd>댓글</Dd>
        <div>
        <input className="input" type="text" value={ment} 
        onChange={(e)=>{setMent(e.target.value);
        setReview({...review, id:comments.length+1 , post: id, desc:ment});}}/>
        <button onClick={()=>{dispatch(createComment(review)); setReview(initialState); setMent("")}}>댓글 작성</button>
        </div>
        <div>
            {commentList.map((comment)=>{
                return (
                    <div className='list' key={comment.id}>
                        <h4>{comment.desc}</h4>
                        <button>수정하기</button>
                        <button onClick={()=>{
                            console.log(comment.id)
                            dispatch(removeComment(comment.id))
                        }}>
                        삭제하기</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Comment;