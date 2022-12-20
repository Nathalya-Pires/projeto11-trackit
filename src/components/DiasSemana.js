import styled from "styled-components";

export default function DiasSemana({ diaClicado, i, s, days, desabilita }) {

  return (
    <Dia data-test="habit-day" type="button"
      days={days}
      i={i}
      onClick={() => (diaClicado(i))}
      disabled={desabilita}
    >
      {s}
    </Dia>
  );
}

const Dia = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) =>
    props.days.includes(props.i) ? "#CFCFCF" : "#FFFFFF"};
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
  color: ${(props) =>
    props.days.includes(props.i) ? "#FFFFFF" : "#CFCFCF"};
  margin: 0 2px;
`;
