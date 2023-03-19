import { useContext } from "react"
import { VisibilityContext } from "react-horizontal-scrolling-menu"
import Link from "next/link"
import Image from "next/image"
import Date from "./Date"

import styles from "./Card.module.scss"

export default function Card({
    onClick, selected, itemId, id, date, title,
    team, tags, flag, cover, description, size
}) {
    const visibility = useContext(VisibilityContext)

    return (
        <section className={styles[size]}>
            <Link
                href={`/cases/${id}`}
                onClick={() => onClick(visibility)}
                tabIndex={0}>
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
                <div className={styles["overlay-container"]}>
                    <div className={styles.tags}>
                        {
                            tags.map((tag) =>
                                <span key={tag}>
                                    {tag}
                                </span>
                            )
                        }
                    </div>
                    <div className={styles.main}>
                        <Date dateString={date} />
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {/* <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
                        <div>selected: {JSON.stringify(!!selected)}</div> */}
                    </div>
                    {
                        (flag) &&
                        <div className={styles.footer}>
                            <p className={styles.highlight}>Worked in </p>
                            <Image
                                className={styles.flag}
                                src={`/images/${flag}.webp`}
                                alt={"poland flag"}
                                height={18}
                                width={18}
                            />
                            {(team) && <p> with <span className={styles.highlight}>{team}</span> team</p>}
                        </div>
                    }
                </div>
            </Link>
        </section>
    )
}