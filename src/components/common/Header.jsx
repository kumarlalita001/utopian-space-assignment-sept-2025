import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
          >
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">
              UtopianSpace
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/features">Features</NavLink>
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
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/features" onClick={() => setIsMenuOpen(false)}>
                Features
              </MobileNavLink>
              <MobileNavLink
                to="/howitworks"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

// ✅ NavLink using useNavigate
const NavLink = ({ to, children }) => {
  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => navigate(to)}
      className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.button>
  );
};

// ✅ MobileNavLink using useNavigate
const MobileNavLink = ({ to, children, onClick }) => {
  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => {
        navigate(to);
        if (onClick) onClick();
      }}
      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.button>
  );
};
