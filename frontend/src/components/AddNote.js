import React, { useState } from 'react';
import './AddNote.css'; // Importar estilos CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote, faPen } from '@fortawesome/free-solid-svg-icons';

const AddNote = () => {
  const [note, setNote] = useState({
    title: '',
    content: '',
    category: 'personal' // Valor inicial
  });

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Nota agregada:', data);
        alert('Nota agregada exitosamente');
        setNote({ title: '', content: '', category: 'personal' }); // Reiniciar formulario
      } else {
        console.error('Error al agregar la nota');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <FontAwesomeIcon icon={faStickyNote} className="icon" />
          Título:
        </label>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>
          <FontAwesomeIcon icon={faPen} className="icon" />
          Contenido:
        </label>
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Categoría:</label>
        <select name="category" value={note.category} onChange={handleChange}>
          <option value="personal">Personal</option>
          <option value="trabajo">Trabajo</option>
          <option value="estudio">Estudio</option>
          <option value="ideas">Ideas</option>
          <option value="proyecto">Proyecto</option>
        </select>
      </div>

      <button type="submit">Agregar Nota</button>
    </form>
  );
};

export default AddNote;
