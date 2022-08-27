import styled from "styled-components";

let Btn = styled.button`
background-color: red;
`

const Allbtn = ({desc, onClick}) => {
    return (
        <Btn onClick = {onClick}>{desc}</Btn>
    )
}

export default Allbtn;