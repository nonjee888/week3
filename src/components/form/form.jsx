import { useState } from "react";
import {useNavigate} from "react-router-dom"
import nextId from "react-id-generator";
import { createPost } from "../../redux/modules/posts";
import { useDispatch } from "react-redux/";

const Form = () => {
    let id = nextId();
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const initialState = {
        id: 0,
        writer: "",
        title: "",
        body: "",
        date: "2022.8.26",
        count: 0
      };
    const [post,setPost] = useState(initialState);
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
      };
      const onSubmitHandler = (event) => {
        event.preventDefault();
        if (post.writer.trim() === "" || post.title.trim() === "" || post.body.trim() === "") return alert('비었다.');
        dispatch(createPost({ ...post, id: id }));
        setPost(initialState);
        navigate("/list")
      };
    
      
    return (
        <form onSubmit={onSubmitHandler} className="add-form">
            <div className ="input-group">
                <label>작성자</label>
                <input className="input" type="text" name="writer" value={post.writer} onChange={onChangeHandler} minLength="2"/>
                
                <label>제목</label>
                <input className="input" type="text" name="title" value={post.title} onChange={onChangeHandler} minLength="2"/>
            
                <label>내용</label>
                <input className="input" type="text" name="body" value={post.body} onChange={onChangeHandler} minLength="5"/>
                 
                <button className="but">
                추가하기</button>   
            </div>
        </form>
    )
}

export default Form;