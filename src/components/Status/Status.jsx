const Status = () => {
    return (
        <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA]">
            <div className="text-white stats flex flex-col justify-center items-center mb-10 w-3/4 mx-auto py-8 md:mb-15 md:flex-row">

                <div className="stat border-white border-b border-r-0 text-center md:border-r md:border-b-0">
                    <div className="font-extrabold text-4xl mb-2 md:text-6xl">50K+</div>
                    <div className="font-medium text-xl opacity-60 md:text-2xl">Active Users</div>
                </div>

                <div className="stat border-white border-b border-r-0 text-center md:border-r md:border-b-0">
                    <div className="font-extrabold text-4xl mb-2 md:text-6xl">200+</div>
                    <div className="font-medium text-xl opacity-60 md:text-2xl">Premium Tools</div>
                </div>

                <div className="stat border-none text-center">
                    <div className="font-extrabold text-4xl mb-2 md:text-6xl">4.9</div>
                    <div className="font-medium text-xl opacity-60 md:text-2xl">Rating</div>
                </div>

            </div>
        </div>
    );
};

export default Status;