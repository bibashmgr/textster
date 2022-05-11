import { useState } from 'react';
import { io } from 'socket.io-client';

// Custom-styling
import './App.scss';

const App = () => {
  const [text, setText] = useState('');
  const [texts, setTexts] = useState([]);
  const socket = io('http://localhost:9999');

  const handleSend = (e) => {
    e.preventDefault();
    if (text) {
      socket.emit('message', text);
      setText('');
    }
  };

  socket.on('message', (msg) => {
    setTexts([...texts, msg]);
  });

  return (
    <div className='container'>
      <ul id='messages'>
        {texts.map((txt, index) => {
          return <li key={index}>{txt}</li>;
        })}
      </ul>
      <form id='form' onSubmit={handleSend}>
        <input
          id='input'
          autoComplete='off'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default App;
