import React, { useState } from "react";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    chat.push(message);
    setChat([...chat]);
    setMessage("");
    console.log(chat);
  };

  const removeMessage = (t) => {
    const position = chat.indexOf(t);
    setChat(chat.splice(position, 1));
  };

  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Message: </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          <img
            src="https://img.flaticon.com/icons/png/512/60/60525.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
            alt="Send"
            height="30"
            widht="30"
          />
        </button>
      </form>
      {chat.map((message) => {
        return (
          <div className="message" key={message}>
            <h4>David: {message}</h4>
            <button className="btn" onClick={removeMessage}>
              Delete
            </button>
          </div>
        );
      })}
    </article>
  );
};

export default SendMessage;
