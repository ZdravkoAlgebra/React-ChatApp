import { useState, useEffect } from 'react';
import { Button, InputText, Form, InputWrapper } from '../../utils/style/defaultStyles';



function Input(props) {
  const [text, setText] = useState("");

  useEffect(() => {
    const input = document.querySelector('input');
    input.focus();
  }, []);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setText("");
    props.onSendMessage(text);
  }

  return (
    <InputWrapper>
      <Form onSubmit={handleSubmit}>
        <InputText
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus
        />
        <Button>Send</Button>
      </Form>
    </InputWrapper>
  );
}



export default Input;