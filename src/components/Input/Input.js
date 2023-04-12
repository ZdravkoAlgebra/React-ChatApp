import { useState } from 'react';
import { Button, InputText, Form, InputWrapper } from '../../utils/style/defaultStyles';

function Input(props) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSendMessage(text);
    setText("");
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