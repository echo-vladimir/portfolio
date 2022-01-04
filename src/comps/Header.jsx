import React from "react"
import { Link } from "react-router-dom"

export default () => {
    return (
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
        }}>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/portfolio">Portfolio</Link> |{" "}
            <Link to="/blog">Blog</Link>
        </nav>
    )
}