import {useNavigate} from "react-router-dom"
import Header from "../components/header/Header";

function Home() {
    let navigate = useNavigate();
    return (
        <>
        <Header/>
        <button onClick={()=>navigate("/write")}>글 작성</button>
        <button onClick={()=>navigate("/list")}>게시글 보기</button>
        </>
    );
}


export default Home;
