import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_NOTES } from './graphql';
import { Note as NoteView } from './Note';
import type { Note } from './types';

export function NotesView() {
  const { data, error } = useQuery<{ notes: Note[] }>(GET_NOTES, {
    variables: {
      page: 0,
    },
  });

  if (error) {
    console.error('Error loading notes:', error);
  }

  useEffect(() => {
    console.log('NotesView mounted');

    return () => {
      console.log('NotesView unmounted');
    };
  });

  return (
    <div className="flex flex-wrap gap-2">
      {data?.notes.map((note) => <NoteView key={note.id} note={note} />)}
    </div>
  );
}
