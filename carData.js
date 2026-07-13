// Car manufacturer data with reliable logo sources
// Using multiple fallback sources for better reliability

const CAR_DATA = {
    'toyota': {
        name: 'Toyota',
        country: 'Japan',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/toyota.png'
    },
    'bmw': {
        name: 'BMW',
        country: 'Germany',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/bmw.png'
    },
    'mercedes': {
        name: 'Mercedes-Benz',
        country: 'Germany',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/mercedes-benz.png'
    },
    'ford': {
        name: 'Ford',
        country: 'United States',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/ford.png'
    },
    'honda': {
        name: 'Honda',
        country: 'Japan',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/honda.png'
    },
    'volkswagen': {
        name: 'Volkswagen',
        country: 'Germany',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/volkswagen.png'
    },
    'audi': {
        name: 'Audi',
        country: 'Germany',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/audi.png'
    },
    'nissan': {
        name: 'Nissan',
        country: 'Japan',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/nissan.png'
    },
    'ferrari': {
        name: 'Ferrari',
        country: 'Italy',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/ferrari.png'
    },
    'lamborghini': {
        name: 'Lamborghini',
        country: 'Italy',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/lamborghini.png'
    }
,
    'porsche': {
        name: 'Porsche',
        country: 'Germany',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/porsche.png'
    },
    'jaguar': {
        name: 'Jaguar',
        country: 'United Kingdom',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/jaguar.png'
    },
    'volvo': {
        name: 'Volvo',
        country: 'Sweden',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/volvo.png'
    },
    'tesla': {
        name: 'Tesla',
        country: 'United States',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/tesla.png'
    },
    'mazda': {
        name: 'Mazda',
        country: 'Japan',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/mazda.png'
    },
    'hyundai': {
        name: 'Hyundai',
        country: 'South Korea',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/hyundai.png'
    },
    'kia': {
        name: 'Kia',
        country: 'South Korea',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/kia.png'
    },
    'peugeot': {
        name: 'Peugeot',
        country: 'France',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/peugeot.png'
    },
    'renault': {
        name: 'Renault',
        country: 'France',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/renault.png'
    },
    'chevrolet': {
        name: 'Chevrolet',
        country: 'United States',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/chevrolet.png'
    },
    'lexus': {
        name: 'Lexus',
        country: 'Japan',
        logo: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset/images/optimized/lexus.png'
    }
};

// Get all unique countries from the dataset
const getAllCountries = () => {
    const countries = new Set();
    Object.values(CAR_DATA).forEach(car => {
        countries.add(car.country);
    });
    return Array.from(countries);
};

// Get all car brands as an array
const getAllBrands = () => {
    return Object.keys(CAR_DATA);
};

// Get brands from a specific country
const getBrandsByCountry = (country) => {
    return Object.entries(CAR_DATA)
        .filter(([_, data]) => data.country === country)
        .map(([brand, _]) => brand);
};

// Export for use in game.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CAR_DATA, getAllCountries, getAllBrands, getBrandsByCountry };
}