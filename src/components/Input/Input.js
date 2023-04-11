import { useState, useEffect } from 'react';
import { Button, InputText, Form  } from '../../utils/style/defaultStyles';



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
    props.onSendMessage(text);
    setText("");
  }

  return (
    <div className="Input">
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
    </div>
  );
}



export default Input;