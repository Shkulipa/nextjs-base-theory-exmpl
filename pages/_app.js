import { useEffect } from 'react/cjs/react.production.min'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} values={{ test: 1 }}/>
}

export default MyApp
