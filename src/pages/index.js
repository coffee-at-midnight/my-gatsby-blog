import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page">
      <p>This is not much, but it's better than nothing.</p>
      <StaticImage
        alt="Notebook with laptop and cup of coffee"
        src="../images/writing-image.jpg"
      />
      </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage