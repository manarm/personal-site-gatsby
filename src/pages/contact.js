import React from "react"
import email from './email.png';

import Layout from "../components/Layout"

export default function Tech() {
  return (
    <Layout>
      <div className="contact-card">
        Send me an email at <img src={email} alt="my email is mitchell at manar em dot com"/>
      </div>
    </Layout>
  )
}
