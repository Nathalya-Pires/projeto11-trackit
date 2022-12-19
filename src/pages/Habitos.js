import styled from "styled-components";
import NavBar from "../components/NavBar";
import vetor from "../assets/vetor.png";
import Menu from "../components/Menu";

export default function Habitos() {
  return (
    <Container>
      <NavBar />
      <ContainerHabitos>
        <Hab>
          <h1>Meus hábitos</h1>
          <button>+</button>
        </Hab>

        {/*  <NoHab>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </NoHab> */}

        {/*         <IncluirHab>
          <input type="text" placeholder="nome do hábito" />
          <Semana>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
          </Semana>
          <Botoes>
            <Cancelar>Cancelar</Cancelar>
            <Salvar>Salvar</Salvar>
          </Botoes>
        </IncluirHab> */}

        <ListaHab>
          <Tarefas>
            <Tarefa>Ler 1 capítulo de livro</Tarefa>
            <img src={vetor} alt="Lixeira" />
          </Tarefas>

          <Semana>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
            <Dia>D</Dia>
          </Semana>
        </ListaHab>
      </ContainerHabitos>
      <Menu/>
    </Container>
  );
}

const Tarefas = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`
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
const Semana = styled.ul`
  width: 303px;
  display: flex;
  margin-bottom: 30px;
`;
const Dia = styled.li`
  width: 30px;
  height: 30px;
  background: #ffffff;
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
  color: #dbdbdb;
  margin: 0 2px;
`;
const Container = styled.div`
  background-color: #f2f2f2;
  width: 375px;
  height: 667px;
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
const NoHab = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22.5px;
  color: #666666;
  margin-top: 28px;
`;
