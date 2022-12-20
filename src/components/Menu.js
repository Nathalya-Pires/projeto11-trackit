import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import context from "../context/Context";
import { useContext } from "react";

export default function Menu() {
  const {progresso} = useContext(context);

  return (
    <Container>
      <Habitos>
        <Link data-test="habit-link" to={"/habitos"}>Hábitos</Link>
      </Habitos>
      <Link to={"/hoje"}>
        <Hoje data-test="today-link">
          <CircularProgressbar
            value={progresso}
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
      </Link>
      <Historico>
        <Link data-test="history-link" to={"/historico"}> Histórico </Link>
      </Historico>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 70px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

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
  border-radius: 91px;
`;
const Historico = styled.div`
  margin: 0 31px 0 32px;
`;
