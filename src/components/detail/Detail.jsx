import {useParams} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux/";
import { likePost, removePost, updatePost } from "../../redux/modules/posts";
import {useNavigate} from "react-router-dom"
import {useState} from "react"

import Postmodal from "../postmodal/Postmodal";

const Detail = () =>{
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [modal, setModal] = useState(false);
    let {id} = useParams();
    let posts = useSelector((state)=>{return state.posts});
    let post = posts.find((post)=>{
        return String(post.id) === id;
    })

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
                dispatch(likePost(post.id))
            }}>👍좋아요</button>
          <button onClick={()=>{
            setModal(true);
          }}>수정하기</button>
          <button onClick={()=>{
            dispatch(removePost(post.id));
            navigate("/list")
          }}>삭제하기</button>
          </div>
        </div>
      </>
    )
  }

  export default Detail;