import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"

import Header from "./comps/Header"
import Footer from "./comps/Footer"
import Message from "./comps/Message"

// import Loading from "./comps/Loading"

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/Home")), 1000)
  })
})
const Portfolio = React.lazy(() => import("./pages/Portfolio"))
const About = React.lazy(() => import("./pages/About"))
const Blog = React.lazy(() => import("./pages/Blog"))

export default function App() {
  return (
    <div className="screen">
      <Suspense fallback={<p>loading...</p>}>
      <Header/>
      <Message />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/hello-portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      <Footer />
      </Suspense>
    </div>
  )
}