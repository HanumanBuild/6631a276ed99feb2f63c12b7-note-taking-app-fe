import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const result = await axios.get(`${process.env.REACT_APP_NOTE_TAKING_APP_BE_URL}/api/notes`);
    setNotes(result.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_NOTE_TAKING_APP_BE_URL}/api/notes/${id}`);
    fetchNotes();
  };

  return (
    <div>
      <NoteForm fetchNotes={fetchNotes} />
      <NoteList notes={notes} handleDelete={handleDelete} />
    </div>
  );
}

export default App;