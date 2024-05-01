import React, { useState } from 'react';
import axios from 'axios';

function NoteForm({ fetchNotes }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_NOTE_TAKING_APP_BE_URL}/api/notes`, { title, content });
    fetchNotes();
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;