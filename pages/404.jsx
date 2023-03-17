import { GenerateEffect } from "../components/Effects"
import styles from "../styles/index.module.scss"

export default function Custom404() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>
                    <GenerateEffect string={`404 - Page Not Found :(`} speed={1500} />
                </h1>
            </div>
        </section>
    )
}