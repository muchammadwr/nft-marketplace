import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  "Home",
  "Market",
  "Eksplore",
  "Exhibition",
  "Artist & Collectors",
];

const Navbar = () => {
  const [Nav, setNav] = useState(false);
  const toggleNav = () => setNav(!Nav);
  return (
    <nav className="p-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-screen-xl relative">
        {/* flex container */}
        <div className="flex justify-between items-center text-white">
          {/* logo */}
          <a
            href="/"
            className="text-2xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-400"
          >
            <span>NFT</span>Market.
          </a>
          {/* menu item */}
          <div className="hidden lg:flex space-x-6 text-sm items-center">
            {navLinks.map((link, index) => (
              <a
                href="#"
                key={index}
                className="hover:text-indigo-600 duration-200 ease-in-out"
              >
                {link}
              </a>
            ))}
            <button className="px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700">
              Connect Wallet
            </button>
          </div>
          {/* hamburger menu */}
          <div className="lg:hidden" onClick={toggleNav}>
            {Nav ? (
              <IoClose size={28} className="text-white" />
            ) : (
              <AiOutlineMenu size={25} />
            )}
          </div>
          {/* mobile menu */}
          {Nav && (
            <div className="absolute top-14 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 z-50 w-full px-28 py-8 rounded-lg">
              <div className="flex space-y-6 text-sm flex-col items-center">
                {navLinks.map((link, index) => (
                  <a
                    href="#"
                    key={index}
                    className="hover:text-indigo-600 duration-200 ease-in-out"
                  >
                    {link}
                  </a>
                ))}
                <button className="px-5 rounded-md font-medium border-indigo-600 py-2 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-700">
                  Connect Wallet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
