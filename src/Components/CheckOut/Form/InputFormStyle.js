import styled from "styled-components";
export const Input = styled.input`
  width: 16rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  outline: none;
  color: black;
  background-color: var(--naranja2);
  text-align: center;
  border: ${({ isError }) =>
    isError ? "2px solid #fb103d " : "3px solid black"};
`;

export const InputLabel = styled.label`
  margin-top: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
