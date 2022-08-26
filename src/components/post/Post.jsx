import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux/";
import { removePost, updatePost } from "../../redux/modules/posts";


const Post = ({post}) => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    return (
        <>
        <div className='list'>
        <h4 onClick={()=>navigate("/view/"+ post.id)}>{post.title}<span>👍</span>{post.count}</h4>
        <p>{post.body}</p>
        <p>{post.date}</p>
        <div>
        <button>수정하기</button>
        <button onClick={()=>{
            dispatch(removePost(post.id))
        }}>삭제하기</button>
        </div>
      </div>
      </>
    )
}

export default Post;