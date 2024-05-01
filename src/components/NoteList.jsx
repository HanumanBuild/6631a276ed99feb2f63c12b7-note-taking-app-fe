import React from 'react';

function NoteList({ notes, handleDelete }) {
  return (
    <ul>
      {notes.map(note => (
        <li key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;