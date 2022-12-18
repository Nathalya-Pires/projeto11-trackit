import styled from "styled-components"
import trackIt from "../assets/logoEscrita.png"
import bob from "../assets/bob.jpg"

export default function NavBar(){
    return(
        <Container>
            <Logo src={trackIt} alt="TrackIt"/>
            <Foto scr={bob} alt="foto do usuário"/>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
`
const Logo = styled.img`
    margin: 0 191px 0 18px;
`
const Foto = styled.img`
width: 51px;
height: 51px;
border-radius: 98.5px;
background-color: red;
`