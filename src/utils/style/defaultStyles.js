import styled from "styled-components";

export const Button = styled.button`
  padding: 15px 40px;
  font-size: 16px;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
`

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: url(https://preview.redd.it/v41wn7nbe7m61.jpg?auto=webp&s=35bc8b0ef822bc8dfe2cc2b699c68b69c1d66900) center;
`;

export const Header = styled.div`
  background-color: #d79595;
  padding: 25px;
  overflow: visible;
  width: 100%;
  text-align: center;
  color: rgb(9, 8, 8);
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto 40px;
`;

export const InputText = styled.input`
  padding: 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid orangered;
  flex-grow: 1;
`;


export const InputWrapper = styled.div`
`;

export const MessagesList = styled.ul`
  padding: 20px 0;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
  overflow: auto;
`;