import styled from "styled-components";

let Btn = styled.button`
background-color: orange;
width: 100%;
padding: 10px;
`

const Allbtn = ({desc, onClick}) => {
    return (
        <Btn onClick = {onClick}>{desc}</Btn>
    )
}

export default Allbtn;