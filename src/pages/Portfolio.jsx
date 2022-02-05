import React from "react"
import "./Portfolio.css"

import Scroll from "../comps/Scroll"
import Portfolio from "../data/Portfolio.json"

export default () => {
    return (
        <main>
            <h1 className="content">Portfolio</h1>
            <div className="cont">
                <Scroll _class="cards">
                    {
                        Portfolio.entries.map((card, i) => {
                            return (
                                <article key={i} className="card">
                                    <h2>{card.name}</h2>
                                    <p>{card.desc_ru}</p>
                                    <a href="./test">Test link</a>
                                </article>
                            )
                        })
                    }
                </Scroll>
            </div>
        </main>
    )
}