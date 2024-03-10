import React from "react";
import Header from "./Componentes/Header/header.jsx"
import Main from "./Componentes/Main/main.jsx"
import Footer from "./Componentes/Footer/footer.jsx"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`

function App() {
  return(
    <>
    <GlobalStyle />
   <Header/>
   <Main/>
   <Footer/>
    </>
  )
}
export default App