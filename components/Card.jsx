import Link from "next/link"
import Image from "next/image"
import Date from "./Date"

import styles from "./Card.module.scss"

export default function Card({ id, date, title, tags, cover, description, size }) {

    const truncate = (str, maxlength) =>
        (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str

    return (
        <section className={`${styles[size]}`}>
            <Link href={`/cases/${id}`}>
                <Image
                    src={cover}
                    alt={description}
                    fill
                    lazy="true"
                    placeholder="blur"
                    blurDataURL={`/_next/image?url=${cover}&w=16&q=1`}
                    quality={90}
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className={styles.description}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.date}>
                        <Date dateString={date} />
                    </div>
                    <div className={styles.tags}>
                        {
                            tags.map((tag) =>
                                <span key={tag}>
                                    {` [ ` + tag + ` ] `}
                                </span>
                            )
                        }
                    </div>
                    <p>{description}</p>
                </div>
            </Link>
        </section>
    )
}