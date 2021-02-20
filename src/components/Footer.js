import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} Shaw Boxing. All rights reserved.
      </p>
        <p>
        <small>Built in the JAMStack with Gatsby, AirTable CMS and Netlify by <a href="https://danielcarlyle.carbonmade.com/" rel="noreferrer noopener" target="_blank">Daniel Carlyle</a>
        </small>
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  text-align: center;
  padding: 1rem;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
`
export default Footer
