import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*,*::before, *::after, h1, h2, h3, h4, h5, h6{
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
 *{
   cursor: crosshair;
 }

body{
   margin: 0;
   padding: 0;
   overflow-x: hidden;
   font-family: 'Source Sans Pro', sans-serif;
   ::-webkit-scrollbar {
   width: 20px;
}

  ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #1a2421; 
  border-radius: 10px;
  background-color: white;
}
 
  ::-webkit-scrollbar-thumb {
  background: black; 
  border-radius: 10px;
}

  ::-webkit-scrollbar-thumb:hover {
  background: #625264; 
}
}
`

export default GlobalStyle;