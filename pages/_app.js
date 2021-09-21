import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import "../styles/global.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import client from "../Apollo/client";
import { FavoritesProvider } from "../context/FavoritesProvider";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <FavoritesProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </FavoritesProvider>
    </ApolloProvider>
  );
}
export default MyApp;
