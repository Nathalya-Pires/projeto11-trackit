import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function Habitos() {
  return (
    <Container>
      <NavBar />
      <ContainerHabitos>
        <Hab>
          <h1>Meus hábitos</h1>
          <button>+</button>
        </Hab>

        <NoHab>
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </NoHab>
      </ContainerHabitos>
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
const ContainerHabitos = styled.div`
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
  margin-top: 28px ;
`;
