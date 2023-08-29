import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Date from "../../components/Date";
import ScrollCase from "../../components/ScrollCase";
import {
  getAllCasesIds,
  getCaseData,
  getSortedCasesData,
} from "../../lib/cases";
import useDeviceType from "../../hooks/useDeviceType";
import useHtmlParser from "../../hooks/useHtmlParser";
import styles from "../../styles/cases.module.scss";
import { useRouter } from "next/router";
import { ISPROD, BASEPATH } from "../../config/const";

export async function getStaticPaths() {
  const paths = getAllCasesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(props) {
  const allCasesData = await getSortedCasesData();
  const caseData = await getCaseData(props.params.id, allCasesData);

  return {
    props: {
      caseData,
    },
  };
}

export default function Case({ caseData }) {
  const router = useRouter();
  const device = useDeviceType();
  const {
    prevCase,
    nextCase,
    cover,
    title,
    date,
    country,
    team,
    tags,
    description,
    contentHtml,
    currentNum,
    totalCases,
  } = caseData;

  const blocks = useHtmlParser(contentHtml);
  const containerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);
  const [isSafari, setIsSafari] = useState(false);

  const itemWidth = containerWidth * 0.7;
  const itemMargin = `${(containerWidth - itemWidth) / 2}px`;

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    setIsSafari(/Safari/.test(window.navigator.userAgent));

    function handleResize() {
      if (device !== "desktop") {
        router.reload();
      }
    }
    window.addEventListener("resize", handleResize);

    if (containerRef.current && !containerWidth) {
      setContainerWidth(containerRef.current.clientWidth);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef, containerWidth, device, router]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className={styles.content} ref={containerRef}>
        <ScrollCase
          prevCase={prevCase}
          nextCase={nextCase}
          currentNum={currentNum}
          totalCases={totalCases}
        >
          <section
            className={styles.full}
            tabIndex={0}
            style={
              device !== "desktop"
                ? {
                    width: itemWidth,
                    marginLeft: itemMargin,
                    marginRight: itemMargin,
                  }
                : {}
            }
          >
            {!isSafari && (
              <div className={styles["img-wrapper"]}>
                <Image
                  src={cover}
                  alt={description}
                  fill
                  lazy="true"
                  quality={10}
                  sizes="100vw, 100vh"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
            <div className={styles["centred-container"]}>
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {country && (
                <div className={styles.footer}>
                  <Image
                    className={styles.country}
                    src={`${ISPROD ? BASEPATH : ""}/images/${country}.webp`}
                    alt={"Country flag"}
                    height={18}
                    width={18}
                  />
                  {team && device !== "mobile" ? (
                    <div className={styles.team}>
                      With<span className={styles.highlight}>{team}</span>
                      team
                    </div>
                  ) : (
                    <div className={styles.team}>{country}</div>
                  )}
                </div>
              )}
            </div>
            <div className={styles["overlay-container"]}>
              <div className={styles.main}>
                <Date dateString={date} />
                <h1>{title}</h1>
                {description}
              </div>
            </div>
          </section>
          {blocks.map((block, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: block }}
              style={
                device !== "desktop"
                  ? {
                      width: itemWidth,
                      marginLeft: itemMargin,
                      marginRight: itemMargin,
                    }
                  : {}
              }
            />
          ))}
        </ScrollCase>
      </div>
    </>
  );
}
