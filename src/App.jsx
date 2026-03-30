import { Suspense, useState } from "react"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import GetStarted from "./components/GetStarted/GetStarted"
import NavBar from "./components/NavBar/NavBar"
import Pricing from "./components/Pricing/Pricing"
import Products from "./components/Products/Products"
import Status from "./components/Status/Status"
import CartProducts from "./components/CartProducts/CartProducts"
import Category from "./components/Category/Category"

function App() {

  const digiToolsPromise = fetch("/DigiTools.json").then(res => res.json());

  const [isActive, setIsActive] = useState({
    status: "product"
  })
  const [isClicked, setIsClicked] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [addToCart, setAddToCart] = useState([]);

  const handleBuyNow = (product) => {
    setIsClicked(pricing => [...pricing, product.id]);
    setCartCounter(cartCounter + 1);

    const isExist = addToCart.find(p => p.id === product.id);

    if (isExist) {
      alert("Plan Already in the Cart");
      return;
    }

    else {
      const newCartList = [...addToCart, product];
      alert("Plan Added to Cart");

      setAddToCart(newCartList);
    }
  }

  const handleCategory = (status) => {
    if (status === "product") {
      setIsActive({
        status: "product"
      })
    }
    else {
      setIsActive({
        status: "cart"
      })
    }
  }

  return (
    <>
      <div className="max-w-400 mx-auto">
        <NavBar cartCounter={cartCounter}></NavBar>
        <Banner></Banner>
        <Status></Status>
        <Category
          cartCounter={cartCounter}
          handleCategory={handleCategory}
          isActive={isActive}
        ></Category>

        {
          isActive.status === "product" ?
            <div>
              <Suspense
                fallback=
                {
                  <div className="flex justify-center items-center h-40">
                    <span className="loading loading-bars loading-lg"></span>
                  </div>
                }
              >
                <Products
                  digiToolsPromise={digiToolsPromise}
                  handleBuyNow={handleBuyNow}
                  isClicked={isClicked}
                  cartCounter={cartCounter}
                ></Products>
              </Suspense>
              <GetStarted></GetStarted>
              <Pricing></Pricing>
            </div>
            :
            <CartProducts
              addToCart={addToCart}
            ></CartProducts>
        }
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
