import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

import Postmodal from "../postmodal/Postmodal";

const Detail = () =>{
    let navigate = useNavigate();
    let [modal, setModal] = useState(false);
    let {id} = useParams();
    let [post, setPost] = useState({});
    const fetchPosts = async () => {
        const { data } = await axios.get("http://localhost:3001/posts");
        setPost( data.find((post)=>{
          return String(post.id) === id;
      }))// 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
      };
    useEffect(()=>{
      fetchPosts();
    },[])

    const removePost = (id) => {
      axios.delete(`http://localhost:3001/posts/${id}`);
    }

    const likePost = (todoId, edit) => {
      axios.patch(`http://localhost:3001/posts/${todoId}`, edit);
    };

    const close=()=>{
      setModal(false);
    }

    return (
      <>{modal? <Postmodal post={post} close={close}/>:null}
      <div className='modal' style={{background: 'skyblue'}}>
        <button onClick={()=>navigate(-1)} >이전으로</button>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <p>{post.date}</p>
          <p>{post.writer}</p>
          <div>
            <p>{post.count}</p>
            <button onClick={()=>{
                let copy = {...post, count:post.count+1}
                console.log(copy);
                likePost(post.id,copy);
                navigate(0, { replace: true });
            }}>👍좋아요</button>
          <button onClick={()=>{
            setModal(true);
          }}>수정하기</button>
          <button onClick={()=>{
            removePost(post.id);
            navigate("/list", { replace: true })
          }}>삭제하기</button>
          </div>
        </div>
      </>
    )
  }

  export default Detail;