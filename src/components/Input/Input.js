import { useState, useEffect } from 'react';

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
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus
        />
        <button>Send</button>
      </form>
    </div>
  );
}



export default Input;