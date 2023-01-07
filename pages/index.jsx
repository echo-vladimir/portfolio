import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { TypingEffect } from "../components/Effects"
import styles from "../styles/index.module.scss"

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>index</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.content}>
          <h2>
            Hello there, my name is Vladimir and I&rsquo;m
          </h2>
          <h1>
            Front-end Developer
          </h1>
          <h2>and</h2>
          <h1>
            UX/UI Designer
          </h1>
          <h3>
            ‹ UX · UI · Figma · JavaScript · React · Next · NodeJS ›
          </h3>
          <ul className={styles.menu}>
            <li className={styles.button}>
              <Link target="_blank" rel="noreferrer" href="https://github.com/echo-vladimir">
                <span className={styles["icon-github"]} />
                github
              </Link>
            </li>
            <li className={styles.button}>
              <Link target="_blank" rel="noreferrer" href="https://dribbble.com/echo-vladimir">
                <span className={styles["icon-dribbble"]} />
                dribbble
              </Link>
            </li>
            <li className={styles.button}>
              <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/echo-vladimir">
                <span className={styles["icon-linkedin"]} />
                linkedin
              </Link>
            </li>
          </ul>
          <p>
            <a href="mailto:echo.vladimir.k@gmail.com">
              echo.vladimir.k@gmail.com
            </a>
          </p>
          <TypingEffect string={`available for new projects`} speed={2500} />
        </div>
      </section>
    </>
  )
}