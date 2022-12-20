import styled from "styled-components";
import trackIt from "../assets/logoEscrita.png";
import { useContext } from "react";
import context from "../context/Context";

export default function NavBar() {
  const { imagem } = useContext(context);

  return (
    <Container data-test="header">
      <Logo src={trackIt} alt="TrackIt" />
      <Foto img src={imagem} alt="nova fotinha" />
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;

`;
const Logo = styled.img`
  margin: 0 191px 0 18px;
`;

const Foto = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98.5px;
  background-color: red;
  resize: "contain";
`;
