import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function Historico() {
  return (
    <Container>
      <NavBar />
      <ContainerHistorico>
        <Hist>
          <h1>Histórico</h1>
        </Hist>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </ContainerHistorico>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  width: 375px;
  height: 667px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerHistorico = styled.div`
  width: 90%;
  margin: 28px 20px 0 17px;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;
const Hist = styled.div`
  margin-bottom: 17px;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
`;
