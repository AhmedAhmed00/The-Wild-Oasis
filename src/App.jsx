
import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import Button from "./ui/Button"
import Heading from "./ui/Heading"



const StyledApp = styled.main`
  background-color:orangered;
  padding: 20px;
`


function App() {

  return (
    <>
      <GlobalStyles />
      <StyledApp >
        <Button variation="danger">
          hello

        </Button>
        <Heading as="h1">
          hello
        </Heading>
        <Heading as="h2">
          hello
        </Heading>
        <Heading as="h3">
          hello
        </Heading>
        <Button>click me</Button>
      </StyledApp>
    </>

  )




}

export default App
