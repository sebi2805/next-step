import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="bg-light-teal py-2"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-24 h-24">
            <Image
              src="/logo.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavbarItem name="Home" route="/" delay={0.6} />
          <NavbarItem name="Contact" route="/contact" delay={1.0} />
        </div>
        <div className="block md:hidden pr-4">
          <button
            onClick={handleToggle}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col z-20 space-y-4 absolute bg-light-teal w-full left-0 top-24 p-4"
          >
            <NavbarItem name="Home" route="/" delay={0.6} />
            <NavbarItem name="Contact" route="/contact" delay={1.0} />
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
