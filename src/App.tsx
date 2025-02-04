import { ApolloProvider } from '@apollo/client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { AddNote } from './AddNote';
import { client } from './client';
import { NotesView } from './NotesView';

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
