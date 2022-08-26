import { removeComment } from "../../redux/modules/comments";
import { useDispatch } from "react-redux/";
import { useState } from "react";

import Commentmodal from "../commentmodal/Commentmodal";

const Ment = ({ment}) => {
    let [modal, setModal] = useState(false);
    let dispatch = useDispatch();
    const close=()=>{
        setModal(false);
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
            dispatch(removeComment(ment.id))
            }}>
            삭제하기</button>
        </div>
    </>
    )
}

export default Ment;