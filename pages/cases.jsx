import Head from "next/head"
import HorizontalScroll from "../components/HorizontalScroll"
import Card from "../components/Card"

import { getSortedCasesData } from "../lib/cases"

export async function getStaticProps() {
  const allCasesData = await getSortedCasesData()

  return {
    props: {
      allCasesData,
    },
  }
}

export default function CasesPage({ allCasesData }) {
  return (
    <>
      <Head>
        <title>Cases</title>
      </Head>
      <HorizontalScroll>
        {
          allCasesData.map((oneCase, i) =>
            <Card key={i} {...oneCase} />
          )
        }
      </HorizontalScroll>
    </>
  )
}