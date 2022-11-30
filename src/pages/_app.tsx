import '@/public/font/icons.css';
import '@/styles/globals.css';
import { AppPropsWithLayout } from '@/types';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
