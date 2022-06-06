import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import langs from '../languages/portfolio.json'

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
      <Link href='/'>
        <a>To Index</a>
      </Link>
    </>
  )
}