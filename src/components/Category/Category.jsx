import PropTypes from "prop-types";

const Category = ({ cartCounter, handleCategory, isActive }) => {
    return (
        <div className="w-3/4 mx-auto mb-10 md:mb-15">
            <div className="text-center mb-10">
                <h3 className="font-extrabold text-2xl md:text-5xl">Premium Digital Tools</h3>
                <p className="text-[#627382] my-3">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                <div className="border border-[#F6F6F6] rounded-full w-fit p-1 mx-auto">

                    <button
                        onClick={() => handleCategory("product")}
                        className={
                            isActive.status === "product" ?
                                "bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white btn font-bold rounded-l-full border-none shadow-none"
                                :
                                "btn font-medium rounded-l-full border-none shadow-none"
                        }>
                        Products
                    </button>

                    <button
                        onClick={() => handleCategory("cart")}
                        className={
                            isActive.status !== "product" ?
                                "bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white btn font-bold rounded-r-full border-none shadow-none"
                                :
                                "btn font-medium rounded-r-full border-none shadow-none"
                        }>
                        Cart({cartCounter})
                    </button>

                </div>
            </div>
        </div>
    );
};

Category.propTypes = {
    cartCounter: PropTypes.number.isRequired,
    handleCategory: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}

export default Category;