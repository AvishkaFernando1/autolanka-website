import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VehicleGrid } from './components/VehicleGrid';
import { Locations } from './components/Locations';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main>
        <Hero />
        <VehicleGrid />
        <Locations />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}