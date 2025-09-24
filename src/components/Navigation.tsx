import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Chat", path: "/chat" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tutorials", path: "/tutorials" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border ocean-shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Waves className="w-8 h-8 text-primary group-hover:text-accent transition-smooth" />
              <div className="absolute inset-0 animate-ripple opacity-0 group-hover:opacity-100">
                <Waves className="w-8 h-8 text-accent" />
              </div>
            </div>
            <span className="text-xl font-bold text-primary group-hover:text-accent transition-smooth">
              FloatChat
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                } before:absolute before:bottom-[-4px] before:left-0 before:w-full before:h-0.5 before:bg-primary before:scale-x-0 before:transition-smooth hover:before:scale-x-100 ${
                  isActive(item.path) ? "before:scale-x-100" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              Login
            </Button>
            <Button variant="ocean" size="sm" className="float-shadow">
              Try Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-2 py-2 text-sm font-medium transition-smooth ${
                    isActive(item.path)
                      ? "text-primary bg-primary/10 rounded-md"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-3 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  Login
                </Button>
                <Button variant="ocean" size="sm" className="justify-start">
                  Try Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;