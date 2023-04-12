import { useState } from 'react';
import { Button, InputText, Form, MessageContent } from '../../utils/style/defaultStyles';

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
    <MessageContent>
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
    </MessageContent>
  );
}

export default Input;