import { motion } from 'motion/react';
import { MapPin, Fuel, Calendar, Users, Heart, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VehicleCardProps {
  vehicle: {
    id: string;
    name: string;
    make: string;
    model: string;
    year: number;
    price: number;
    location: string;
    image: string;
    mileage: string;
    fuelType: string;
    seats: number;
    transmission: string;
    condition: string;
    featured?: boolean;
  };
  index: number;
}

export function VehicleCard({ vehicle, index }: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-LK', {
      style: 'currency',
      currency: 'LKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/20">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <ImageWithFallback
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {vehicle.featured && (
              <Badge className="bg-gradient-to-r from-accent to-yellow-500 text-black px-2 py-1">
                Featured
              </Badge>
            )}
            <Badge variant="secondary" className="bg-black/50 text-white border-0">
              {vehicle.condition}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-accent hover:text-black transition-colors"
            >
              <Heart className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-black/50 text-white hover:bg-accent hover:text-black transition-colors"
            >
              <Share2 className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Price Overlay */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-gradient-to-r from-accent to-yellow-500 text-black px-4 py-2 rounded-full">
              <span className="font-bold text-lg">{formatPrice(vehicle.price)}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
              {vehicle.year} {vehicle.make} {vehicle.model}
            </h3>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1 text-accent" />
              <span className="text-sm">{vehicle.location}</span>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">{vehicle.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Fuel className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">{vehicle.seats} Seater</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <span className="text-sm text-muted-foreground">{vehicle.transmission}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Button 
              className="flex-1 bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black"
            >
              View Details
            </Button>
            <Button 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-black"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}