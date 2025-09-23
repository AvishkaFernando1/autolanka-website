import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const locations = [
  {
    city: 'Colombo',
    address: 'No. 123, Galle Road, Colombo 03',
    phone: '+94 11 234 5678',
    hours: '8:00 AM - 8:00 PM',
    vehicles: 850,
    featured: true,
  },
  {
    city: 'Kandy',
    address: 'No. 45, Peradeniya Road, Kandy',
    phone: '+94 81 234 5678',
    hours: '8:00 AM - 7:00 PM',
    vehicles: 420,
  },
  {
    city: 'Galle',
    address: 'No. 67, Matara Road, Galle',
    phone: '+94 91 234 5678',
    hours: '8:00 AM - 6:00 PM',
    vehicles: 310,
  },
  {
    city: 'Negombo',
    address: 'No. 89, Main Street, Negombo',
    phone: '+94 31 234 5678',
    hours: '8:00 AM - 7:00 PM',
    vehicles: 280,
  },
  {
    city: 'Jaffna',
    address: 'No. 12, Hospital Road, Jaffna',
    phone: '+94 21 234 5678',
    hours: '8:00 AM - 6:00 PM',
    vehicles: 190,
  },
  {
    city: 'Anuradhapura',
    address: 'No. 34, New Town Road, Anuradhapura',
    phone: '+94 25 234 5678',
    hours: '8:00 AM - 6:00 PM',
    vehicles: 150,
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-accent to-yellow-500 text-black px-4 py-2 mb-4">
            Island-wide Network
          </Badge>
          <h2 className="text-4xl md:text-6xl mb-6">
            Our <span className="gradient-text">Locations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit our showrooms across Sri Lanka to explore our premium vehicle collection 
            and get personalized assistance from our expert team.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="glass-card p-6 h-full border-border hover:border-accent transition-all duration-500 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent to-transparent rounded-full -translate-y-16 translate-x-16" />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {location.city}
                        </h3>
                        {location.featured && (
                          <Badge className="bg-gradient-to-r from-accent to-yellow-500 text-black text-xs px-2 py-1">
                            Flagship
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4 mr-2 text-accent" />
                        <span className="text-sm">{location.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-3 text-accent" />
                      <span className="text-foreground">{location.phone}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-3 text-accent" />
                      <span className="text-foreground">{location.hours}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-3 text-accent" />
                      <span className="text-foreground">{location.vehicles}+ Vehicles Available</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 py-3 px-4 bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black rounded-lg transition-all duration-300"
                  >
                    Get Directions
                  </motion.button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="glass-card p-8 text-center">
            <div className="bg-gradient-to-br from-accent/10 to-yellow-500/10 rounded-2xl p-12 border-2 border-dashed border-accent/30">
              <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Interactive Map</h3>
              <p className="text-muted-foreground mb-6">
                Explore all our locations on an interactive map to find the nearest showroom to you.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black px-8 py-3 rounded-lg transition-all duration-300"
              >
                View Interactive Map
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}