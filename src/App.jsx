import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import GetStarted from "./components/GetStarted/GetStarted"
import NavBar from "./components/NavBar/NavBar"
import Status from "./components/Status/Status"

function App() {
  return (
    <>
      <div className="max-w-400 mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
        <Status></Status>
        <GetStarted></GetStarted>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
