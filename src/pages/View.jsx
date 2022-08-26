import {useNavigate} from "react-router-dom"

import Header from "../components/header/Header";
import Comment from "../components/comment/Comment"
import Detail from "../components/detail/Detail";

const View = () => {
    let navigate = useNavigate();
    return (
        <>
        <Header/>
        <button onClick={()=>navigate(-1)} >이전으로</button>
        <Detail/>
        <Comment/>
        </>
    )
}

export default View;