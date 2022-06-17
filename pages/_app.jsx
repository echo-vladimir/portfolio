import '../styles/globals.scss'
import variables from '../styles/variables.module.scss'

import Layout from '../components/Layout'

function App({ Component, pageProps }) {
  return (
    <Layout color={variables.primaryColor}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App