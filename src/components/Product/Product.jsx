import PropTypes from "prop-types";
import DesignToolImg from "../../assets/products/design-tool.png"
import OperationImg from "../../assets/products/operation.png"
import PortfolioImg from "../../assets/products/portfolio.png"
import SocialMediaImg from "../../assets/products/social-media.png"
import WritingImg from "../../assets/products/writing_2327400 1.png"

const Product = ({ digiTool, handleBuyNow, btnClicked }) => {

    const { id, tagType, icon, name, description, price, period, features } = digiTool;

    return (
        <div>
            <div className=" border-[#F2F2F2] border w-full min-h-105 h-full rounded-2xl drop-shadow-2xl shadow-md relative flex">
                <div className="card-body space-y-3">

                    <span className=
                        {
                            tagType === "new" ?
                                "bg-[#DBFCE7] text-[#0A883E] badge font-medium py-2 rounded-full absolute -right-5 top-2 -translate-x-1/2"
                                : tagType === "popular" ?
                                    "bg-[#E1E7FF] text-[#9514FA] badge font-medium py-2 rounded-full absolute -right-7 top-2 -translate-x-1/2"
                                    : "bg-[#FEF3C6] text-[#BB4D00] badge font-medium py-2 rounded-full absolute -right-10 top-2 -translate-x-1/2"
                        }
                    >
                        {
                            tagType === "new" ?
                                "New"
                                : tagType === "popular" ?
                                    "Popular"
                                    : "Best Seller"
                        }
                    </span>

                    <figure className="border border-[#F2F2F2] rounded-full w-fit p-2">
                        <img
                            className="w-5 h-5"
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

                    <div className="flex flex-col grow">
                        <h2 className="text-2xl font-bold mb-3 grow">{name}</h2>
                        <p className="text-[#627382] grow">{description}</p>
                        <span className="text-[#627382] text-xl my-3 grow"><span className="text-black font-bold text-2xl">${price}</span>/{period}</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {
                            features.map((feature, idx) =>
                                <ul key={idx} className="text-[#627382] flex flex-col grow gap-2 font-medium">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>{feature}</span>
                                    </li>
                                </ul>
                            )
                        }
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={() => handleBuyNow(digiTool)}
                            className=
                            {
                                btnClicked.includes(id) ?
                                    "text-white bg-success btn btn-block btn-disabled font-bold border-none shadow-none rounded-full"
                                    : "text-white bg-linear-to-tl from-[#4F39F6] to-[#9514FA] btn btn-block font-bold border-none shadow-none rounded-full"
                            }
                        >
                            {
                                btnClicked.includes(id) ?
                                    "Added To Cart!!"
                                    : "Buy Now"
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    digiTool: PropTypes.object.isRequired,
    handleBuyNow: PropTypes.func.isRequired,
    btnClicked: PropTypes.array.isRequired
}

export default Product;