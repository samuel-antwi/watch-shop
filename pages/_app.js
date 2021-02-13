import 'styles/tailwind.css';
import 'aos/dist/aos.css';
import { StateProvider } from 'context/stateProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import SnackbarProvider from 'react-simple-snackbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <SnackbarProvider>
        <StateProvider>
          <Component {...pageProps} />
        </StateProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
