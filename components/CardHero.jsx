import { TypingEffect } from "./Effects"

import styles from "./CardHero.module.scss"

export default function CardHero() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h2>
                        Hello there, my name is Volodymyr and I&rsquo;m
                    </h2>
                    <h1>
                        Front-end Developer
                    </h1>
                    <h2>and</h2>
                    <h1>
                        UX/UI Designer
                    </h1>
                    <h3>
                        ‹ UX · UI · Figma · TypeScript · JavaScript · React · Next · NodeJS ›
                    </h3>
                    <p className={styles.footer}>
                        <a href="mailto:echo.vladimir.k@gmail.com">
                            echo.vladimir.k@gmail.com
                        </a>
                    </p>
                    <p className={styles.footer}>
                        <TypingEffect string={`available for new projects`} speed={2500} />
                    </p>
                </div>
            </section>
        </>
    )
}