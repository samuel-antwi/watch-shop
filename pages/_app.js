import 'styles/tailwind.css';
import { StateProvider } from 'context/stateProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import SnackbarProvider from 'react-simple-snackbar';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={client}>
      <StateProvider>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </StateProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
