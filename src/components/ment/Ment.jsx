import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

import Commentmodal from "../commentmodal/Commentmodal";

const Ment = ({ment}) => {
    let navigate = useNavigate();
    let [modal, setModal] = useState(false);
    const close=()=>{
        setModal(false);
      }
      const removeComment = (id) => {
        axios.delete(`http://localhost:3001/comments/${id}`);
      }
      
    return (
    <>
        {modal?<Commentmodal ment = {ment} close={close}/>:null}
        <div className='list' key={ment.id}>
            <h4>{ment.desc}</h4>
            <button onClick={()=>{
            setModal(true);
            }}>수정하기</button>
            <button onClick={()=>{
            removeComment(ment.id);
            navigate(0, { replace: true })
            }}>
            삭제하기</button>
        </div>
    </>
    )
}

export default Ment;