import 'styles/tailwind.css';
import { StateProvider } from 'context/stateProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

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
        <Component {...pageProps} />
      </StateProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
