import { useState } from "react";
import axios from "axios";

// import { updateComment } from "../../redux/modules/comments";

const Commentmodal = ({ment, close}) => {
    const initialState = {
        id: ment.id,
        post: ment.post,
        desc: ment.desc,
    };
    const [ment1,setMent] = useState(initialState);
    const [desc,setDesc] =useState(ment1.desc);
    // const change = (desc) =>{
    //     dispatch(updateComment({ ...ment1, desc:desc}));
    // }

    const updateComment = (todoId, edit) => {
        axios.patch(`http://localhost:3001/comments/${todoId}`, edit);
      };
    
    return (
        <>
        
        <div className="black-bg show-modal">
            <div className="white-bg">
            <h4>댓글 수정하기</h4>
            <div>
                <label>내용</label>
                <input className="input" type="text" name="desc" value={desc}
                onChange={(e)=>{setDesc(e.target.value)}}/>
            </div>
            <button className="btn btn-danger" 
            onClick={()=>{updateComment(ment1.id,{...ment1,desc:desc});close();}}>수정하기</button>
            <button className="btn btn-danger" onClick={()=>{close()}}>닫기</button>
            </div>
        </div>
      </>
    )
}

export default Commentmodal;