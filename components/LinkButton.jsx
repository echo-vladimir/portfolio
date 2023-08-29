import Link from "next/link";
import { ISPROD } from "../config/const";
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
          <span
            className={
              ISPROD ? styles["icoGithub-prod"] : styles["icoGithub-dev"]
            }
          />
          github
        </Link>
      </li>
      <li className={styles.button}>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://dribbble.com/echo-vladimir"
        >
          <span
            className={
              ISPROD ? styles["icoDribbble-prod"] : styles["icoDribbble-dev"]
            }
          />
          dribbble
        </Link>
      </li>
      <li className={styles.button}>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/echo-vladimir"
        >
          <span
            className={
              ISPROD ? styles["icoLinkedin-prod"] : styles["icoLinkedin-dev"]
            }
          />
          linkedin
        </Link>
      </li>
    </section>
  );
}
