import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to the new Firebug site. Here is our first video.</p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/wZaFOfoCxjY?rel=0"
      allowFullScreen="allowfullscreen"
      frameBorder="0"
      allow="autoplay; encrypted-media"
    />
    <p>
      Follow us on Twitter{' '}
      <a href="https://twitter.com/firebugfam" target="_blank">
        @FireBugFam
      </a>
    </p>
    <p>Now go build something great, with Firebase!</p>
  </div>
)

export default IndexPage
