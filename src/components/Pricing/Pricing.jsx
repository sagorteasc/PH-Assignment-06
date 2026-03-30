const Pricing = () => {
    return (
        <div className="w-3/4 mx-auto mb-10 md:mb-15">

            <div className="hidden gap-7 md:flex">

                <div className="bg-[#F2F2F2] h-110 rounded-2xl drop-shadow-2xl shadow-md flex md:w-80">
                    <div className="card-body">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold">Starter</h2>
                            <p className="text-[#627382]">Perfect for getting started</p>
                            <span className="text-[#627382] text-xl my-3"><span className="text-black font-bold text-[40px]">$0</span>/month</span>
                        </div>

                        <ul className="text-[#627382] flex flex-col grow gap-2 font-medium">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white btn btn-block font-bold border-none shadow-none rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>

                <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white h-110 rounded-2xl drop-shadow-2xl shadow-md relative flex md:w-80">
                    <div className="card-body">
                        <span className="bg-[#FEF3C6] text-[#BB4D00] badge badge-xs font-medium py-2 rounded-full absolute -top-2 left-1/2 -translate-x-1/2">Most Popular</span>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold">Pro</h2>
                            <p className="opacity-80">Best for professionals</p>
                            <span className="text-xl my-3"><span className="font-bold text-[40px]">$29</span>/month</span>
                        </div>

                        <ul className="flex flex-col grow gap-2 font-medium">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="bg-white rounded-full mt-6">
                            <button className="text-transparent bg-clip-text bg-linear-to-tl from-[#4F39F6] to-[#9514FA] btn btn-block font-bold border-none shadow-none">Start Pro Trial</button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F2F2F2] h-110 rounded-2xl drop-shadow-2xl shadow-md flex md:w-80">
                    <div className="card-body">
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-bold">Enterprise</h2>
                            <p className="text-[#627382]">For teams and businesses</p>
                            <span className="text-[#627382] text-xl my-3"><span className="text-black font-bold text-[40px]">$99</span>/month</span>
                        </div>

                        <ul className="text-[#627382] flex flex-col grow gap-2 font-medium">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white btn btn-block font-bold border-none shadow-none rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-center md:hidden">
                <div className="carousel w-72 mx-auto rounded-2xl">

                    <div id="slide1" className="carousel-item relative w-full">

                        <div className="bg-[#F2F2F2] w-full min-h-105 rounded-2xl drop-shadow-2xl shadow-md flex px-4">
                            <div className="card-body">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold">Starter</h2>
                                    <p className="text-[#627382]">Perfect for getting started</p>
                                    <span className="text-[#627382] text-xl my-3"><span className="text-black font-bold text-[40px]">$0</span>/month</span>
                                </div>

                                <ul className="text-[#627382] flex flex-col grow gap-2 font-medium">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access to 10 free tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Basic templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Community support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>1 project per month</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white btn btn-block font-bold border-none shadow-none rounded-full">Get Started Free</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between top-1/2 right-0 left-0 -translate-y-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide2" className="carousel-item relative w-full">

                        <div className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white w-full min-h-105 rounded-2xl drop-shadow-2xl shadow-md relative flex px-4">
                            <div className="card-body">
                                <span className="bg-[#FEF3C6] text-[#BB4D00] badge font-medium py-2 rounded-full absolute -right-11 top-3 -translate-x-1/2">Most Popular</span>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold">Pro</h2>
                                    <p className="opacity-80">Best for professionals</p>
                                    <span className="text-xl my-3"><span className="font-bold text-[40px]">$29</span>/month</span>
                                </div>

                                <ul className="flex flex-col grow gap-2 font-medium">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Access premium tools</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited templates</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Priority support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Unlimited projects</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Cloud sync</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Advanced analytics</span>
                                    </li>
                                </ul>
                                <div className="bg-white rounded-full mt-6">
                                    <button className="text-transparent bg-clip-text bg-linear-to-tl from-[#4F39F6] to-[#9514FA] btn btn-block font-bold border-none shadow-none">Start Pro Trial</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between top-1/2 right-0 left-0 -translate-y-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative w-full">

                        <div className="bg-[#F2F2F2] w-full min-h-105 rounded-2xl drop-shadow-2xl shadow-md flex px-4">
                            <div className="card-body">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-bold">Enterprise</h2>
                                    <p className="text-[#627382]">For teams and businesses</p>
                                    <span className="text-[#627382] text-xl my-3"><span className="text-black font-bold text-[40px]">$99</span>/month</span>
                                </div>

                                <ul className="text-[#627382] flex flex-col grow gap-2 font-medium">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Everything in Pro</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Team collaboration</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom integrations</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Dedicated support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>SLA guarantee</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Custom branding</span>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <button className="bg-linear-to-tl from-[#4F39F6] to-[#9514FA] text-white btn btn-block font-bold border-none shadow-none rounded-full">Contact Sales</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-between top-1/2 right-0 left-0 -translate-y-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Pricing;