import { motion } from "motion/react";
import {
  Car,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-accent to-yellow-500">
                <Car className="h-6 w-6 text-black" />
              </div>
              <div>
                <h3 className="gradient-text font-bold text-xl">
                  AutoLanka
                </h3>
                <p className="text-xs text-muted-foreground">
                  Premium Vehicles
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Sri Lanka's premier automotive marketplace
              connecting buyers with premium vehicles from
              trusted dealers across the island.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map(
                (Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-2 rounded-lg glass-card text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Browse Vehicles",
                "Sell Your Car",
                "Finance Options",
                "Insurance",
                "Service Centers",
                "Trade-In Value",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-6">
              Vehicle Types
            </h4>
            <ul className="space-y-3">
              {[
                "Luxury Cars",
                "Sports Cars",
                "SUVs",
                "Sedans",
                "Hatchbacks",
                "Pickup Trucks",
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="text-foreground">Head Office</p>
                  <p className="text-muted-foreground text-sm">
                    No. 123, Galle Road,
                    <br />
                    Colombo 03, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-foreground">
                    +94 77 123 4567
                  </p>
                  <p className="text-muted-foreground text-sm">
                    24/7 Customer Support
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-foreground">
                    info@autolanka.lk
                  </p>
                  <p className="text-muted-foreground text-sm">
                    General Inquiries
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 AutoLanka. All rights reserved. | Made
              with ❤️ in Sri Lanka by Sandru Designslk{" "}
              <span className="text-accent">
                Sandaru Designlk
              </span>
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}