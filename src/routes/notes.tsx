import { createFileRoute, Link } from '@tanstack/react-router';

import { NotesView } from '@/NotesView';

export const Route = createFileRoute('/notes')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <NotesView />
      <Link to="/add-note">Add Note</Link>
    </div>
  );
}
