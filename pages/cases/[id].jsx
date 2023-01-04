import Head from "next/head"
import Image from "next/image"
import Date from "../../components/Date"
import styles from "../../styles/cases.module.scss"

import { getAllCasesIds, getCaseData } from "../../lib/cases"

export async function getStaticPaths() {
    const paths = getAllCasesIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const caseData = await getCaseData(params.id)
    return {
        props: {
            caseData,
        },
    }
}

export default function Case({ caseData: { title, date, flag, team, description, contentHtml } }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <article className={styles.case}>
                {
                    (team) ?
                        <div className={styles.team}>
                            <Image
                                className={styles.flag}
                                src={`/images/${flag}.webp`}
                                alt={"poland flag"}
                                height={18}
                                width={18}
                                style={{
                                    objectFit: 'none',
                                }}
                            />
                            {(team) ? <p>Made with <span className={styles.highlight}>{team}</span> team</p> : <></>}
                        </div>
                        : <></>
                }
                <div className={styles.meta}>
                    <h1>{title}</h1>
                    <Date dateString={date} />
                    <p>{description}</p>
                </div>
                <div
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                    className={styles.content} />
                <p>
                    <a href="mailto:echo.vladimir.k@gmail.com">
                        echo.vladimir.k@gmail.com
                    </a>
                </p>
            </article>
        </>
    )
}