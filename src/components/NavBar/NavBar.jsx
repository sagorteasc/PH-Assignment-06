import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
    const navList = <>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
    </>

    return (
        <div>
            <nav className="navbar w-11/12 mx-auto border-b border-gray-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 font-semibold rounded-box text-center z-1 mt-3 w-52 p-2 shadow">
                            {navList}
                            <button
                                className="btn font-semibold rounded-full my-2">
                                Login
                            </button>
                            <button
                                className="btn font-semibold text-white rounded-full bg-linear-to-tl from-[#4F39F6] to-[#9514FA] shadow-none border-none btn-info">
                                Get Started
                            </button>
                        </ul>
                    </div>
                    <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-linear-to-tl from-[#4F39F6] to-[#9514FA] hidden lg:block">DigiTools</h3>
                </div>
                <div className="navbar-center">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal font-semibold flex gap-5">
                            {navList}
                        </ul>
                    </div>
                    <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-linear-to-tl from-[#4F39F6] to-[#9514FA] block lg:hidden">DigiTools</h3>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:flex items-center">
                        <FiShoppingCart />
                        <button
                            className="btn font-semibold bg-transparent border-none shadow-none mr-2">
                            Login
                        </button>
                        <button
                            className="btn font-semibold text-white rounded-full bg-linear-to-tl from-[#4F39F6] to-[#9514FA] shadow-none border-none btn-info">
                            Get Started
                        </button>
                    </div>
                    <FiShoppingCart className="block md:hidden" />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;