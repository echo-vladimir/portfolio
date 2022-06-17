import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import langs from '../store/languages/portfolio.json'

export default function PortfolioPage() {
  const { locale, locales, asPath } = useRouter()
  const lang = langs[locale]
  return (
    <>
      <Head>
        <title>{lang.title}</title>
      </Head>
      <h1>{lang.title}</h1>
      <p>
        {lang.description}
      </p>
      <Link href='/'>
        <a>To Index</a>
      </Link>
    </>
  )
}