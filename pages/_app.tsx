import { AppProps } from 'next/app'
import '../assets/styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp