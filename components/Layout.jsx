import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "./Navbar";
import styles from "./Layout.module.scss";
import animationStyles from "../styles/animation.module.scss";
import SlideAnimationContext from "../contexts/SlideAnimationContext";
import useSlideAnimation from "../hooks/useSlideAnimation";
import { ModifyEffect } from "./Effects";

export default function Layout({ children }) {
  const router = useRouter();
  const [layout, setLayout] = useState("");

  const slideAnimationState = useSlideAnimation(layout);
  const { isAnimationComplete, loadingRef, isLoading } = slideAnimationState;

  useEffect(() => {
    if (router.pathname.startsWith("/cases/")) {
      setLayout("cases");
    } else if (router.pathname === "/") {
      setLayout("index");
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="portfolio" />
        <meta name="og:title" content="portfolio" />
        <meta
          name="theme-color"
          content="#0e0e0e"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <SlideAnimationContext.Provider value={slideAnimationState}>
        {isLoading && (
          <div className={animationStyles["loading-container"]}>
            <div ref={loadingRef} className={animationStyles.loading} />
            <ModifyEffect from={`Загрузка`} to={`Loading`} speed={1000} />
          </div>
        )}

        <div className={styles["horizontal-container"]}>
          <header
            className={
              isAnimationComplete
                ? `${animationStyles.fadeIn} ${styles.header}`
                : `${animationStyles.fadeOut} ${styles.header}`
            }
          >
            <Navbar />
          </header>
          <main className={styles.cases}>{children}</main>
        </div>
      </SlideAnimationContext.Provider>
    </>
  );
}
