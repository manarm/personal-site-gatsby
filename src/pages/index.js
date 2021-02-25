import React from "react";
import Layout from "../components/Layout";
import headshot from './headshot.jpg';

export default function Home() {
  return (
    <Layout>
      <div className="about-card flex-wrap flex-md-nowrap justify-content-center">
        <img className="headshot mb-2" height="200px" width="200px" src={headshot} alt="portrait of mitchell" />
        <div>
          <p><strong>Mitchell</strong> (he/him/his) is a frontend developer and performing artist based in Chicago, IL. Check out some recent projects, or get in touch.</p>
          <p><strong>keywords:</strong></p>
          <p>
            tech: frontend &mdash; react &mdash; redux &mdash; graphQL &mdash; node 
          </p>
          <p>
            art: community &mdash; devised &mdash; movement &mdash; access &mdash; joy
          </p>
        </div>
      </div>
    </Layout>
  )
}
