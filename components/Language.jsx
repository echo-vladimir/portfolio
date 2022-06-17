import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Language.module.scss'

export default function Language() {
    const { locale, locales, asPath } = useRouter()

    return (
        <div>
            {locales.map((l, i) => {
                return (
                    <span key={i} className={l === locale ? styles.selected : ''}>
                        {' /'}
                        <Link href={asPath} locale={l} className={styles.language}>
                            {l}
                        </Link>
                    </span>
                );
            })}
        </div>
    )
}