import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import context from "../context/Context";
import axios from "axios";
import vetor from "../assets/vetor.png";

export default function ListaHabitos({ botaoAdd }) {
  const [habitos, setHabitos] = useState(undefined);
  const { config } = useContext(context);
  const [atualizar, setAtualizar] = useState(true);
  const semana = ["D", "S", "T", "Q", "Q", "S", "S"];

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const requisicao = axios.get(URL, config);
    requisicao.then(
      (res) => (
        setHabitos(res.data), console.log("sethabitos"), console.log(res.data)
      )
    );
    requisicao.catch((err) => alert(err.response.data.message));
  }, [botaoAdd, atualizar]);

  function Delete(id) {
    console.log("id");
    console.log(id);
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    if (window.confirm("Gostaria de deletar esse hábito?") === true) {
      const requisicao = axios.delete(url, config);
      requisicao.then((res) => setAtualizar(!atualizar));
      requisicao.catch((err) => alert(err.response.data.message));
    }
  }

  if (habitos === undefined) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {habitos.map((h, i) => (
        <ListaHab key={h.id}>
          <Tarefas>
            <Tarefa>{h.name}</Tarefa>
            <img onClick={() => Delete(h.id)} src={vetor} alt="Lixeira" />
          </Tarefas>

          <Semana>
            {semana.map((d, i) => (
              <Dia key={i} selecionado={h.days.includes(i)}>
                {d}
              </Dia>
            ))}
          </Semana>
        </ListaHab>
      ))}
    </>
  );
}

const Tarefas = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ListaHab = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  padding: 13px 10px 0 15px;
  margin: 5px 0;

  img {
    width: 13px;
    height: 15px;
  }
`;
const Tarefa = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #666666;
`;
const Dia = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.selecionado ? "#DBDBDB" : "#FFFFFF")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) => (props.selecionado ? "#FFFFFF" : "#DBDBDB")};
  margin: 0 2px;
`;
const Semana = styled.div`
  width: 303px;
  display: flex;
  margin-bottom: 30px;
`;
