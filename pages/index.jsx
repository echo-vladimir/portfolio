import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/index.module.scss'
import langs from '../store/languages/index.json'

export default function IndexPage() {
  const { locale } = useRouter()
  const lang = langs[locale]
  return (
    <>
      <Head>
        <title>{lang.title}</title>
      </Head>
      <h1>{lang.title}</h1>
      <h2>Hi there 👋, I&apos;m Vladimir</h2>
      <p>
        {lang.description}
      </p>
      <Link href='/portfolio'>
        <a>To portfolio</a>
      </Link>
    </>
  )
}