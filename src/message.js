import { useState } from "react";
import { v4 as uuid } from 'uuid';

const Message = () => {
    const [activeMessage, setActiveMessage] = useState({ id: uuid(), message: '' });
    const [messages, setMessages] = useState([]);

    const handleTextChange = event => {
        setActiveMessage({ id: activeMessage.id, message: event.target.value });
    };

    const handleAddMessage = event => {
        event.preventDefault();

        setMessages([...messages, activeMessage]);
        setActiveMessage({ id: uuid(), message: '' });
    };

    const handleTextUpdate = id => event => {
        event.preventDefault();

        const copy = [...messages];
        const index = copy.findIndex(message => message.id === id);

        if (index === -1) return;

        copy.splice(index, 1, { id, message: event.target.value });

        setMessages([...copy]);
    };

    const handleRemoveMessage = id => event => {
        event.preventDefault();

        setMessages([...messages.filter(message => message.id !== id)]);
    };


    return (
        <article>
            <form className="form">
                <div className="form-control">
                    <label htmlFor="firstName">Message: </label>
                    <input
                        type="text"
                        value={activeMessage.message}
                        onChange={handleTextChange}
                    />
                </div>
                <button type="submit" onClick={handleAddMessage}>
                    Add
                </button>
            </form>
            {messages.length > 0 &&
                messages.map((message) => {
                    return (
                        <div className="message" key={message.id}>
                            <input
                                type="text"
                                defaultValue={message.message}
                            />
                            <div>
                                <button className="btn" onClick={handleTextUpdate(message.id)}>
                                    Update
                                </button>
                                <button className="btn" onClick={handleRemoveMessage(message.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </article>
    );
};

export default Message;
