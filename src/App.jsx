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
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const digiToolsPromise = fetch("/DigiTools.json").then(res => res.json());

  const [isActive, setIsActive] = useState({
    status: "product"
  });
  const [btnClicked, setBtnClicked] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [addToCart, setAddToCart] = useState([]);

  // total cart calculation
  const totalCart = addToCart.reduce((acc, current) => acc + current.price, 0);

  // add to cart and cart counter
  const handleBuyNow = (product) => {
    const isExist = addToCart.find(p => p.id === product.id);

    if (isExist) {
      toast.error("Plan Already in the Cart");
      return;
    }

    else {
      const newCartList = [...addToCart, product];
      toast.success("Plan Added to Cart");

      setAddToCart(newCartList);
      setBtnClicked(pricing => [...pricing, product.id]);
      setCartCounter(oldCount => oldCount + 1);
    }

  }

  // toggle category
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

  // remove from cart
  const handleRemoveFromCart = (product) => {

    setCartCounter(oldCount => oldCount - 1);


    const updatedClicked = btnClicked.filter(id => id !== product.id);
    setBtnClicked(updatedClicked);

    const newCartData = addToCart.filter(p => p.id !== product.id);
    setAddToCart(newCartData);
    toast.warning("Plan Removed From Cart");
  }

  // proceed button
  const handleProceedButton = () => {
    setAddToCart([]);
    setBtnClicked([]);
    setCartCounter(0);
    toast.success("Congratulations!! Purchase Successful");
  }

  return (
    <>
      <ToastContainer />
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
                  btnClicked={btnClicked}
                  cartCounter={cartCounter}
                ></Products>
              </Suspense>
              <GetStarted></GetStarted>
              <Pricing></Pricing>
            </div>
            :
            <CartProducts
              addToCart={addToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              totalCart={totalCart}
              handleProceedButton={handleProceedButton}
            ></CartProducts>
        }
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
