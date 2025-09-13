import React from "react";
import { Briefcase, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNavClick = (href) => {
    // For demonstration, we'll just log the navigation
    // In a real app, you'd use React Router or similar
    console.log(`Navigating to: ${href}`);
    alert(`Would navigate to: ${href}`);
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50 top-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer hover:scale-105 transition-transform">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">UtopianSpace</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" onClick={handleNavClick}>Home</NavLink>
            <NavLink href="/features" onClick={handleNavClick}>Features</NavLink>
            <NavLink href="/howitworks" onClick={handleNavClick}>How it Works</NavLink>
            <NavLink href="/about" onClick={handleNavClick}>About</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink href="/" onClick={handleNavClick}>Home</MobileNavLink>
              <MobileNavLink href="/features" onClick={handleNavClick}>Features</MobileNavLink>
              <MobileNavLink href="/howitworks" onClick={handleNavClick}>How it Works</MobileNavLink>
              <MobileNavLink href="/about" onClick={handleNavClick}>About</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ href, children, onClick }) => (
  <button
    onClick={() => onClick(href)}
    className="text-gray-600 hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
  >
    {children}
  </button>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <button
    onClick={() => onClick(href)}
    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors hover:scale-105 transform duration-200"
  >
    {children}
  </button>
);
