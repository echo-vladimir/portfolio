import dynamic from 'next/dynamic'

import '../styles/globals.scss'
import styles from '../styles/utils.module.scss'

const Layout = dynamic(() =>
  import('../components/Layout'), {
  loading: () => <p className={styles.preloader}>Loading...</p>,
  ssr: false
})

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App