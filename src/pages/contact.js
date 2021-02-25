import React from "react"
import email from './email.png';

import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="contact-card">
        <p>Send me an email at <img src={email} alt="my email is mitchell at manar em dot com"/></p>
        <p>Response latency approx. 48 hours.</p>
      </div>
    </Layout>
  )
}
