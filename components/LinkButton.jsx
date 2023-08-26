import Link from "next/link";

import styles from "./LinkButton.module.scss";

export default function LinkButton() {
  return (
    <section className={styles.container}>
      <li className={styles.button}>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com/echo-vladimir"
        >
          <span className={styles["icon-github"]} />
          github
        </Link>
      </li>
      <li className={styles.button}>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://dribbble.com/echo-vladimir"
        >
          <span className={styles["icon-dribbble"]} />
          dribbble
        </Link>
      </li>
      <li className={styles.button}>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/echo-vladimir"
        >
          <span className={styles["icon-linkedin"]} />
          linkedin
        </Link>
      </li>
    </section>
  );
}
