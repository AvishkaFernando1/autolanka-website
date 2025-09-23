import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    primary: '+94 77 123 4567',
    secondary: '24/7 Customer Service',
    description: 'Speak directly with our automotive experts',
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@autolanka.lk',
    secondary: 'sales@autolanka.lk',
    description: 'Get detailed responses within 2 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Our Showroom',
    primary: 'No. 123, Galle Road',
    secondary: 'Colombo 03, Sri Lanka',
    description: 'Experience our vehicles in person',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    primary: 'Monday - Saturday: 8:00 AM - 8:00 PM',
    secondary: 'Sunday: 9:00 AM - 6:00 PM',
    description: 'We\'re here when you need us',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 relative">
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
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-6xl mb-6">
            Contact <span className="gradient-text">AutoLanka</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to find your dream vehicle? Our team of automotive experts is here to help you 
            every step of the way. Reach out today and let's get you on the road!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card p-6 h-full border-border hover:border-accent transition-all duration-500 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent to-yellow-500">
                    <method.icon className="h-6 w-6 text-black" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{method.title}</h3>
                <p className="text-foreground mb-1">{method.primary}</p>
                <p className="text-muted-foreground text-sm mb-3">{method.secondary}</p>
                <p className="text-muted-foreground text-xs">{method.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-input border-border focus:border-accent" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-input border-border focus:border-accent" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="bg-input border-border focus:border-accent" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    placeholder="+94 77 123 4567" 
                    className="bg-input border-border focus:border-accent" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full h-10 bg-input border border-border rounded-lg px-3 text-foreground focus:border-accent">
                    <option>General Inquiry</option>
                    <option>Vehicle Information</option>
                    <option>Test Drive Request</option>
                    <option>Financing Options</option>
                    <option>Trade-In Valuation</option>
                    <option>After-Sales Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    rows={5}
                    className="bg-input border-border focus:border-accent resize-none" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Map Placeholder */}
            <Card className="glass-card p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Find our exact location and get directions to our showroom.
                </p>
                <Button 
                  variant="outline" 
                  className="border-accent text-accent hover:bg-accent hover:text-black"
                >
                  Open in Maps
                </Button>
              </div>
            </Card>

            {/* Quick Info */}
            <Card className="glass-card p-6">
              <h4 className="text-lg font-bold text-foreground mb-4">Why Choose AutoLanka?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Comprehensive vehicle inspection and history reports
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Flexible financing options with competitive rates
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Extended warranty programs for peace of mind
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Professional after-sales service and support
                </li>
              </ul>
            </Card>

            {/* Emergency Contact */}
            <Card className="glass-card p-6 border-2 border-accent/50">
              <h4 className="text-lg font-bold text-foreground mb-4">Emergency Assistance</h4>
              <p className="text-muted-foreground mb-4">
                Need immediate assistance? Our emergency hotline is available 24/7.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground font-medium">Emergency Hotline</p>
                  <p className="text-accent text-lg font-bold">+94 77 999 8888</p>
                </div>
                <Phone className="h-8 w-8 text-accent" />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}