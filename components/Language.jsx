import { useRouter } from 'next/router'

import styles from './Language.module.scss'

export default function Language() {
    const router = useRouter()
    const { locale, locales } = router

    const langs = {
        'en': 'English',
        'pl': 'Polski',
        'ru': 'Русский',
        'ua': 'Українська',
    }

    return (
        <div className={styles.dropdown}>
            <button
                type="button"
                className={styles['dropdown-button']}>
                {langs[locale]}
            </button>
            <div className={styles['dropdown-content']}>
                {locales.map((localeItem, i) => {
                    return (
                        <LangLink href={localeItem} key={i}>
                            {langs[localeItem]}
                        </LangLink>
                    )
                })}
            </div>
        </div>
    )
}

const LangLink = ({ children, href }) => {
    const router = useRouter()
    const { asPath, pathname, query } = router

    const changeLocale = (locale) => {
        router.push({ pathname, query }, asPath, { locale })
    }

    const setCookie = (locale) => {
        document.cookie = `NEXT_LOCALE=${locale};`
    }

    return (
        <a
            href={pathname}
            onClick={(e) => {
                e.preventDefault()
                changeLocale(href)
                setCookie(href)
            }}>
            {children}
        </a>
    )
}