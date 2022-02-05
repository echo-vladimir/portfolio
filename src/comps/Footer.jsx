import React from "react"
import { Link } from "react-router-dom"

import "./Footer.css"

export default () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </footer>
    )
}