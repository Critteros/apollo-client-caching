import { Card, CardHeader } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import type { Note } from '@/types';

type NoteProps = {
  note: Note;
};

export function Note({ note }: NoteProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <Text className="text-lg font-semibold">{note.title}</Text>
      </CardHeader>
      <div className="p-4 text-gray-700" aria-labelledby="note-title">
        <Text>{note.contents}</Text>
      </div>
    </Card>
  );
}
