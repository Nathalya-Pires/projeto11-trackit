import IonIcon from "@reacticons/ionicons";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import context from "../context/Context";

export default function Hoje() {
  const { config, progresso, setProgresso } = useContext(context);
  const [atualizar, setAtualizar] = useState(true);
  const [dia, setDia] = useState(undefined);
  const data = dayjs()
    .locale("pt-br")
    .format("dddd, DD/MM")
    .replace("-feira", "");
  const dataFormatada = data.charAt(0).toUpperCase() + data.slice(1);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const requisicao = axios.get(URL, config);
    requisicao.then(
      (res) => (setDia(res.data), console.log("setDia"), console.log(res.data))
    );
    requisicao.catch((err) => alert(err.response.data.message));
  }, [atualizar]);

  useEffect(() => {
    console.log("dia");
    console.log(dia);
    if (dia) {
      const contador = dia.reduce(
        (contador, obj) => (obj.done === true ? (contador += 1) : contador),
        0
      );
      setProgresso(contador * (100 / dia.length));
      console.log("contador");
      console.log(contador);
    }
  }, [atualizar, dia]);

  console.log("progresso");
  console.log(progresso);

  function marcarFeito(id, feito) {
    if (feito === false) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
      const requisicao = axios.post(URL, { body: {} }, config);
      requisicao.then((res) => setAtualizar(!atualizar));
      requisicao.catch((err) => alert(err.response.data.message));
    } else {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
      const requisicao = axios.post(URL, { body: {} }, config);
      requisicao.then((res) => setAtualizar(!atualizar));
      requisicao.catch((err) => alert(err.response.data.message));
    }
  }

  return (
    <Container>
      <NavBar data-test="header" />
      <ContainerHabitos>
        <Dia data-test="today">
        <h1>{dataFormatada}</h1>
          {(progresso === 0) ? (
            <p>Nenhum hábito concluído ainda</p>
          ) : (
            <h2 data-test="today-counter">{progresso}% dos hábitos concluídos</h2>
          )}
        </Dia>
        {dia === undefined || dia.length === 0 ? (
          <div>Carregando...</div>
        ) : (
          dia.map((d) => (
            <ListaHab data-test="today-habit-container" key={d.id}>
              <ContainerTarefa>
                <Tarefa data-test="today-habit-name">{d.name}</Tarefa>
                <TextoFixo>Sequência atual:</TextoFixo>
                <TextoApi1 data-test="today-habit-sequence" feito={d.done}> {d.currentSequence} dias</TextoApi1>
                <br />
                <TextoFixo>Seu recorde:</TextoFixo>
                <TextoApi2 data-test="today-habit-record" atual={d.currentSequence} recorde={d.highestSequence}  feito={d.done}> {d.highestSequence} dias</TextoApi2>
              </ContainerTarefa>

              <Check data-test="today-habit-check-btn" feito={d.done}>
                <IonIcon 
                  onClick={() => marcarFeito(d.id, d.done)}
                  name="checkbox"
                />
              </Check>
            </ListaHab>
          ))
        )}
      </ContainerHabitos>
      <Menu data-test="menu" />
    </Container>
  );
}

const TextoFixo = styled.span`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.98px;
  line-height: 16px;
  color: #666666;
`;

const TextoApi1 = styled.span`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.98px;
  line-height: 16px;
  color: ${(props) => (props.feito === true ? "#8fc549" : "#666666")};
`;

const TextoApi2 = styled.span`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.98px;
  line-height: 16px;
  color: ${(props) => ((props.atual === props.recorde && props.recorde !== 0)? "#8fc549" : "#666666")};
`;

const ContainerTarefa = styled.div``;
const Check = styled.div`
  display: flex;
  align-items: center;
  font-size: 79px;
  color: ${(props) => (props.feito === true ? "#8fc549" : "#EBEBEB")};
  border-radius: 5px;
`;
const Container = styled.div`
  background-color: #f2f2f2;
  width: 375px;
  min-height: 667px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0 120px 0;
`;
const ListaHab = styled.div`
  display: flex;
  justify-content: space-between;
  width: 340px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px 10px 10px 15px;
  margin: 15px 0;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.98px;
    line-height: 16px;
    color: #666666;
  }
`;

const Dia = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;

  h1 {
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }

  h2 {
    color: #8fc549;
  }

  p {
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
  }
`;
const ContainerHabitos = styled.div`
  width: 90%;
  margin: 28px 20px 0 17px;
`;

const Tarefa = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;
  margin-bottom: 7px;
`;
