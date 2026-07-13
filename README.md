# Car Logo Quiz

A mobile-friendly web app quiz game where players identify car manufacturer logos by guessing their country of origin.

## Features

- **Mobile-optimized**: Touch-friendly interface with large tap targets
- **15-question rounds** with 5-second timer per question
- **Scoring system** with speed bonuses and streak multipliers
- **Local high score** tracking using localStorage
- **Share functionality** for social media
- **Responsive design** that works on phones, tablets, and desktop

## Game Mechanics

- **Base Points**: 100 points per correct answer
- **Speed Bonus**: Up to 50 bonus points based on how quickly you answer
- **Streak Multiplier**: Every 3 correct answers in a row increases multiplier by 0.5x (max 3x)
- **Timer**: 5 seconds per question with visual countdown
- **High Score**: Automatically saved and displayed

## Setup

1. Download or clone all files to a local directory
2. Open `index.html` in a web browser
3. Start playing!

## Files Structure

```
car-logo-quiz/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and responsive design
├── game.js         # Game logic and functionality  
├── carData.js      # Car manufacturer data and logos
└── README.md       # This file
```

## Car Logo Data

The game currently includes 41 well-known car manufacturers from:
- **Japan**: Toyota, Honda, Nissan, Mazda, Subaru, Mitsubishi, Lexus, Infiniti, Acura
- **Germany**: BMW, Mercedes-Benz, Volkswagen, Audi, Porsche
- **United States**: Ford, Chevrolet, Cadillac, Dodge, Jeep, Chrysler, Tesla, Lincoln, Buick
- **United Kingdom**: MINI, Jaguar, Land Rover, Aston Martin, Rolls-Royce, Bentley
- **Italy**: Ferrari, Lamborghini, Maserati, Alfa Romeo, Fiat
- **France**: Peugeot, Renault, Citroën, Bugatti
- **Sweden**: Volvo, Saab, Koenigsegg
- **South Korea**: Hyundai, Kia, Genesis

## Customization

### Adding More Cars

Edit `carData.js` to add more manufacturers:

```javascript
'brand-slug': {
    name: 'Brand Name',
    country: 'Country Name', 
    logo: 'https://path-to-logo-image.png'
}
```

### Adjusting Game Settings

Modify the config object in `game.js`:

```javascript
this.config = {
    totalRounds: 15,           // Number of questions per game
    timePerQuestion: 5000,     // Time limit in milliseconds
    basePoints: 100,           // Points per correct answer
    speedBonusMultiplier: 50,  // Speed bonus calculation
    streakThreshold: 3,        // Streak length for multiplier
    streakBonusMultiplier: 0.5,// Multiplier increase per streak
    maxStreakMultiplier: 3     // Maximum multiplier
};
```

## Logo Licensing Notice

**Important**: The car logos used in this game are trademarks of their respective manufacturers. This implementation uses placeholder URLs for demonstration purposes. For production use:

1. Use the recommended [car-logos-dataset](https://github.com/filippofilip95/car-logos-dataset) 
2. Host logo images yourself 
3. Ensure proper licensing for commercial use
4. Consider trademark implications

## Browser Support

- Modern mobile browsers (iOS Safari, Chrome Mobile, Firefox Mobile)
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Progressive Web App features (optional)

## Performance Optimizations

- Logo images are preloaded for smooth gameplay
- CSS animations are optimized for mobile
- Reduced motion support for accessibility
- Efficient DOM updates during gameplay

## Future Enhancements

Potential v2 features mentioned in the original spec:
- User accounts and global leaderboards
- Difficulty levels (luxury brands, regions, etc.)
- Additional game modes
- PWA capabilities with offline support
- Backend integration for multiplayer features

## Development

To extend or modify the game:

1. **Game Logic**: Edit `game.js` - contains the main `CarLogoQuiz` class
2. **Styling**: Modify `styles.css` - mobile-first responsive design
3. **Data**: Update `carData.js` - add/remove car manufacturers
4. **Structure**: Adjust `index.html` - modify UI elements

The code is organized into clear, modular sections for easy maintenance and feature additions.