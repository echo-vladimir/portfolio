import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import useDeviceType from "../hooks/useDeviceType";
import styles from "./CardHero.module.scss";
import CardStyles from "../components/Card.module.scss";
import LinkStyles from "../components/LinkButton.module.scss";
import { ISPROD } from "../config/const";
import { TypingEffect } from "./Effects";

export default function CardHero({ width, margin }) {
  const deviceType = useDeviceType();

  const icoGithub = ISPROD
    ? LinkStyles["icoGithub-prod"]
    : LinkStyles["icoGithub-dev"];
  const icoDribbble = ISPROD
    ? LinkStyles["icoDribbble-prod"]
    : LinkStyles["icoDribbble-dev"];
  const icoLinkedin = ISPROD
    ? LinkStyles["icoLinkedin-prod"]
    : LinkStyles["icoLinkedin-dev"];

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        userSelect: "none",
        width,
        marginLeft: margin,
        marginRight: margin,
      }}
    >
      <section className={styles.container}>
        <div className={styles.content}>
          {deviceType === "mobile" && (
            <p>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/echo-vladimir"
              >
                <span
                  className={icoGithub}
                  style={{
                    width: "17px",
                    height: "17px",
                  }}
                />
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://dribbble.com/echo-vladimir"
              >
                <span
                  className={icoDribbble}
                  style={{ width: "18px", height: "18px", marginLeft: "18px" }}
                />
              </Link>{" "}
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/echo-vladimir"
              >
                <span
                  className={icoLinkedin}
                  style={{ width: "18px", height: "18px", marginLeft: "18px" }}
                />
              </Link>
            </p>
          )}
          <h2>Hello there, my name is ‹Volodymyr /› and I&rsquo;m</h2>
          <h1>Front-end Developer</h1>
          <h3>&</h3>
          <h1>UX/UI Designer</h1>
          <h3>UX · UI · Figma · TypeScript · JS · NodeJS · Next · React</h3>
          <p className={styles.footer}>
            <a href="mailto:echo.vladimir.k@gmail.com">
              echo.vladimir.k@gmail.com
            </a>
          </p>
          <div className={styles.footer}>
            {isClient ? (
              <TypingEffect
                string={`available for new projects`}
                speed={5500}
              />
            ) : (
              " "
            )}
          </div>
        </div>
      </section>
      {deviceType === "desktop" && (
        <div>
          <div className={CardStyles["XS"]}>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://github.com/echo-vladimir"
              className={LinkStyles.button}
            >
              <span className={icoGithub} />
              <p>Github</p>
            </Link>
          </div>
          <div className={CardStyles["XS"]}>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/echo-vladimir"
              className={LinkStyles.button}
            >
              <span className={icoDribbble} />
              <p>Dribbble</p>
            </Link>
          </div>
          <div className={CardStyles["XS"]}>
            <Link
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/echo-vladimir"
              className={LinkStyles.button}
            >
              <span className={icoLinkedin} />
              <p>LinkedIn</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
