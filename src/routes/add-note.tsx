import { createFileRoute } from '@tanstack/react-router';

import { AddNote } from '@/AddNote';

export const Route = createFileRoute('/add-note')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <AddNote />
    </div>
  );
}
