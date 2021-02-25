import React from "react"
import "@fontsource/source-serif-pro" // Defaults to weight 400.
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  return (<>
  <Header />
  <div id="main-content" className="main-body">
    <div className="container">
      {children}
      <Footer />
    </div>
  </div>
  </>)
}
