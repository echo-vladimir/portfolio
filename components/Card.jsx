import { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import Link from "next/link";
import Image from "next/image";
import Date from "./Date";
import styles from "./Card.module.scss";
import useDeviceType from "../hooks/useDeviceType";

export default function Card({
  id,
  date,
  title,
  team,
  tags,
  country,
  cover,
  description,
  size,
  margin,
  width,
}) {
  const device = useDeviceType();
  const visibility = useContext(VisibilityContext);

  return (
    <section
      className={`${visibility && styles.visible} ${styles[size]}`}
      style={{
        display: "inline-block",
        userSelect: "none",
        width,
        marginLeft: margin,
        marginRight: margin,
      }}
      tabIndex={0}
    >
      <Link href="/cases/[id]" as={`/cases/${id}`}>
        <div className={styles["img-wrapper"]}>
          <Image
            src={cover}
            alt={description}
            fill
            lazy="true"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${cover}&w=16&q=1`}
            quality={90}
            sizes="100vw, 100vh"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
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
                src={`/images/${country}.webp`}
                alt={`The flag of the country for ${title}`}
                height={18}
                width={18}
              />
              {team && device !== "mobile" ? (
                <p>
                  {" "}
                  Made with <span className={styles.highlight}>
                    {team}
                  </span>{" "}
                  team
                </p>
              ) : (
                <p>{country}</p>
              )}
            </div>
          )}
        </div>
        <div className={styles["overlay-container"]}>
          <div className={styles.main}>
            <Date dateString={date} />
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}
