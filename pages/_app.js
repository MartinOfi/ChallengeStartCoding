import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import client from "../Apollo/client";
import {FavoritesProvider} from "../context/CharactersProvider";
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </ApolloProvider>
  );
}
export default MyApp;
