import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Link, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

//import { appName } from "../../constants/names";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">{"UtopianSpace"}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
           
            <NavLink to="/">Home</NavLink>
            <NavLink to="features">Features</NavLink>
            <NavLink to="/howitworks">How it Works</NavLink>
            <NavLink to="/about">About</NavLink>
            
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div
              onClick={() => setIsMenuOpen(false)}
              className="px-2 pt-2 pb-3 space-y-1"
            >
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/howitworks">HowitWorks</MobileNavLink>
              <MobileNavLink to="/features">Features</MobileNavLink>
              <MobileNavLink to="/about">About</MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const NavLink = ({ href, children }) => (
  
  <motion.a
    onClick={() =>{ navigator(`/${href}`); alert(`Would navigate to: ${href}`)}}
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
    whileHover={{ scale: 1.1 }}
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.a>
);
