import Banner from "./components/Banner/Banner"
import NavBar from "./components/NavBar/NavBar"
import Status from "./components/Status/Status"

function App() {
  return (
    <>
      <div className="max-w-400 mx-auto">
        <NavBar></NavBar>
        <Banner></Banner>
        <Status></Status>
      </div>
    </>
  )
}

export default App
