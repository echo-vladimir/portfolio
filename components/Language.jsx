import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './Language.module.scss'

export default function Language() {
    const router = useRouter()
    const { locale, locales, asPath, pathname, query } = router

    const changeLocale = (locale) => {
        router.push({ pathname, query }, asPath, { locale })
    }

    const setCookie = (locale) => {
        document.cookie = `NEXT_LOCALE=${locale};`
    }

    const langs = {
        'en': 'English',
        'pl': 'Polski',
        'ru': 'Русский',
        'ua': 'Українська',
    }

    return (
        <div className={styles.select}>
            <select
                className={styles.control}
                name='language'
                value={locale}
                onChange={(e) => {
                    e.preventDefault()
                    changeLocale(e.target.value)
                    setCookie(e.target.value)
                }}>
                {locales.map((localeItem, i) => {
                    return (
                        <option value={localeItem} key={i}>
                            {langs[localeItem]}
                        </option>
                    );
                })}
            </select>
            <span className={styles.focus}></span>
        </div>
    )
}