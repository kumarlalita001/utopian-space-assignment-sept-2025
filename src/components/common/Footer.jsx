import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">AI Marvel</h2>
          <p className="text-sm leading-6">
            AI Marvel brings the future of Artificial Intelligence closer to
            you. Explore our tools, features, and insights to power your digital
            journey.
          </p>
        </div>

        {/* Features */}

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
                }
              >
                Smart Insights
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
                }
              >
                AI Chatbot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
                }
              >
                Automation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
                }
              >
                Analytics
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/howitworks"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
                }
              >
                How It Works
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
                }
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 font-medium" : "hover:text-blue-400"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} AI Marvel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
