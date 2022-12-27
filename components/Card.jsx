import Link from "next/link"
import Image from "next/image"
import Date from "./Date"
import styles from "./Card.module.scss"

export default function Card({ id, date, title, team, tags, flag, cover, description, size }) {
    return (
        <section className={styles[size]}>
            <Link href={`/cases/${id}`}>
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
                <div className={styles.info}>
                    <div className={styles.center}>
                        <Date dateString={date} />
                        <h1 className={styles.title}>{title}</h1>
                        <p>{description}</p>
                    </div>
                    <div className={styles.tags}>
                        {
                            tags.map((tag) =>
                                <span key={tag}>
                                    {tag}
                                </span>
                            )
                        }
                    </div>
                    <div className={styles.end}>
                    </div>
                </div>
            </Link>
        </section>
    )
}