import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#101727]">
            <footer className="footer text-white p-10 max-w-400 w-11/12 mx-auto md:w-4/5 lg:w-3/4">
                <div className="flex flex-wrap justify-evenly">
                    <aside className="text-center lg:text-start lg:w-1/3">
                        <h3 className="font-bold text-3xl text-transparent bg-clip-text bg-linear-to-tl from-[#4F39F6] to-[#9514FA] mx-auto lg:mx-0">DigiTools</h3>
                        <p className="opacity-80">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </aside>
                    <nav className="list-none">
                        <h6 className="font-medium text-xl">Product</h6>
                        <li className="opacity-80">Features</li>
                        <li className="opacity-80">Pricing</li>
                        <li className="opacity-80">Templates</li>
                        <li className="opacity-80">Integrations</li>
                    </nav>
                    <nav className="list-none">
                        <h6 className="font-medium text-xl">Company</h6>
                        <li className="opacity-80">About</li>
                        <li className="opacity-80">Blog</li>
                        <li className="opacity-80">Careers</li>
                        <li className="opacity-80">Press</li>
                    </nav>
                    <nav className="list-none">
                        <h6 className="font-medium text-xl">Resources</h6>
                        <li className="opacity-80">Documentation</li>
                        <li className="opacity-80">Help Center</li>
                        <li className="opacity-80">Community</li>
                        <li className="opacity-80">Contact</li>
                    </nav>

                    <nav>
                        <h6 className="font-medium text-xl">Social</h6>
                        <div className="flex gap-2">
                            <FaInstagram />
                            <FaSquareFacebook />
                            <FaXTwitter />
                        </div>
                    </nav>
                </div>

                <div className="flex justify-between w-full border-t border-gray-300 pt-5">
                    <h4 className="text-[#FAFAFA] opacity-50">© 2026 Digitools. All rights reserved.</h4>
                    <div className="flex flex-col gap-3 whitespace-nowrap ml-2 list-none md:ml-0 md:gap-5 md:flex-row md:justify-evenly">
                        <li className="text-[#FAFAFA] opacity-50">Privacy Policy</li>
                        <li className="text-[#FAFAFA] opacity-50">Terms of Service</li>
                        <li className="text-[#FAFAFA] opacity-50">Cookies</li>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;