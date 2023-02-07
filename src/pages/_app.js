import GlobalStyles from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import { Lato } from "@next/font/google";
import { ThemeProvider } from "styled-components";
import { THEME } from "@/styles/styleConstants";
import { ProvideAuth } from "@/hooks/use-auth";
import { Analytics } from "@vercel/analytics/react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <GlobalStyles />
      <ThemeProvider theme={THEME}>
        <ProvideAuth>
          {getLayout(
            <main className={lato.className}>
              <Component {...pageProps} />
              <Analytics />
            </main>
          )}
          {/* // <main className={lato.className}>
          //   <Component {...pageProps} />
          // </main> */}
        </ProvideAuth>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
