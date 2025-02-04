import { ApolloProvider } from '@apollo/client';
import { createRootRoute, Outlet } from '@tanstack/react-router';

import { client } from '@/client';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <ApolloProvider client={client}>
        <main className="container mx-auto h-screen">
          <Outlet />
        </main>
      </ApolloProvider>
    </>
  );
}
