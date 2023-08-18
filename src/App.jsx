
import "./app.css"
import { AppHeader } from "./components/appHeader/appHeader"
import Menu from "./components/menu/Menu"
import { ChakraProvider } from '@chakra-ui/react'


function App() {

  return (
    <main>
      <ChakraProvider>
        <Menu></Menu>
      </ChakraProvider>
    </main>
     
  )
  } 
  export default App
