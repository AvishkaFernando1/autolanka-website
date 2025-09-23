import { motion } from 'motion/react';
import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const features = [
  {
    icon: Shield,
    title: 'Verified Quality',
    description: 'Every vehicle undergoes rigorous inspection to ensure premium quality and safety standards.',
  },
  {
    icon: Award,
    title: 'Expert Service',
    description: 'Our certified automotive experts provide personalized guidance throughout your buying journey.',
  },
  {
    icon: Users,
    title: 'Trusted Network',
    description: 'Partner with verified dealers across Sri Lanka who maintain the highest standards of service.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to assist you with inquiries and after-sales service.',
  },
];

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '10,000+', label: 'Happy Customers' },
  { number: '2,500+', label: 'Vehicles Sold' },
  { number: '98%', label: 'Customer Satisfaction' },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
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
            About AutoLanka
          </Badge>
          <h2 className="text-4xl md:text-6xl mb-6">
            Your Trusted <span className="gradient-text">Automotive Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over 15 years, AutoLanka has been Sri Lanka's premier destination for premium vehicles, 
            connecting discerning buyers with exceptional automobiles from trusted dealers island-wide.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Story Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2009, AutoLanka began as a small automotive dealership in Colombo with a simple mission: 
                to make premium vehicle ownership accessible and transparent for every Sri Lankan family.
              </p>
              <p>
                Today, we've grown into the island's most trusted automotive marketplace, featuring an extensive 
                network of verified dealers, comprehensive vehicle inspections, and unmatched customer service 
                that has earned the trust of over 10,000 satisfied customers.
              </p>
              <p>
                Our commitment to excellence, transparency, and customer satisfaction has made us the preferred 
                choice for premium vehicle purchases across Sri Lanka.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 space-y-3">
              {[
                'ISO 9001:2015 Certified Quality Management',
                'Comprehensive Vehicle History Reports',
                'Extended Warranty Programs Available',
                'Nationwide After-Sales Service Network'
              ].map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass-card p-6 h-full border-border hover:border-accent transition-all duration-500">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-accent to-yellow-500 mr-3">
                      <feature.icon className="h-6 w-6 text-black" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{feature.title}</h4>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Thousands Across <span className="gradient-text">Sri Lanka</span>
            </h3>
            <p className="text-muted-foreground">
              Our numbers speak for themselves - a testament to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="gradient-text text-4xl md:text-5xl mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <Card className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
            <Star className="h-12 w-12 text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To revolutionize the automotive industry in Sri Lanka by providing transparent, 
              reliable, and exceptional vehicle buying experiences that exceed customer expectations 
              while fostering long-term relationships built on trust and integrity."
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}