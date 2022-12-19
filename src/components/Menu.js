import {
    buildStyles, CircularProgressbar
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

export default function Menu() {
  const hoje = 55;

  return (
    <Container>
      <Habitos>Hábitos</Habitos>
      <Hoje>
        <CircularProgressbar
          value={hoje}
          text={`Hoje`}
          background
          backgroundPadding={5}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
            textSize: "18px",
          })}
        />
      </Hoje>
      <Historico>Histórico</Historico>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 70px;
  background: #FFFFFF;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #52b6ff;
`;
const Habitos = styled.div`
margin: 0 31px 0 32px;
`;
const Hoje = styled.div`
  width: 91px;
  margin-bottom: 40px;
`;
const Historico = styled.div`
margin: 0 31px 0 32px;
`;
