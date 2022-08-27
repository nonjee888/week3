import styled from 'styled-components';
import axios from "axios";
import {useEffect, useState} from "react"

import Post from '../post/Post';

const Dd = styled.div`
border-bottom: 1px solid grey;
`

const List = () => {
    let [posts, setPosts] = useState([]);
    const fetchPosts = async () => {
        const { data } = await axios.get("http://localhost:3001/posts");
        setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
      };
    useEffect(()=>{
        fetchPosts();
    },[])
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