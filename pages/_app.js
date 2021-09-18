import { ApolloProvider } from '@apollo/client'
import '../styles/globals.css'
import { CartProvider } from './public/Context.jsx'
import client from './public/Context.jsx/client'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
  </ApolloProvider>
  )}
export default MyApp
