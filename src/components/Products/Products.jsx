import PropTypes from "prop-types";
import { use } from "react";
import Product from "../Product/Product";

const Products = ({ digiToolsPromise }) => {

    const digiTools = use(digiToolsPromise);

    return (
        <div className="w-3/4 mx-auto mb-10 md:mb-15">
            <div className="text-center mb-10">
                <h3 className="font-extrabold text-2xl md:text-5xl">Premium Digital Tools</h3>
                <p className="text-[#627382] my-3">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className="border border-[#F6F6F6] rounded-full w-fit p-1 mx-auto">
                    <button className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white btn font-bold rounded-l-full border-none shadow-none">Products</button>
                    <button className="btn font-medium rounded-r-full border-none shadow-none">Cart(0)</button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {
                    digiTools.map(digiTool => <Product
                        key={digiTool.id}
                        digiTool={digiTool}
                    ></Product>)
                }
            </div>
        </div>
    );
};

Products.propTypes = {
    digiToolsPromise: PropTypes.instanceOf(Promise).isRequired
}

export default Products;