import Link from "next/link"
import { useRouter } from "next/router"
import LanguageSwitcher from "./LanguageSwitcher"
import { navbar, items, item } from "./Navbar.module.scss"
import { selected, unselected } from "../styles/utils.module.scss"

export default function Navbar() {
    const currentRoute = useRouter().pathname

    return (
        <nav className={navbar}>
            <ul className={items}>
                <li className={item}>
                    <Link href="/" className={currentRoute === "/" ? selected : unselected}>
                        /
                    </Link>
                </li>
                <li className={item}>
                    <Link href="/cases" className={currentRoute === "/cases" ? selected : unselected}>
                        cases
                    </Link>
                </li>
                <li className={item}>
                    <Link href="/contact" className={currentRoute === "/contact" ? selected : unselected}>
                        contact
                    </Link>
                </li>
                <li className={item}>
                    <LanguageSwitcher />
                </li>
            </ul>
        </nav>
    )
}