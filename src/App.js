import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(["남코추", "강남 우동", "파이독학"]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal,setModal] = useState(false);
  let [count,setCount] = useState(0);
  let [입력값, 입력값변경] = useState("");
  const changeNam = (글제목)=>{
    let copy = [...글제목];
        copy[0] = "여자코트추천";
        글제목변경(copy);
  }
  const addtitle = (입력값) => {
    let copy = [...글제목];
    copy.unshift(입력값);
    글제목변경(copy);
  }
  const removetitle = (i) => {
    let copy = [...글제목];
    copy.splice(i,1);
    글제목변경(copy);
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <button onClick={()=>{
        let copy2 = [...글제목];
        copy2.sort();
        글제목변경(copy2);
      }}>가나다라순 정렬</button>
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = "여자코트추천";
        글제목변경(copy);
      }}>글수정</button>

      {[0,1,2].map((a,i)=>{
        return (<div className='list'>
        <h4 onClick={()=>{setModal(!modal); setCount(i);}}>{글제목[i]}<span onClick={(e)=>{ e.stopPropagation();
          let 따봉copy = [...따봉];
          따봉copy[i] +=1;
          따봉변경(따봉copy);
          console.log(따봉);
          }}>👍</span>{따봉[i]}</h4>
        <p>2월 17일 발행</p>
        <button onClick={()=>{removetitle(i)}}>삭제하기</button>
      </div>)
      })}
      {modal
        ?<Modal 글제목 = {글제목} changeNam={changeNam} count={count}></Modal>
        :null
      }
      <input type="text" onChange={(e)=>{입력값변경(e.target.value)}} value ={입력값}></input>
      <button onClick={()=>addtitle(입력값)}>추가하기</button>
    </div>
  );
}

const Modal = (props) =>{
  return (
    <div className='modal' style={{background: 'skyblue'}}>
        <h4>{props.글제목[props.count]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{
        props.changeNam(props.글제목)
      }}>글수정</button>
      </div>
  )
}
export default App;
