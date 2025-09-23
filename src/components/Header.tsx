import { motion } from 'motion/react';
import { Menu, X, Car, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Handle special case for home
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed header
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (item: string, e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = item.toLowerCase();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 glass"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="p-2 rounded-lg bg-gradient-to-r from-accent to-yellow-500">
              <Car className="h-6 w-6 text-black" />
            </div>
            <div>
              <h1 className="gradient-text font-bold text-xl">AutoLanka</h1>
              <p className="text-xs text-muted-foreground">Premium Vehicles</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Vehicles', 'Locations', 'About', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={(e) => handleNavClick(item, e)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="text-foreground hover:text-accent transition-colors duration-300 relative group cursor-pointer"
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-yellow-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </nav>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-foreground">+94 77 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="text-foreground">Colombo, Sri Lanka</span>
            </div>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-card"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {['Home', 'Vehicles', 'Locations', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={(e) => handleNavClick(item, e)}
                className="block py-2 text-foreground hover:text-accent transition-colors text-left w-full"
              >
                {item}
              </button>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-foreground">+94 77 123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-foreground">Colombo, Sri Lanka</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}