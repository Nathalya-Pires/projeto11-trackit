import styled from "styled-components";
import logo from "../assets/logo.png";

export default function HomePage() {
  return (
    <Container>
      <Logo src={logo} alt={"foto de TracKIt"} />
      <Login>
        <label>
          <input type="email" minLength={5} required placeholder="email" />
        </label>
        <label>
          <input type="password" minLength={5} required placeholder="senha" />
        </label>
        <Entrar>Entrar</Entrar>
      </Login>
      <p>Não tem uma conta? Cadastre-se!</p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  width: 375px;
  height: 667px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17.5px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;
const Logo = styled.img`
  width: 180px;
  margin: 68px 98px 32px 97px;
`;
const Login = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 1%;

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
const Entrar = styled.button`
  width: 303px;
  height: 45px;
  margin: 3px 0 25px 0;
  background: #52b6ff;
  border: none;
  border-radius: 4.64px;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;
