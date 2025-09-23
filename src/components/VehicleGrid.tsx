import { motion } from 'motion/react';
import { useState, useMemo } from 'react';
import { VehicleCard } from './VehicleCard';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const mockVehicles = [
  {
    id: '1',
    name: 'BMW X5 M Sport',
    make: 'BMW',
    model: 'X5 M Sport',
    year: 2023,
    price: 18500000,
    location: 'Colombo 03',
    image: 'https://images.unsplash.com/photo-1619751875403-ea072c8cc307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVVYlMjB2ZWhpY2xlJTIwbHV4dXJ5fGVufDF8fHx8MTc1ODQ2MTIzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mileage: '15,000 km',
    fuelType: 'Petrol',
    seats: 7,
    transmission: 'Auto',
    condition: 'Brand New',
    category: ['SUV', 'Luxury'],
    featured: true,
  },
  {
    id: '2',
    name: 'Mercedes C-Class',
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    price: 12500000,
    location: 'Kandy',
    image: 'https://images.unsplash.com/photo-1648178326808-30e03de8049d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NTg0MzQ4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mileage: '25,000 km',
    fuelType: 'Petrol',
    seats: 5,
    transmission: 'Auto',
    condition: 'Used',
    category: ['Sedan', 'Luxury'],
  },
  {
    id: '3',
    name: 'Porsche 911 Carrera',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2023,
    price: 35000000,
    location: 'Galle',
    image: 'https://images.unsplash.com/photo-1676112687117-0261d7a84f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzU4NDYxMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mileage: '5,000 km',
    fuelType: 'Petrol',
    seats: 2,
    transmission: 'Manual',
    condition: 'Brand New',
    category: ['Sports', 'Luxury'],
    featured: true,
  },
  {
    id: '4',
    name: 'Toyota Hilux',
    make: 'Toyota',
    model: 'Hilux',
    year: 2023,
    price: 8500000,
    location: 'Negombo',
    image: 'https://images.unsplash.com/photo-1648866660051-0050de38a684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrdXAlMjB0cnVjayUyMG1vZGVybnxlbnwxfHx8fDE3NTg0NjEyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mileage: '12,000 km',
    fuelType: 'Diesel',
    seats: 5,
    transmission: 'Manual',
    condition: 'Used',
    category: ['SUV'],
  },
  {
    id: '5',
    name: 'Honda Civic Type R',
    make: 'Honda',
    model: 'Civic Type R',
    year: 2022,
    price: 7500000,
    location: 'Jaffna',
    image: 'https://images.unsplash.com/photo-1702416197021-b24131ab8232?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXRjaGJhY2slMjBjYXIlMjBjaXR5fGVufDF8fHx8MTc1ODQ2MTIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mileage: '18,000 km',
    fuelType: 'Petrol',
    seats: 5,
    transmission: 'Manual',
    condition: 'Used',
    category: ['Hatchback', 'Sports'],
  },
  {
    id: '6',
    name: 'Audi Q7 Quattro',
    make: 'Audi',
    model: 'Q7 Quattro',
    year: 2023,
    price: 22000000,
    location: 'Colombo 07',
    image: 'https://images.unsplash.com/photo-1662298410057-d89255f03ae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzcmklMjBsYW5rYXxlbnwxfHx8fDE3NTg0NjEyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mileage: '8,000 km',
    fuelType: 'Petrol',
    seats: 7,
    transmission: 'Auto',
    condition: 'Brand New',
    category: ['SUV', 'Luxury'],
    featured: true,
  },
  {
    id: '7',
    name: 'Toyota Prius Hybrid',
    make: 'Toyota',
    model: 'Prius',
    year: 2022,
    price: 6800000,
    location: 'Anuradhapura',
    image: 'https://images.unsplash.com/photo-1648178326808-30e03de8049d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NTg0MzQ4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mileage: '32,000 km',
    fuelType: 'Hybrid',
    seats: 5,
    transmission: 'Auto',
    condition: 'Used',
    category: ['Sedan'],
  },
  {
    id: '8',
    name: 'Nissan GT-R',
    make: 'Nissan',
    model: 'GT-R',
    year: 2023,
    price: 28000000,
    location: 'Colombo 03',
    image: 'https://images.unsplash.com/photo-1676112687117-0261d7a84f77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjBtb2Rlcm58ZW58MXx8fHwxNzU4NDYxMjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    mileage: '2,500 km',
    fuelType: 'Petrol',
    seats: 4,
    transmission: 'Auto',
    condition: 'Brand New',
    category: ['Sports', 'Luxury'],
    featured: true,
  },
];

const filterOptions = [
  'All Vehicles',
  'Brand New',
  'Used',
  'Luxury',
  'Sports',
  'SUV',
  'Sedan',
  'Hatchback'
];

export function VehicleGrid() {
  const [activeFilter, setActiveFilter] = useState('All Vehicles');

  // Filter vehicles based on active filter
  const filteredVehicles = useMemo(() => {
    if (activeFilter === 'All Vehicles') {
      return mockVehicles;
    }
    
    if (activeFilter === 'Brand New' || activeFilter === 'Used') {
      return mockVehicles.filter(vehicle => vehicle.condition === activeFilter);
    }
    
    // For category filters (Luxury, Sports, SUV, Sedan, Hatchback)
    return mockVehicles.filter(vehicle => 
      vehicle.category.includes(activeFilter)
    );
  }, [activeFilter]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section id="vehicles" className="py-20 relative">
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
            Premium Collection
          </Badge>
          <h2 className="text-4xl md:text-6xl mb-6">
            Featured <span className="gradient-text">Vehicles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked selection of premium vehicles from trusted dealers 
            across Sri Lanka, with verified quality and transparent pricing.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button variant="outline" className="glass-card border-accent text-accent hover:bg-accent hover:text-black">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
          
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((filter, index) => (
              <motion.button
                key={filter}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFilterClick(filter)}
                className={`px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-accent to-yellow-500 text-black shadow-lg shadow-accent/25'
                    : 'glass-card text-foreground hover:text-accent border border-border hover:border-accent'
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground">
            Showing <span className="text-accent font-medium">{filteredVehicles.length}</span> vehicles
            {activeFilter !== 'All Vehicles' && (
              <span> for <span className="text-accent font-medium">"{activeFilter}"</span></span>
            )}
          </p>
        </motion.div>

        {/* Vehicle Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VehicleCard vehicle={vehicle} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* No Results State */}
        {filteredVehicles.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="glass-card p-12 rounded-2xl max-w-md mx-auto">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium text-foreground mb-2">No vehicles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filter to see more results
              </p>
              <Button 
                onClick={() => setActiveFilter('All Vehicles')}
                className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black"
              >
                Show All Vehicles
              </Button>
            </div>
          </motion.div>
        )}

        {/* Load More */}
        {filteredVehicles.length > 0 && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Button 
              className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black px-8 py-3"
              size="lg"
            >
              Load More Vehicles
            </Button>
            <p className="text-muted-foreground mt-4">
              Showing {filteredVehicles.length} of 2,500+ available vehicles
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}