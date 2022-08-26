import { useState } from "react";

const Form = () => {
    const [post,setPost] = useState();
    return (
        <div className="form">
            <div className ="input-group">
                <label>제목</label>
                <input className="input" type="text">
                </input>
                <label>내용</label>
                <input className="input" type="text">
                </input> 
                <button className="but">
                추가하기</button>   
            </div>
        </div>
    )
}

export default Form;