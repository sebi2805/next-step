import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarItemProps {
  name: string;
  route: string;
  delay: number; // Add delay prop
}

const NavbarItem: React.FC<NavbarItemProps> = ({ name, route, delay }) => {
  return (
    <motion.li
      className="mr-6 md:mr-0 md:ml-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link
        href={route}
        className="text-white hover:text-gray-200 font-bold text-lg md:text-2xl"
      >
        {name}
      </Link>
    </motion.li>
  );
};

export default NavbarItem;
