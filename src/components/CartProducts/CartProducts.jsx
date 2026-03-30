import { FiShoppingCart } from "react-icons/fi";
import PropTypes from "prop-types";
import CartProduct from "../CartProduct/CartProduct";

const CartProducts = ({ addToCart, handleRemoveFromCart, totalCart }) => {

    return (
        <div className="w-3/4 mx-auto mb-10 md:mb-15">
            {
                addToCart.length === 0 ?
                    <div className="card bg-base-100 w-full drop-shadow-xl shadow-sm">
                        <div className="card-body">
                            <h3 className="font-bold text-2xl mb-5">Your Cart</h3>
                            <div className="flex flex-col justify-center items-center h-40">
                                <FiShoppingCart className="w-20 h-20 text-[#627382] mb-4" />
                                <h4 className="text-[#627382]">Your Cart is Empty</h4>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="card bg-base-100 w-full drop-shadow-xl shadow-sm">
                        <div className="card-body">
                            <h3 className="font-bold text-2xl mb-5">Your Cart</h3>
                            {
                                addToCart.map(product => <CartProduct
                                    key={product.id}
                                    product={product}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                ></CartProduct>)
                            }
                        </div>
                        <div className="flex justify-between items-center px-7 pb-7">
                            <h3 className="text-[#627382]">Total:</h3>
                            <p className="font-bold text-2xl">${totalCart}</p>
                        </div>
                    </div>

            }
        </div>
    );
};

CartProducts.propTypes = {
    addToCart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
    totalCart: PropTypes.number.isRequired
}

export default CartProducts;