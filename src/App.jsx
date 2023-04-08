import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  return <div>
    <Header></Header>
    <div className="">
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </div>
}

export default App
