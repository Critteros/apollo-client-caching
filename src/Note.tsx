import { useMutation } from '@apollo/client';
import { Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardHeader } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import type { Note } from '@/types';

import { DELETE_NOTE, GET_NOTES } from './graphql';

type NoteProps = {
  note: Note;
};

export function Note({ note }: NoteProps) {
  const [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [GET_NOTES],
  });

  const onDelete = () => {
    deleteNote({
      variables: {
        id: note.id,
      },
    });
  };

  return (
    <Card className="relative w-full max-w-md">
      <Button
        size="icon"
        variant="destructive"
        className="absolute right-2 top-2"
        onClick={onDelete}
      >
        <Trash size={16} />
      </Button>
      <CardHeader>
        <Text className="text-lg font-semibold">{note.title}</Text>
      </CardHeader>
      <div className="p-4 text-gray-700" aria-labelledby="note-title">
        <Text>{note.contents}</Text>
      </div>
    </Card>
  );
}
