import { useState } from "react";
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux/";
import {useParams} from "react-router-dom"

import { removeComment } from "../../redux/modules/comments";

const Dd = styled.div`
border-bottom: 1px solid grey;
`

const Comment = () => {
    let dispatch = useDispatch();
    let {id} = useParams();
    let comments = useSelector((state)=>{return state.comments});
    let commentList = comments.filter((comment)=>{
        return String(comment.post) === id;
    })
    console.log(commentList);
    return (
        <>
        <Dd>댓글</Dd>
        <div>
            {commentList.map((comment)=>{
                return (
                    <div className='list'>
                        <h4>{comment.title}</h4>
                        <button onClick={()=>{
                            dispatch(removeComment(comment.id))
                        }}>수정하기</button>
                        <button>삭제하기</button>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Comment;