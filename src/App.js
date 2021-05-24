import { Container } from "@material-ui/core"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { Header } from "./components/Header/Header"
import { Navigation } from "./components/MainNav"
import { useRoutes } from "./routes"

function App() {

  const routes = useRoutes()

  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          {routes}
        </Container>
      </div>
      <Navigation />
    </BrowserRouter>
  )
}

export default App
