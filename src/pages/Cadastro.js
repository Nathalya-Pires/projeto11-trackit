import styled from "styled-components";
import logo from "../assets/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Cadastro() {
  const [desabilita, setDesabilita] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function enviaCadastro(e) {
    e.preventDefault();
    setDesabilita(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const requisicao = axios.post(URL, form);
    requisicao.then((res) => navigate("/"));
    requisicao.catch(
      (err) => (alert(err.response.data.message), setDesabilita(false))
    );
  }

  return (
    <Container>
      <Logo src={logo} alt={"foto de TracKIt"} />
      <Dados onSubmit={enviaCadastro}>
        <input
          data-test="email-input"
          disabled={desabilita}
          type="email"
          name="email"
          onChange={handleForm}
          value={form.email}
          minLength={5}
          required
          placeholder="email"
        />
        <input
          data-test="password-input"
          disabled={desabilita}
          type="password"
          name="password"
          onChange={handleForm}
          value={form.password}
          minLength={5}
          required
          placeholder="senha"
        />
        <input
          data-test="user-name-input"
          disabled={desabilita}
          type="text"
          name="name"
          onChange={handleForm}
          value={form.name}
          minLength={5}
          required
          placeholder="nome"
        />
        <input
          data-test="user-image-input"
          disabled={desabilita}
          type="url"
          name="image"
          onChange={handleForm}
          value={form.image}
          required
          placeholder="foto"
        />
        {desabilita === false ? (
          <Cadastrar disabled={desabilita} data-test="signup-btn" type="submit">
            Cadastrar
          </Cadastrar>
        ) : (
          <Cadastrar disabled={desabilita} data-test="signup-btn" type="submit">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Cadastrar>
        )}
      </Dados>
      <p>
        <Link data-test="login-link" to={"/"}>
          J?? tem uma conta? Fa??a login!
        </Link>
      </p>
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

const Dados = styled.form`
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

const Cadastrar = styled.button`
  width: 303px;
  height: 45px;
  margin: 3px 0 25px 0;
  background: #52b6ff;
  border: none;
  border-radius: 4.64px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
`;
