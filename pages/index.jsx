import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Card from "../components/Card";
import CardHero from "../components/CardHero";
import HorizontalScroll from "../components/HorizontalScroll";
import { getSortedCasesData } from "../lib/cases";

export async function getStaticProps() {
  const allCasesData = await getSortedCasesData();

  return {
    props: {
      allCasesData,
    },
  };
}

export default function Cases({ allCasesData }) {
  const [selected, setSelected] = useState([]);
  const containerRef = useRef();

  const [containerWidth, setContainerWidth] = useState(0);
  const itemWidth = containerWidth * 0.6;
  const itemMargin = `${(containerWidth - itemWidth) / 2}px`;

  useEffect(() => {
    if (containerRef.current && !containerWidth) {
      setContainerWidth(containerRef.current.clientWidth);
    }
  }, [containerRef, containerWidth]);

  const isItemSelected = (id) => selected.includes(id);

  const handleClick = (id) => () => {
    setSelected((currentSelected) =>
      isItemSelected(id)
        ? currentSelected.filter((el) => el !== id)
        : [...currentSelected, id]
    );
  };

  return (
    <>
      <Head>
        <title>Cases | Volodymyr</title>
      </Head>
      <div ref={containerRef}>
        <HorizontalScroll allCasesData={allCasesData}>
          <CardHero
            itemId="hero"
            width={itemWidth + "px"}
            margin={itemMargin}
          />
          {allCasesData.map((item) => (
            <Card
              key={item.id}
              itemId={item.id}
              onClick={handleClick(item.id)}
              selected={isItemSelected(item.id)}
              width={itemWidth + "px"}
              margin={itemMargin}
              {...item}
            />
          ))}
        </HorizontalScroll>
      </div>
    </>
  );
}
