import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import { globalStore, persistor } from '../static/redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import '../styles/globals.css'
import '../styles/style.css'
import '../styles/style2.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "gridjs/dist/theme/mermaid.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous" />

      <Provider store={globalStore}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
