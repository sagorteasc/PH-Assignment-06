import PropTypes from "prop-types"
import DesignToolImg from "../../assets/products/design-tool.png"
import OperationImg from "../../assets/products/operation.png"
import PortfolioImg from "../../assets/products/portfolio.png"
import SocialMediaImg from "../../assets/products/social-media.png"
import WritingImg from "../../assets/products/writing_2327400 1.png"

const CartProduct = ({ product, handleRemoveFromCart }) => {

    const { name, price, icon } = product;

    return (
        <div className="bg-[#F9FAFC] w-full mb-4 rounded-2xl p-2 flex justify-between">

            <div className="flex w-full items-center gap-1.5">
                <figure className="border border-[#F2F2F2] rounded-full w-fit btn px-2 py-3">
                    <img
                        className="w-fit h-5"
                        src=
                        {
                            icon === "design-tool" ?
                                DesignToolImg
                                : icon === "operation" ?
                                    OperationImg
                                    : icon === "portfolio" ?
                                        PortfolioImg
                                        : icon === "social-media" ?
                                            SocialMediaImg
                                            : WritingImg
                        }
                    />
                </figure>
                <div className="flex w-full items-center justify-between">

                    <div className="flex flex-col">
                        <h3 className="font-semibold whitespace-nowrap">{name}</h3>
                        <p className="text-[#627382] font-medium">${price}</p>
                    </div>

                    <div>
                        <button
                            onClick={() => handleRemoveFromCart(product)}
                            className="text-[#FF3980] bg-transparent font-bold text-xs border-none shadow-none md:text-base md:btn">
                            Remove
                        </button>
                    </div>

                </div>
            </div>

        </div >
    );
};

CartProduct.propTypes = {
    product: PropTypes.object.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default CartProduct;