import PropTypes from "prop-types";
import { use } from "react";
import Product from "../Product/Product";

const Products = ({ digiToolsPromise, handleBuyNow, isClicked }) => {

    const digiTools = use(digiToolsPromise);

    return (
        <div className="w-3/4 mx-auto mb-10 md:mb-15">

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    digiTools.map(digiTool => <Product
                        key={digiTool.id}
                        digiTool={digiTool}
                        handleBuyNow={handleBuyNow}
                        isClicked={isClicked}
                    ></Product>)
                }
            </div>
        </div>
    );
};

Products.propTypes = {
    digiToolsPromise: PropTypes.instanceOf(Promise).isRequired,
    handleBuyNow: PropTypes.func.isRequired,
    isClicked: PropTypes.array.isRequired,
    cartCounter: PropTypes.number.isRequired
}

export default Products;