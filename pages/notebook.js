import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getNotesByNotebook } from '../supabase';

export default function Notebook() {
  const [notes, setNotes] = useState([]);
  const router = useRouter();
  const notebookId = router.query.id;

  useEffect(() => {
    const listNotes = async () => {
      const data = await getNotesByNotebook(notebookId);
      setNotes(data);
    };

    listNotes();
  }, [notebookId]);

  console.log(notes);

  return (
    <ul>
      {notes.map(({ title, content, id }) => {
        return (
          <li key={id}>
            {title}, {content}
          </li>
        );
      })}
    </ul>
  );
}
