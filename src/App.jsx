import React from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"

import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import Blog from "./pages/Blog"

import Header from "./comps/Header"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/portfolio/hello-portfolio" element={<Portfolio />} /> */}
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}