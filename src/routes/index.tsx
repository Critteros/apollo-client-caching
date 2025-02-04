import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col space-y-4">
      <Link to="/notes">Notes</Link>
      <Link to="/add-note">Add Note</Link>
    </div>
  );
}
