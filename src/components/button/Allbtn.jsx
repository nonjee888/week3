import styled from "styled-components";

let Btn = styled.button`
background-color: orange;
width: 100%;
`

const Allbtn = ({desc, onClick}) => {
    return (
        <Btn onClick = {onClick}>{desc}</Btn>
    )
}

export default Allbtn;