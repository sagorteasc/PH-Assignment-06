import BannerImg from "../../assets/products/banner.png"
import PlayIcon from "../../assets/products/Play.png"
import { FaRegCircleDot } from "react-icons/fa6";

const Banner = () => {
    return (
        <div>
            <div className="w-3/4 mx-auto my-10 md:my-15">
                <div className="flex justify-center items-center gap-7 flex-col md:flex-row-reverse">
                    <img
                        className="md:w-1/3"
                        src={BannerImg}
                    />
                    <div>

                        <div className="bg-[#E1E7FF] btn border-none shadow-none rounded-full w-fit mb-4">
                            <button className="text-transparent bg-clip-text bg-linear-to-tl from-[#4F39F6] to-[#9514FA] flex items-center gap-2">
                                <FaRegCircleDot className="text-[#9514FA]" />
                                New: AI-Powered Tools Available
                            </button>
                        </div>

                        <h1
                            className="text-4xl whitespace-nowrap font-extrabold leading-12 md:text-6xl md:leading-16">
                            Supercharge Your
                            <br />
                            <span
                                className="text-transparent bg-clip-text bg-linear-to-tl from-[#4F39F6] to-[#9514FA]">
                                Digital Workflow
                            </span>
                        </h1>

                        <p
                            className="text-[#627382] text-lg py-4 lg:py-6">
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                        </p>

                        <div className="flex gap-4 items-center">

                            <button
                                className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] btn btn-primary font-bold rounded-full border-none shadow-none">
                                Explore Products
                            </button>

                            <button
                                className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] border-[#9514FA] btn bg-transparent font-bold rounded-full text-transparent bg-clip-text shadow-none">
                                <img src={PlayIcon} />
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;