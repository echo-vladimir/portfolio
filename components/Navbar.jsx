import Link from 'next/link'
import { useRouter } from 'next/router'

import Language from './Language'
import styles from './Navbar.module.scss'

export default function Navbar() {
    const currentRoute = useRouter().pathname

    return (
        <nav className={styles.navbar}>
            <ul className={styles.menu}>
                <li className={styles.url}>
                    <Link href='/'>
                        <a className={currentRoute === "/" ? styles.selected : ''}>
                            Index
                        </a>
                    </Link>
                </li>
                <li className={styles.url}>
                    <Link href='/about'>
                        <a className={currentRoute === "/about" ? styles.selected : ''}>
                            About
                        </a>
                    </Link>
                </li>
                <li className={styles.url}>
                    <Link href='/portfolio'>
                        <a className={currentRoute === "/portfolio" ? styles.selected : ''}>
                            Portfolio
                        </a>
                    </Link>
                </li>
                <li className={styles.url}>
                    <Language />
                </li>
            </ul>
        </nav>
    )
}