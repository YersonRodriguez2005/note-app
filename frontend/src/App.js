import React from 'react';
import './App.css';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';

function App() {
  return (
    <div className="App">
      <h1>Aplicación de Notas</h1>
      <AddNote />
      <hr />
      <NotesList />
    </div>
  );
}

export default App;
