import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const handle: React.FormEventHandler<HTMLFormElement> = async (event) => {
    try {
      event.preventDefault();
      const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/auth/signin',
        data: {
          email: '',
          password: '',
        },
      });
      console.log('response >>>', response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handle}>
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" placeholder="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" name="password" id="password" placeholder="password"/>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default App;
