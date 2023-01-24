import GlobalStyles from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
