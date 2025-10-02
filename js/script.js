// Sample vehicle data with accurate Sri Lankan vehicle images
const vehicles = [
    // Sedans
    {
        id: 1,
        name: 'Toyota Allion 260 1.5L',
        type: 'car',
        price: 'Rs. 8,900,000',
        year: 2020,
        mileage: '25,000 km',
        transmission: 'CVT',
        fuel: 'Hybrid',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Allion/7779/1633426876888/front-left-side-47.jpg',
        features: ['Push Start', 'Smart Entry', 'Reverse Camera', 'Alloy Wheels']
    },
    {
        id: 2,
        name: 'Honda Civic EX 1.5 Turbo',
        type: 'car',
        price: 'Rs. 12,500,000',
        year: 2021,
        mileage: '18,500 km',
        transmission: 'Automatic',
        fuel: 'Petrol',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Civic/8354/1633686694957/front-left-side-47.jpg',
        features: ['Turbo Engine', 'Lane Watch', 'Apple CarPlay', 'Sunroof']
    },
    
    // SUVs
    {
        id: 3,
        name: 'Toyota Land Cruiser Prado',
        type: 'suv',
        price: 'Rs. 42,500,000',
        year: 2022,
        mileage: '12,000 km',
        transmission: 'Automatic',
        fuel: 'Diesel',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Land-Cruiser-Prado/8448/1633673846904/front-left-side-47.jpg',
        features: ['4WD', 'Leather Seats', '360 Camera', 'Panoramic Sunroof']
    },
    {
        id: 4,
        name: 'Mitsubishi Montero Sport',
        type: 'suv',
        price: 'Rs. 18,900,000',
        year: 2021,
        mileage: '22,000 km',
        transmission: 'Automatic',
        fuel: 'Diesel',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mitsubishi/Montero/3608/1559808870130/front-left-side-47.jpg',
        features: ['7 Seater', 'Paddle Shift', 'Dual Zone AC', 'Alloy Wheels']
    },
    
    // Vans
    {
        id: 5,
        name: 'Toyota Hiace Super GL',
        type: 'van',
        price: 'Rs. 16,800,000',
        year: 2022,
        mileage: '15,000 km',
        transmission: 'Automatic',
        fuel: 'Diesel',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Hiace/8461/1676969839943/front-left-side-47.jpg',
        features: ['9 Seater', 'Dual AC', 'Power Doors', 'Alloy Wheels']
    },
    {
        id: 6,
        name: 'Nissan Caravan Premium',
        type: 'van',
        price: 'Rs. 14,500,000',
        year: 2021,
        mileage: '28,000 km',
        transmission: 'Automatic',
        fuel: 'Diesel',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Nissan/Caravan/8567/1676970543456/front-left-side-47.jpg',
        features: ['8 Seater', 'Rear AC', 'Power Windows', 'ABS']
    },
    
    // Hatchbacks
    {
        id: 7,
        name: 'Suzuki Swift RS',
        type: 'car',
        price: 'Rs. 7,200,000',
        year: 2021,
        mileage: '20,500 km',
        transmission: 'Automatic',
        fuel: 'Petrol',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti-Suzuki/Swift/8378/1614747593719/front-left-side-47.jpg',
        features: ['Paddle Shift', 'Push Start', 'Touchscreen', 'Keyless Entry']
    },
    
    // Luxury
    {
        id: 8,
        name: 'Mercedes-Benz C200',
        type: 'car',
        price: 'Rs. 28,500,000',
        year: 2021,
        mileage: '15,500 km',
        transmission: 'Automatic',
        fuel: 'Petrol',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/8455/1632911485487/front-left-side-47.jpg',
        features: ['Leather Seats', 'Panoramic Roof', '360 Camera', 'Heated Seats']
    },
    
    // Electric/Hybrid
    {
        id: 9,
        name: 'Toyota Prius Prime',
        type: 'car',
        price: 'Rs. 15,900,000',
        year: 2022,
        mileage: '8,000 km',
        transmission: 'CVT',
        fuel: 'Plug-in Hybrid',
        image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Prius/6294/1558343772125/front-left-side-47.jpg',
        features: ['EV Mode', 'Solar Roof', 'Wireless Charging', 'Heads-up Display']
    }
];

// DOM Elements
const nav = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const backToTopBtn = document.getElementById('backToTop');
const filterButtons = document.querySelectorAll('.filter-btn');
const vehiclesContainer = document.getElementById('vehiclesContainer');
const statsNumbers = document.querySelectorAll('.stat-number');

// Initialize the page
function init() {
    // Load vehicles
    displayVehicles(vehicles);
    
    // Initialize event listeners
    setupEventListeners();
    
    // Initialize map (this is a placeholder - in a real app, you'd initialize Google Maps here)
    // initMap();
    
    // Animate stats on scroll
    animateStats();
}

// Display vehicles in the grid
function displayVehicles(vehiclesToShow) {
    vehiclesContainer.innerHTML = '';
    
    if (vehiclesToShow.length === 0) {
        vehiclesContainer.innerHTML = '<p class="no-vehicles">No vehicles found matching your criteria.</p>';
        return;
    }
    
    vehiclesToShow.forEach(vehicle => {
        const vehicleCard = document.createElement('div');
        vehicleCard.className = 'vehicle-card';
        
        // Create features HTML
        const featuresHTML = vehicle.features ? 
            vehicle.features.slice(0, 3).map(feature => 
                `<span class="feature"><i class="fas fa-check"></i> ${feature}</span>`
            ).join('') : '';
        
        // Add more features indicator if there are more than 3 features
        const moreFeatures = vehicle.features && vehicle.features.length > 3 ? 
            `<span class="feature more-features">+${vehicle.features.length - 3} more</span>` : '';
        
        vehicleCard.innerHTML = `
            <div class="vehicle-image">
                <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy">
                <div class="vehicle-type">${vehicle.type.toUpperCase()}</div>
            </div>
            <div class="vehicle-details">
                <div class="vehicle-header">
                    <h3>${vehicle.name}</h3>
                    <div class="vehicle-price">${vehicle.price}</div>
                </div>
                <div class="vehicle-info">
                    <div class="info-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${vehicle.year}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <span>${vehicle.mileage}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-cog"></i>
                        <span>${vehicle.transmission}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-gas-pump"></i>
                        <span>${vehicle.fuel}</span>
                    </div>
                </div>
                <div class="vehicle-features">
                    ${featuresHTML}
                    ${moreFeatures}
                </div>
                <button class="cta-button" onclick="viewVehicleDetails(${vehicle.id})">View Details</button>
            </div>
        `;
        
        // Add animation class
        vehicleCard.style.opacity = '0';
        vehicleCard.style.transform = 'translateY(20px)';
        vehicleCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        vehiclesContainer.appendChild(vehicleCard);
        
        // Trigger animation
        setTimeout(() => {
            vehicleCard.style.opacity = '1';
            vehicleCard.style.transform = 'translateY(0)';
        }, 100);
    });
}

// Filter vehicles by type
function filterVehicles(type) {
    if (type === 'all') {
        displayVehicles(vehicles);
    } else {
        const filteredVehicles = vehicles.filter(vehicle => vehicle.type === type);
        displayVehicles(filteredVehicles);
    }
}

// View vehicle details (placeholder function)
function viewVehicleDetails(id) {
    // In a real app, this would navigate to a vehicle details page
    alert(`Viewing details for vehicle ID: ${id}`);
}

// Initialize Google Maps (placeholder function)
function initMap() {
    // In a real app, you would initialize Google Maps here
    // For now, we'll just log to the console
    console.log('Map would be initialized here with Google Maps API');
}

// Animate stats counter
function animateStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statsNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    const count = 0;
                    const duration = 2000; // 2 seconds
                    const step = target / (duration / 16); // 60fps
                    
                    const updateCount = () => {
                        const currentCount = parseFloat(stat.textContent.replace(/,/g, ''));
                        
                        if (currentCount < target) {
                            stat.textContent = Math.ceil(currentCount + step).toLocaleString();
                            requestAnimationFrame(updateCount);
                        } else {
                            stat.textContent = target.toLocaleString();
                        }
                    };
                    
                    updateCount();
                });
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe the stats section
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Back to top button
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter vehicles
            const filterValue = button.getAttribute('data-filter');
            filterVehicles(filterValue);
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would send the form data to a server here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                // In a real app, you would send this to your server
                alert(`Thank you for subscribing with ${email}!`);
                newsletterForm.reset();
            }
        });
    }
}

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
