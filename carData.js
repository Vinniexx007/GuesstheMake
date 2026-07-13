// Car manufacturer data with logos and countries
// Note: Logo images are placeholders - in a real implementation, you would use the car-logos-dataset
// or host your own logo images with proper licensing considerations

const CAR_DATA = {
    'toyota': {
        name: 'Toyota',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png'
    },
    'bmw': {
        name: 'BMW',
        country: 'Germany',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png'
    },
    'mercedes': {
        name: 'Mercedes-Benz',
        country: 'Germany',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mercedes-Logo.png'
    },
    'ford': {
        name: 'Ford',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Ford-Logo.png'
    },
    'honda': {
        name: 'Honda',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Honda-Logo.png'
    },
    'volkswagen': {
        name: 'Volkswagen',
        country: 'Germany',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Volkswagen-Logo.png'
    },
    'audi': {
        name: 'Audi',
        country: 'Germany',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Audi-Logo.png'
    },
    'nissan': {
        name: 'Nissan',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Nissan-Logo.png'
    },
    'hyundai': {
        name: 'Hyundai',
        country: 'South Korea',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Hyundai-Logo.png'
    },
    'kia': {
        name: 'Kia',
        country: 'South Korea',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Kia-logo.png'
    },
    'ferrari': {
        name: 'Ferrari',
        country: 'Italy',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Ferrari-Logo.png'
    },
    'lamborghini': {
        name: 'Lamborghini',
        country: 'Italy',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Lamborghini-Logo.png'
    },
    'maserati': {
        name: 'Maserati',
        country: 'Italy',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Maserati-Logo.png'
    },
    'alfa-romeo': {
        name: 'Alfa Romeo',
        country: 'Italy',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Alfa-Romeo-Logo.png'
    },
    'fiat': {
        name: 'Fiat',
        country: 'Italy',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Fiat-Logo.png'
    },
    'porsche': {
        name: 'Porsche',
        country: 'Germany',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Porsche-Logo.png'
    },
    'mini': {
        name: 'MINI',
        country: 'United Kingdom',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mini-Logo.png'
    },
    'jaguar': {
        name: 'Jaguar',
        country: 'United Kingdom',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Jaguar-Logo.png'
    },
    'land-rover': {
        name: 'Land Rover',
        country: 'United Kingdom',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Land-Rover-Logo.png'
    },
    'aston-martin': {
        name: 'Aston Martin',
        country: 'United Kingdom',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Aston-Martin-Logo.png'
    },
    'rolls-royce': {
        name: 'Rolls-Royce',
        country: 'United Kingdom',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Rolls-Royce-Logo.png'
    },
    'bentley': {
        name: 'Bentley',
        country: 'United Kingdom',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Bentley-Logo.png'
    },
    'peugeot': {
        name: 'Peugeot',
        country: 'France',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Peugeot-Logo.png'
    },
    'renault': {
        name: 'Renault',
        country: 'France',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Renault-Logo.png'
    },
    'citroen': {
        name: 'Citroën',
        country: 'France',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Citroen-Logo.png'
    },
    'bugatti': {
        name: 'Bugatti',
        country: 'France',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Bugatti-Logo.png'
    },
    'volvo': {
        name: 'Volvo',
        country: 'Sweden',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Volvo-Logo.png'
    },
    'saab': {
        name: 'Saab',
        country: 'Sweden',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Saab-Logo.png'
    },
    'koenigsegg': {
        name: 'Koenigsegg',
        country: 'Sweden',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Koenigsegg-Logo.png'
    },
    'chevrolet': {
        name: 'Chevrolet',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Chevrolet-Logo.png'
    },
    'cadillac': {
        name: 'Cadillac',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Cadillac-Logo.png'
    },
    'dodge': {
        name: 'Dodge',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Dodge-Logo.png'
    },
    'jeep': {
        name: 'Jeep',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Jeep-Logo.png'
    },
    'chrysler': {
        name: 'Chrysler',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Chrysler-Logo.png'
    },
    'tesla': {
        name: 'Tesla',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Tesla-Logo.png'
    },
    'lincoln': {
        name: 'Lincoln',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Lincoln-Logo.png'
    },
    'buick': {
        name: 'Buick',
        country: 'United States',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Buick-Logo.png'
    },
    'mazda': {
        name: 'Mazda',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mazda-Logo.png'
    },
    'subaru': {
        name: 'Subaru',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Subaru-Logo.png'
    },
    'mitsubishi': {
        name: 'Mitsubishi',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Mitsubishi-Logo.png'
    },
    'lexus': {
        name: 'Lexus',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Lexus-Logo.png'
    },
    'infiniti': {
        name: 'Infiniti',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Infiniti-Logo.png'
    },
    'acura': {
        name: 'Acura',
        country: 'Japan',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Acura-Logo.png'
    },
    'genesis': {
        name: 'Genesis',
        country: 'South Korea',
        logo: 'https://logos-world.net/wp-content/uploads/2020/04/Genesis-Logo.png'
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