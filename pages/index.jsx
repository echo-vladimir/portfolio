import { useState } from "react"
import Head from "next/head"
import Link from "next/link"

import Card from "../components/Card"
import CardHero from "../components/CardHero"
import { button, icoGithub, icoDribbble, icoLinkedin } from "../components/LinkButton.module.scss"
import styles from "../components/Card.module.scss"
import HorizontalScroll from "../components/HorizontalScroll"

import { getSortedCasesData } from "../lib/cases"

export async function getStaticProps() {
  const allCasesData = await getSortedCasesData()

  return {
    props: {
      allCasesData,
    },
  }
}

export default function Cases({ allCasesData }) {
  const [selected, setSelected] = useState([])

  const isItemSelected = (id) => !!selected.find((el) => el === id)

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    )
  }

  return (
    <>
      <Head>
        <title>My Cases</title>
      </Head>
      <HorizontalScroll>
        <CardHero />
        <div>
          <div className={styles["XS"]}>
            <Link target="_blank" rel="noreferrer" href="https://github.com/echo-vladimir" className={button}>
              <span className={icoGithub} />
              <p>Github</p>
            </Link>
          </div>
          <div className={styles["XS"]}>
            <Link target="_blank" rel="noreferrer" href="https://dribbble.com/echo-vladimir" className={button}>
              <span className={icoDribbble} />
              <p>Dribbble</p>
            </Link>
          </div>
          <div className={styles["XS"]}>
            <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/echo-vladimir" className={button}>
              <span className={icoLinkedin} />
              <p>LinkedIn</p>
            </Link>
          </div>
        </div>
        {
          allCasesData.map(item =>
            <Card
              itemId={item.id}
              key={item.id}
              onClick={handleClick(item.id)}
              selected={isItemSelected(item.id)}
              {...item}
            />
          )
        }
      </HorizontalScroll>
    </>
  )
}