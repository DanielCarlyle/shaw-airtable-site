import React from 'react';
import { wrapRootElement as wrap } from "./root-wrapper";

export const wrapRootElement = wrap


/*
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}


const GlobalStyle = createGlobalStyle`
h2{
  color: red;
  font-size: 3rem;
}
`
export const wrapRootElement = ({ element }) => {
  return (
    <>
  <GlobalStyle/>
  {element}
  </>
  )
}

*/
//Provider - Context API
