import GlobalStyles from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <QueryClientProvider client={new QueryClient()}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
