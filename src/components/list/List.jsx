import styled from 'styled-components';
import { useSelector } from "react-redux/";


import Post from '../post/Post';

const Dd = styled.div`
border-bottom: 1px solid grey;
`

const List = () => {
    let posts = useSelector((state)=>{return state.posts})
    return (
        <>
        <Dd>게시글</Dd>
        {posts.map(post => 
                <Post post ={post} key={post.id}/>
            )
        }
        </>
    )
}

export default List;