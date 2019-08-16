import React from 'react'

import { Header, Container } from 'semantic-ui-react'

const About = () => {
  return (
    <section className="about">
      <div className="about-overlay">
        <Header as="h2">
          <Container>
            About Us
          </Container>
        </Header>
        <Container>
          <div className="about-content">
            <Header as="h3">Our Vision</Header>
            <p>
              The world is changing fast with digital at the forefront. ACQUIO Recruitment understands the value of a strong base in order to allow digital start ups to branch. We are here to help scale your team efficiently and cost effectively. We believe communication is key and we will always be transparent in our services to keep you in control in the backseat!
            </p>
            <Header as="h3">What We Believe</Header>
            <p>
              To acquire exceptional people for talented companies. We care about providing an open and honest relationship between the client and ourselves to deliver successful talent.
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default About
