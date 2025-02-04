import { useEffect } from 'react';

import { Note } from './Note';

export function NotesView() {
  useEffect(() => {
    console.log('NotesView mounted');

    return () => {
      console.log('NotesView unmounted');
    };
  });

  return (
    <div className="flex flex-wrap gap-2">
      <Note note={{ title: 'Sample note', contents: 'Sample contents' }} />
    </div>
  );
}
