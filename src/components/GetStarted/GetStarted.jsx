import ProfileImg from "../../assets/products/user.png"
import ProductImg from "../../assets/products/package.png"
import RocketImg from "../../assets/products/rocket.png"

const GetStarted = () => {
    return (
        <div className="bg-[#F9FAFC]">
            <div className="w-3/4 mx-auto py-20 mb-10 md:mb-15">
                <div className="text-center mb-10">
                    <h2 className="font-extrabold text-2xl mb-2 md:text-5xl">Get Started in 3 Steps</h2>
                    <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className="grid gap-7 md:grid-cols-3">

                    <div className="card border-[#F1F1F1] bg-base-100 border w-full shadow-sm rounded-2xl">

                        <div className="flex justify-end px-4 pt-4">
                            <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] rounded-full w-fit px-2.5 py-2">
                                <p className="text-white font-bold text-sm">01</p>
                            </div>
                        </div>

                        <figure className="px-10 pt-2 -mb-3">
                            <img
                                src={ProfileImg}
                                className="bg-[#F9FAFC] rounded-full p-2" />
                        </figure>

                        <div className="card-body text-center">
                            <h2 className="font-bold text-2xl">Create Account</h2>
                            <p className="text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>

                    <div className="card border-[#F1F1F1] bg-base-100 border w-full shadow-sm rounded-2xl">

                        <div className="flex justify-end px-4 pt-4">
                            <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] rounded-full w-fit px-2.5 py-2">
                                <p className="text-white font-bold text-sm">02</p>
                            </div>
                        </div>

                        <figure className="px-10 pt-2 -mb-3">
                            <img
                                src={ProductImg}
                                className="bg-[#F9FAFC] rounded-full p-2" />
                        </figure>

                        <div className="card-body text-center">
                            <h2 className="font-bold text-2xl md:whitespace-normal lg:whitespace-nowrap">Choose Products</h2>
                            <p className="text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                    </div>

                    <div className="card border-[#F1F1F1] bg-base-100 border w-full shadow-sm rounded-2xl">

                        <div className="flex justify-end px-4 pt-4">
                            <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] rounded-full w-fit px-2.5 py-2">
                                <p className="text-white font-bold text-sm">03</p>
                            </div>
                        </div>


                        <figure className="px-10 pt-2 -mb-3">
                            <img
                                src={RocketImg}
                                className="bg-[#F9FAFC] rounded-full  p-2" />
                        </figure>

                        <div className="card-body text-center">
                            <h2 className="font-bold text-2xl">Start Creating</h2>
                            <p className="text-[#627382]">Download and start using your premium tools immediately.</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default GetStarted;