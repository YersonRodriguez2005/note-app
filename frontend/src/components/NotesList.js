import React, { useState, useEffect } from 'react';
import './NotesList.css'

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [editContent, setEditContent] = useState({ title: '', content: '', category: 'personal' });

  // Obtener notas del backend al cargar el componente
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('http://localhost:5000/notes');
        if (response.ok) {
          const data = await response.json();
          setNotes(data);
        } else {
          console.error('Error al obtener las notas');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchNotes();
  }, []);

  // Eliminar una nota
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/notes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNotes(notes.filter(note => note.id !== id)); // Actualizar la lista de notas
        alert('Nota eliminada exitosamente');
      } else {
        console.error('Error al eliminar la nota');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  // Preparar la nota para ser editada
  const handleEdit = (note) => {
    setEditingNote(note.id);
    setEditContent({ title: note.title, content: note.content, category: note.category });
  };

  // Guardar los cambios de la nota editada
  const handleSaveEdit = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editContent),
      });

      if (response.ok) {
        const updatedNotes = notes.map(note =>
          note.id === id ? { ...note, ...editContent } : note
        );
        setNotes(updatedNotes);
        setEditingNote(null); // Dejar de editar
        alert('Nota actualizada exitosamente');
      } else {
        console.error('Error al actualizar la nota');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  // Manejar cambios en el formulario de edición
  const handleChange = (e) => {
    setEditContent({
      ...editContent,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="notes-list">
      <h2>Lista de Notas</h2>
      {notes.length > 0 ? (
        <div className="notes-container">
          {notes.map(note => (
            <div key={note.id} className="note-item">
              {editingNote === note.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="title"
                    value={editContent.title}
                    onChange={handleChange}
                  />
                  <textarea
                    name="content"
                    value={editContent.content}
                    onChange={handleChange}
                  />
                  <select
                    name="category"
                    value={editContent.category}
                    onChange={handleChange}
                  >
                    <option value="personal">Personal</option>
                    <option value="trabajo">Trabajo</option>
                    <option value="estudio">Estudio</option>
                    <option value="ideas">Ideas</option>
                    <option value="proyecto">Proyecto</option>
                  </select>
                  <div className="edit-actions">
                    <button className="btn btn-save" onClick={() => handleSaveEdit(note.id)}>Guardar</button>
                    <button className="btn btn-cancel" onClick={() => setEditingNote(null)}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <>
                  <h3>{note.title}</h3>
                  <span className="note-category">{note.category}</span>
                  <p className="note-content">{note.content}</p>
                  <p className="note-date">Creada: {new Date(note.created_at).toLocaleString()}</p>
                  <div className="note-actions">
                    <button className="btn btn-edit" onClick={() => handleEdit(note)}>Editar</button>
                    <button className="btn btn-delete" onClick={() => handleDelete(note.id)}>Eliminar</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="no-notes">No hay notas disponibles.</p>
      )}
    </div>
  );
};

export default NotesList;
