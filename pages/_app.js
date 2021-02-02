import 'styles/tailwind.css';
import { StateProvider } from 'context/stateProvider';

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default MyApp;
