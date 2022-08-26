import { useState } from "react";
import { useDispatch } from "react-redux/";
import { createPost } from "../../redux/modules/posts";
import {useNavigate} from "react-router-dom"

let number = 3;
const Form = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
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
        if (post.title.trim() === "" || post.body.trim() === "") return;
        dispatch(createPost({ ...post, id: number }));
        setPost(initialState);
        number++;
        navigate("/list")
      };
    
    return (
        <form onSubmit={onSubmitHandler} className="add-form">
            <div className ="input-group">
                <label>작성자</label>
                <input className="input" type="text" name="writer" value={post.writer} onChange={onChangeHandler}/>
                
                <label>제목</label>
                <input className="input" type="text" name="title" value={post.title} onChange={onChangeHandler}/>
            
                <label>내용</label>
                <input className="input" type="text" name="body" value={post.body} onChange={onChangeHandler}/>
                 
                <button className="but">
                추가하기</button>   
            </div>
        </form>
    )
}

export default Form;