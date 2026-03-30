import { Suspense } from "react"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import GetStarted from "./components/GetStarted/GetStarted"
import NavBar from "./components/NavBar/NavBar"
import Pricing from "./components/Pricing/Pricing"
import Products from "./components/Products/Products"
import Status from "./components/Status/Status"

function App() {

  const digiToolsPromise = fetch("/DigiTools.json").then(res => res.json());

  return (
    <>
      <div className="max-w-400 mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
        <Status></Status>

        <Suspense fallback={
          <div className="flex justify-center items-center h-40">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        }>
          <Products digiToolsPromise={digiToolsPromise}></Products>
        </Suspense>

        <GetStarted></GetStarted>
        <Pricing></Pricing>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
