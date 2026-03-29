const Status = () => {
    return (
        <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA]">
            <div className="text-white stats flex flex-col justify-center items-center mb-20 w-3/4 mx-auto py-8 md:flex-row">

                <div className="stat border-white border-b border-r-0 text-center md:border-r md:border-b-0">
                    <div className="font-extrabold text-6xl mb-2">50K+</div>
                    <div className="font-medium text-2xl opacity-60">Active Users</div>
                </div>

                <div className="stat border-white border-b border-r-0 text-center md:border-r md:border-b-0">
                    <div className="font-extrabold text-6xl mb-2">200+</div>
                    <div className="font-medium text-2xl opacity-60">Premium Tools</div>
                </div>

                <div className="stat border-none text-center">
                    <div className="font-extrabold text-6xl mb-2">4.9</div>
                    <div className="font-medium text-2xl opacity-60">Rating</div>
                </div>

            </div>
        </div>
    );
};

export default Status;