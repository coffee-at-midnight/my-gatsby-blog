import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm a technical writer trying to figure out how to deal with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage