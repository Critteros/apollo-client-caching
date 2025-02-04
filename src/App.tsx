import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { AddNote } from './AddNote';
import { NotesView } from './NotesView';

function App() {
  return (
    <main className="container mx-auto h-screen">
      <AddNote />
      <Accordion type="single" collapsible>
        <AccordionItem value="notes">
          <AccordionTrigger>Notes</AccordionTrigger>
          <AccordionContent>
            <NotesView />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default App;
