import React from "react";
import Layout from "../components/Layout";
import headshot from './headshot.jpg';

export default function Home() {
  return (
    <Layout>
      <div className="about-card">
        <img className="headshot" height="200px" width="200px" src={headshot} alt="portrait of mitchell" />
        Hello world!
      </div>
    </Layout>
  )
}
