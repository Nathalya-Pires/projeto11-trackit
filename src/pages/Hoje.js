import styled from "styled-components";
import NavBar from "../components/NavBar";
import IonIcon from "@reacticons/ionicons";
import Menu from "../components/Menu";

export default function Hoje() {
  return (
    <>
      <Container>
        <NavBar />
        <ContainerHabitos>
          <Dia>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluído ainda</p>
          </Dia>
          <ListaHab>
            <ContainerTarefa>
              <Tarefa>Ler 1 capítulo de livro</Tarefa>
              <p>Sequência atual: 3 dias</p>
              <p>Seu recorde: 5 dias</p>
            </ContainerTarefa>

            <Check>
              <IonIcon name="checkbox" />
            </Check>
          </ListaHab>
        </ContainerHabitos>
        <Menu />
      </Container>
    </>
  );
}

const ContainerTarefa = styled.div``;
const Check = styled.div`
  display: flex;
  align-items: center;
  font-size: 79px;
  color: #8fc549;
  border-radius: 5px;
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
