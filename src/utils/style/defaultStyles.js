import styled from "styled-components";
import theme from "../style/theme"

export const Button = styled.button`
  padding: 15px 40px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
  font-family: 'Prompt', sans-serif;
`

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: url(https://static.videezy.com/system/resources/thumbnails/000/051/533/original/Hitech-Digital-Background.jpg);
`;

export const Header = styled.div`
  padding: 25px;
  overflow: visible;
  width: 100%;
  text-align: center;
  background: linear-gradient( 135deg, #000000fe 10%, #ffffffca 100%);
  border-radius: 0% 0 20% 20%;
  color: white;
  font-family: 'Prompt', sans-serif;
  font-weight: 400;
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
  border: 1px solid black;
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