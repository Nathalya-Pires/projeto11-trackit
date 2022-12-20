import styled from "styled-components";
import NavBar from "../components/NavBar";
import Menu from "../components/Menu";
import axios from "axios";
import { useContext, useState } from "react";
import context from "../context/Context";
import DiasSemana from "../components/DiasSemana";
import ListaHabitos from "../components/ListaHabitos";

export default function Habitos() {
  const semana = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [botaoAdd, setBotaoAdd] = useState(false);
  const [desabilita, setDesabilita] = useState(false)
  const { config, habitos, setHabitos } = useContext(context);
  const [body, setBody] = useState({
    name: "",
    days: [],
  });

  function limparInput() {
    setBody({
      name: "",
      days: [],
    });
  }

  function diaClicado(i) {
    if (body.days.includes(i)) {
      const clicadoFilter = body.days.filter((day) => day !== i );
      setBody({ ...body, days: clicadoFilter });
      console.log(body);
    } else {
      const clicado = [...body.days, i];
      setBody({ ...body, days: clicado });
      console.log(body);
    }
  }

  function handleBody(e) {
    setBody({ ...body, [e.target.name]: e.target.value });
  }

  function enviaHabito(e) {
    e.preventDefault();
    setDesabilita(true)

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const requisicao = axios.post(URL, body, config);
    requisicao.then((res) => (limparInput(), setDesabilita(false), setBotaoAdd(false), console.log(res.data)));
    requisicao.catch((err) => (alert(err.response.data.message), setDesabilita(false)));
  }
  console.log("habitos")
    console.log(habitos)

  return (
    <Container>
      <NavBar />
      <ContainerHabitos>
        <Hab>
          <h1>Meus hábitos</h1>
          <button onClick={() => setBotaoAdd(!botaoAdd)}>+</button>
        </Hab>
          { botaoAdd === true ?(<IncluirHab onSubmit={enviaHabito}>
          <input
            disabled={desabilita}
            type="text"
            name="name"
            onChange={handleBody}
            value={body.name}
            placeholder="nome do hábito"
          />
          <Semana>
            {semana.map((s, i) => (
              <DiasSemana 
                key={i}
                days={body.days}
                diaClicado={diaClicado}
                desabilita={desabilita}
                i={i}
                s={s}
              />
            ))}
          </Semana>
          <Botoes>
            <Cancelar disabled={desabilita} onClick={() => setBotaoAdd(false)}>
              Cancelar
            </Cancelar>
            <Salvar disabled={desabilita} type="submit">Salvar</Salvar>
          </Botoes>
        </IncluirHab>) : (null)}
        <ListaHabitos botaoAdd={botaoAdd}/>
         
        
              
        


      </ContainerHabitos>
      <Menu />
    </Container>
  );
}


const Botoes = styled.div`
  display: flex;
  margin-left: 112px;

  button {
    width: 84px;
    height: 35px;
    border-radius: 4.64px;
    border: none;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;
const Cancelar = styled.button`
  background-color: #ffffff;
  color: #52b6ff;
  margin-right: 23px;
`;
const Salvar = styled.button`
  background-color: #52b6ff;
  color: #ffffff;
`;
const IncluirHab = styled.form`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 38px 0 29px 0;
  padding-top: 18px;

  input {
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 2%;

    ::placeholder {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.98px;
      line-height: 25px;
      color: #dbdbdb;
      padding-left: 11px;
    }
  }
`;
const Semana = styled.div`
  width: 303px;
  display: flex;
  margin-bottom: 30px;
`;

const Container = styled.div`
  background-color: #f2f2f2;
  width: 375px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const ContainerHabitos = styled.div`
  width: 90%;
  margin: 28px 20px 0 17px;
`;
const Hab = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 34px;
    color: #ffffff;
  }
`;
