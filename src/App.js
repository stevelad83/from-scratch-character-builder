import React from 'react';
import './App.css';
import Form from './components/Form';
import Stats from './components/Stats';
import Avatar from './components/Avatar';

function App() {
  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section className="container">
        <div className="left">
          <Form />
          <Stats />
        </div>
        <div className="right">
          <Avatar />
        </div>
      </section>
    </main>
  );
}

export default App;
