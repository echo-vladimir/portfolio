import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

import langs from '../languages/index.json'

export default function IndexPage() {
  const { locale, locales, asPath } = useRouter()
  const lang = langs[locale]
  return (
    <>
      <Head>
        <title>{lang.title}</title>
      </Head>
      <h2>{lang.title}</h2>
      <p>
        {lang.description}
      </p>
      <Link href='/portfolio'>
        <a>To portfolio</a>
      </Link>
      {locales.map((l, i) => {
        return (
          <span key={i} className={l === locale ? styles.selected : ""}>
            <br/>
            <Link href={asPath} locale={l}>
              {l}
            </Link>
          </span>
        );
      })}
    </>
  )
}