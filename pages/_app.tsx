import { AppProps } from 'next/app';
import { supabase } from '@/lib/supabase/client';
import React from 'react';
import { UserContextProvider } from '@/lib/UserContext';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main>
      <UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />
      </UserContextProvider>
    </main>
  );
};

export default App;
