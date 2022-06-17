import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Language from '../components/Language'

import styles from './Layout.module.scss'
import utilStyles from '../styles/utils.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Vladimir K.'
          content='My cool multi-language next.js portfolio with SASS and sass-modules'
        />
      </Head>
      <header className={styles.header}>
        <Language />
      </header>
      <main className={(children.type.name === 'PortfolioPage') ?
        styles['porfolio'] :
        styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <a href='echo.vladimir.k@gmail.com'>
          echo.vladimir.k@gmail.com
        </a>
      </footer>
    </div>
  )
}