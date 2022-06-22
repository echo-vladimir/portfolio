import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Scroll from '../components/Scroll'

import styles from '../styles/activity.module.scss'

import data from '../store/pages/activity.json'
import langs from '../store/ui/activity.json'

export default function ActivityPage() {
  const { locale, locales, asPath } = useRouter()
  const lang = langs[locale]

  return (
    <>
      <Head>
        <title>{lang.title}</title>
      </Head>
      <Scroll className={styles.showcase}>
        {
          data.entries.map((card, i) => {
            return (
              <article key={i} className={styles[card.size]}>
                <h2>{card.name}</h2>
                <p>{card.desc_ru}</p>
                <a href='./test'>Test link</a>
              </article>
            )
          })
        }
      </Scroll>
    </>
  )
}