import Link from "next/link";
import { useRouter } from "next/router";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <ul className={styles.item}>
          {router.pathname === "/cases/[id]" ? (
            <BackToIndex />
          ) : (
            <DefaultMenu />
          )}
        </ul>
      </div>
      <div className={styles.right}>
        <ul className={styles.items}>
          <LanguageSwitcher itemClass={styles.item} />
        </ul>
      </div>
    </nav>
  );
}

const DefaultMenu = () => {
  const router = useRouter();

  return (
    <>
      <li>
        <Link
          href="/"
          className={router.asPath === "/" ? styles.selected : null}
        >
          ./
        </Link>
      </li>
    </>
  );
};

const BackToIndex = () => {
  return (
    <li>
      <Link href="/">
        <svg
          className={styles.backArrow}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              className={styles.arrowPath}
              fill="white"
              d="M18 9V7H8a1 1 0 0 0-1 1v10h2v-7.59l14.29 14.3 1.41-1.41L10.41 9z"
            />
          </g>
        </svg>
        back
      </Link>
    </li>
  );
};
