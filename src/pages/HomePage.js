import styled from "styled-components";
import logo from "../assets/logo.png";

export default function HomePage() {
  return (
    <Container>
      <Logo src={logo} alt={"foto de TracKIt"} />
      <Login>
        <Email>
          <input type="email" minLength={5} required placeholder="email" />
        </Email>
        <Senha>
          <input type="password" minLength={5} required placeholder="senha" />
        </Senha>
        <Entrar>Entrar</Entrar>
      </Login>
      <p>Não tem uma conta? Cadastre-se!</p>
    </Container>
  );
}

const Container = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 232px;
    height: 17px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;
const Logo = styled.img`
  max-width: 180px;
  background-color: red;
  color: blue;
`;
const Login = styled.form`
  display: flex;
  flex-direction: column;
`;
const Email = styled.label``;
const Senha = styled.label``;
const Entrar = styled.button``;
