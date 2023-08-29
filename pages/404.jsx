import { useContext } from "react";
import Head from "next/head";
import { GenerateEffect } from "../components/Effects";
import SlideAnimationContext from "../contexts/SlideAnimationContext";
import styles from "../styles/404.module.scss";
import { ISPROD, BASEPATH } from "../config/const";

export default function Custom404() {
  const { currentContentRef } = useContext(SlideAnimationContext);

  return (
    <>
      <Head>
        <title>Meow 404</title>
      </Head>
      <section className={styles.container} ref={currentContentRef}>
        <div className={styles.content}>
          <h1>
            <GenerateEffect string={`Meow 404 NOTHING HERE`} speed={2500} />
          </h1>
          <img alt="qr code" src={`${ISPROD ? BASEPATH : ""}/images/qr.png`} />
        </div>
      </section>
    </>
  );
}
