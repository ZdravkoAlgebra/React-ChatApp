import { Field, Form } from 'formik';
import styled from 'styled-components';

export const GlobalStyles = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: linear-gradient(lightgreen, white);
`;

export const AppHeader = styled.div`
  background-image: linear-gradient( 135deg, #000000fe 10%, #ffffffca 100%);
  border-radius: 0 0 20% 20%;
  overflow: hidden;
  width: 100%;
  text-align: center;
  color: rgb(9, 8, 8);
  font-family: 'Prompt', sans-serif;
  color: white;
  flex-shrink: 0;
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

export const MessagesMessage = styled.li`
  display: flex;
  margin-top: 10px;

  &.messageFromMe {
    flex-direction: row-reverse;
    text-align: right;

    > .MessageContent {
      align-items: flex-end;
      .text {
        background-color: orangered;
      }
    }
  }
`;

export const MessageContent = styled.div`
  display: inline-block;

  > .username {
    display: block;
    color: rgb(0, 0, 0);
    font-size: 14px;
    padding-bottom: 4px;
  }

  > .text {
    padding: 10px;
    max-width: 400px;
    margin: 0;
    border-radius: 12px;
    background-color: cornflowerblue;
    color: white;
    display: inline-block;
  }
`;

export const MessageForm = styled(Form)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 900px;
  margin: 0 auto 40px;
`;

export const InputText = styled(Field)`
  padding: 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid black;
  flex-grow: 1;
`;

export const Button = styled.button`
  padding: 15px 40px;
  font-size: 16px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
  font-family: 'Prompt', sans-serif;
`;