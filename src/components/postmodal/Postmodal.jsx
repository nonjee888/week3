import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

const Postmodal = ({post, close}) => {
    let navigate = useNavigate();
    const initialState = {
        id: post.id,
        writer: post.writer,
        title: post.title,
        body: post.body,
        date: post.date,
        count: post.count
      };
    const [post1,setPost1] = useState(initialState);
    const [title,setTitle] =useState(post1.title);
    const [body,setBody] =useState(post1.body);

    // const change = (title, body) =>{
    //     dispatch(updatePost({ ...post1, title:title, body:body }));
    // }
    const updatePost = (todoId, edit) => {
        axios.patch(`http://localhost:3001/posts/${todoId}`, edit);
      };
    return (
        <>
        
        <div className="black-bg show-modal">
            <div className="white-bg">
            <h4>게시글 수정하기</h4>
            <div>
                <label>제목</label>
                <input className="input" type="text" name="title" value={title}
                onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div>
                <label>내용</label>
                <input className="input" type="text" name="body" value={body}
                onChange={(e)=>{setBody(e.target.value)}}/>
            </div>
            <button className="btn btn-danger" 
            onClick={()=>{updatePost(post1.id,{ ...post1, title:title, body:body });close(); navigate(0, { replace: true });}}>수정하기</button>
            <button className="btn btn-danger" onClick={()=>{close()}}>닫기</button>
            </div>
        </div>
      </>
    )
}

export default Postmodal;