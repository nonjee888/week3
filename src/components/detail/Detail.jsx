import {useParams} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux/";
import { likePost } from "../../redux/modules/posts";

const Detail = () =>{
    let dispatch = useDispatch();
    let {id} = useParams();
    let posts = useSelector((state)=>{return state.posts});
    let post = posts.find((post)=>{
        return String(post.id) === id;
    })

    return (
      <div className='modal' style={{background: 'skyblue'}}>
          <h4>{post.title}</h4>
          <p>{post.date}</p>
          <p>{post.body}</p>
          <div>
            <p>{post.count}</p>
            <button onClick={()=>{
                dispatch(likePost(post.id))
            }}>👍좋아요</button>
          </div>
        </div>
    )
  }

  export default Detail;