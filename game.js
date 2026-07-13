class CarLogoQuiz {
    constructor() {
        // Game configuration
        this.config = {
            totalRounds: 15,
            timePerQuestion: 5000, // 5 seconds in milliseconds
            basePoints: 100,
            speedBonusMultiplier: 50,
            streakThreshold: 3,
            streakBonusMultiplier: 0.5,
            maxStreakMultiplier: 3
        };

        // Game state
        this.gameState = {
            currentRound: 0,
            score: 0,
            correctAnswers: 0,
            currentStreak: 0,
            maxStreak: 0,
            streakMultiplier: 1,
            usedBrands: new Set(),
            currentQuestion: null,
            timer: null,
            startTime: null,
            isGameActive: false
        };

        // DOM elements
        this.elements = {
            homeScreen: document.getElementById('home-screen'),
            gameScreen: document.getElementById('game-screen'),
            resultsScreen: document.getElementById('results-screen'),
            startBtn: document.getElementById('start-btn'),
            playAgainBtn: document.getElementById('play-again-btn'),
            shareBtn: document.getElementById('share-btn'),
            bestScore: document.getElementById('best-score'),
            currentRound: document.getElementById('current-round'),
            totalRounds: document.getElementById('total-rounds'),
            currentScore: document.getElementById('current-score'),
            timerBar: document.getElementById('timer-bar'),
            logoImage: document.getElementById('logo-image'),
            answerBtns: document.querySelectorAll('.answer-btn'),
            streakIndicator: document.getElementById('streak-indicator'),
            streakCount: document.getElementById('streak-count'),
            finalScore: document.getElementById('final-score'),
            accuracy: document.getElementById('accuracy'),
            resultsBestScore: document.getElementById('results-best-score'),
            correctAnswersSpan: document.getElementById('correct-answers'),
            maxStreakSpan: document.getElementById('max-streak'),
            newRecord: document.getElementById('new-record')
        };

        this.init();
    }

    init() {
        // Set total rounds in UI
        this.elements.totalRounds.textContent = this.config.totalRounds;
        
        // Load and display best score
        this.loadBestScore();
        
        // Bind event listeners
        this.bindEvents();
        
        // Preload some images (optional performance optimization)
        this.preloadImages();
    }

    bindEvents() {
        this.elements.startBtn.addEventListener('click', () => this.startGame());
        this.elements.playAgainBtn.addEventListener('click', () => this.startGame());
        this.elements.shareBtn.addEventListener('click', () => this.shareScore());
        
        // Answer button events
        this.elements.answerBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAnswer(e.target));
        });
    }

    preloadImages() {
        // Preload a few random logo images for smoother gameplay
        const brandKeys = Object.keys(CAR_DATA);
        const samplesToPreload = Math.min(5, brandKeys.length);
        
        for (let i = 0; i < samplesToPreload; i++) {
            const randomBrand = brandKeys[Math.floor(Math.random() * brandKeys.length)];
            const img = new Image();
            img.src = CAR_DATA[randomBrand].logo;
        }
    }

    loadBestScore() {
        const bestScore = localStorage.getItem('carQuizBestScore') || '0';
        this.elements.bestScore.textContent = bestScore;
        this.elements.resultsBestScore.textContent = bestScore;
    }

    saveBestScore(score) {
        const currentBest = parseInt(localStorage.getItem('carQuizBestScore') || '0');
        if (score > currentBest) {
            localStorage.setItem('carQuizBestScore', score.toString());
            this.elements.newRecord.classList.remove('hidden');
            return true;
        }
        return false;
    }

    startGame() {
        // Reset game state
        this.gameState = {
            currentRound: 0,
            score: 0,
            correctAnswers: 0,
            currentStreak: 0,
            maxStreak: 0,
            streakMultiplier: 1,
            usedBrands: new Set(),
            currentQuestion: null,
            timer: null,
            startTime: null,
            isGameActive: true
        };

        // Show game screen
        this.showScreen('game');
        
        // Start first round
        this.nextRound();
    }

    showScreen(screenName) {
        // Hide all screens
        Object.values(this.elements).forEach(element => {
            if (element && element.classList && element.classList.contains('screen')) {
                element.classList.remove('active');
            }
        });

        // Show target screen
        const targetScreen = this.elements[screenName + 'Screen'];
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }

    nextRound() {
        if (this.gameState.currentRound >= this.config.totalRounds) {
            this.endGame();
            return;
        }

        this.gameState.currentRound++;
        this.updateUI();
        this.generateQuestion();
        this.startTimer();
    }

    generateQuestion() {
        // Get available brands (not used in this session)
        const allBrands = Object.keys(CAR_DATA);
        const availableBrands = allBrands.filter(brand => !this.gameState.usedBrands.has(brand));
        
        if (availableBrands.length === 0) {
            // If all brands used, reset the pool
            this.gameState.usedBrands.clear();
            availableBrands.push(...allBrands);
        }

        // Select random brand
        const selectedBrand = availableBrands[Math.floor(Math.random() * availableBrands.length)];
        this.gameState.usedBrands.add(selectedBrand);
        
        const correctAnswer = CAR_DATA[selectedBrand].country;
        
        // Generate distractor countries
        const allCountries = getAllCountries();
        const availableCountries = allCountries.filter(country => country !== correctAnswer);
        
        // Weighted selection for more challenging distractors
        const distractors = this.selectDistractors(availableCountries, correctAnswer, 2);
        
        // Create answer options
        const options = [correctAnswer, ...distractors];
        this.shuffleArray(options);
        
        // Store current question data
        this.gameState.currentQuestion = {
            brand: selectedBrand,
            correctAnswer: correctAnswer,
            options: options
        };

        // Update UI
        this.displayQuestion();
        
        // Preload next logo if there's a next round
        if (this.gameState.currentRound < this.config.totalRounds && availableBrands.length > 1) {
            const nextBrand = availableBrands.find(brand => brand !== selectedBrand);
            if (nextBrand) {
                const nextImg = new Image();
                nextImg.src = CAR_DATA[nextBrand].logo;
            }
        }
    }

    selectDistractors(availableCountries, correctAnswer, count) {
        // Simple random selection for now
        // Could be enhanced with weighted selection based on geographic proximity or brand count
        const shuffled = [...availableCountries];
        this.shuffleArray(shuffled);
        return shuffled.slice(0, count);
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    displayQuestion() {
        const question = this.gameState.currentQuestion;
        const carData = CAR_DATA[question.brand];
        
        // Update logo with fallback handling
        const logoImg = this.elements.logoImage;
        const logoContainer = logoImg.parentElement;
        
        // Clear any existing fallback
        const existingFallback = logoContainer.querySelector('.logo-fallback');
        if (existingFallback) {
            existingFallback.remove();
        }
        
        // Try to load the logo
        logoImg.src = carData.logo;
        logoImg.alt = `${carData.name} logo`;
        logoImg.style.display = 'block';
        
        // Add error handling in case it fails
        logoImg.onerror = () => {
            this.showLogoFallback(carData, logoContainer);
            logoImg.style.display = 'none';
        };
        
        // Update answer buttons
        this.elements.answerBtns.forEach((btn, index) => {
            btn.textContent = question.options[index];
            btn.dataset.country = question.options[index];
            btn.classList.remove('correct', 'incorrect');
            btn.disabled = false;
        });
    }

    showLogoFallback(carData, logoContainer) {
        const fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'logo-fallback';
        fallbackDiv.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 2rem;
                border-radius: 12px;
                text-align: center;
                min-height: 120px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                font-family: 'Inter', -apple-system, sans-serif;
            ">
                <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🚗</div>
                <h3 style="margin: 0; font-size: 1.3rem; font-weight: bold; letter-spacing: 0.05em;">${carData.name}</h3>
                <p style="margin: 0.25rem 0 0 0; font-size: 0.9rem; opacity: 0.9;">Guess the country!</p>
            </div>
        `;
        logoContainer.appendChild(fallbackDiv);
    }

    startTimer() {
        this.gameState.startTime = Date.now();
        let timeLeft = this.config.timePerQuestion;
        
        this.gameState.timer = setInterval(() => {
            timeLeft -= 100;
            const percentage = (timeLeft / this.config.timePerQuestion) * 100;
            
            this.elements.timerBar.style.width = percentage + '%';
            
            // Add warning class when time is running low
            if (percentage < 30) {
                this.elements.timerBar.classList.add('warning');
            }
            
            if (timeLeft <= 0) {
                this.handleTimeout();
            }
        }, 100);
    }

    stopTimer() {
        if (this.gameState.timer) {
            clearInterval(this.gameState.timer);
            this.gameState.timer = null;
        }
        this.elements.timerBar.classList.remove('warning');
    }

    handleAnswer(selectedBtn) {
        if (!this.gameState.isGameActive) return;
        
        const selectedCountry = selectedBtn.dataset.country;
        const correctCountry = this.gameState.currentQuestion.correctAnswer;
        const isCorrect = selectedCountry === correctCountry;
        
        // Stop timer
        this.stopTimer();
        
        // Calculate score
        if (isCorrect) {
            const timeElapsed = Date.now() - this.gameState.startTime;
            const timeLeftFraction = Math.max(0, (this.config.timePerQuestion - timeElapsed) / this.config.timePerQuestion);
            const speedBonus = Math.round(timeLeftFraction * this.config.speedBonusMultiplier);
            const basePoints = this.config.basePoints;
            const totalPoints = Math.round((basePoints + speedBonus) * this.gameState.streakMultiplier);
            
            this.gameState.score += totalPoints;
            this.gameState.correctAnswers++;
            this.gameState.currentStreak++;
            this.gameState.maxStreak = Math.max(this.gameState.maxStreak, this.gameState.currentStreak);
            
            // Update streak multiplier
            if (this.gameState.currentStreak % this.config.streakThreshold === 0) {
                this.gameState.streakMultiplier = Math.min(
                    this.config.maxStreakMultiplier,
                    1 + (Math.floor(this.gameState.currentStreak / this.config.streakThreshold) * this.config.streakBonusMultiplier)
                );
            }
        } else {
            this.gameState.currentStreak = 0;
            this.gameState.streakMultiplier = 1;
        }
        
        // Visual feedback
        this.showAnswerFeedback(selectedBtn, isCorrect);
        
        // Update UI
        this.updateUI();
        
        // Continue to next round after delay
        setTimeout(() => {
            this.nextRound();
        }, 1200);
    }

    handleTimeout() {
        this.handleAnswer({ dataset: { country: '' } }); // Simulate wrong answer
    }

    showAnswerFeedback(selectedBtn, isCorrect) {
        // Disable all buttons
        this.elements.answerBtns.forEach(btn => {
            btn.disabled = true;
        });
        
        // Show correct answer
        this.elements.answerBtns.forEach(btn => {
            if (btn.dataset.country === this.gameState.currentQuestion.correctAnswer) {
                btn.classList.add('correct');
            }
        });
        
        // Show incorrect selection if wrong
        if (!isCorrect && selectedBtn.dataset.country) {
            selectedBtn.classList.add('incorrect');
        }
        
        // Show streak indicator if there's a streak
        if (this.gameState.currentStreak >= this.config.streakThreshold) {
            this.elements.streakCount.textContent = this.gameState.currentStreak;
            this.elements.streakIndicator.classList.remove('hidden');
            setTimeout(() => {
                this.elements.streakIndicator.classList.add('hidden');
            }, 1000);
        }
    }

    updateUI() {
        this.elements.currentRound.textContent = this.gameState.currentRound;
        this.elements.currentScore.textContent = this.gameState.score;
        
        // Reset timer bar
        this.elements.timerBar.style.width = '100%';
    }

    endGame() {
        this.gameState.isGameActive = false;
        this.stopTimer();
        
        // Calculate final stats
        const accuracy = Math.round((this.gameState.correctAnswers / this.config.totalRounds) * 100);
        
        // Update results UI
        this.elements.finalScore.textContent = this.gameState.score;
        this.elements.accuracy.textContent = accuracy + '%';
        this.elements.correctAnswersSpan.textContent = `${this.gameState.correctAnswers}/${this.config.totalRounds}`;
        this.elements.maxStreakSpan.textContent = this.gameState.maxStreak;
        
        // Check for new best score
        const isNewRecord = this.saveBestScore(this.gameState.score);
        if (!isNewRecord) {
            this.elements.newRecord.classList.add('hidden');
        }
        
        // Update best score display
        this.loadBestScore();
        
        // Show results screen
        this.showScreen('results');
    }

    shareScore() {
        const accuracy = Math.round((this.gameState.correctAnswers / this.config.totalRounds) * 100);
        const text = `🏎️ I scored ${this.gameState.score} points on Car Logo Quiz! Got ${this.gameState.correctAnswers}/${this.config.totalRounds} correct (${accuracy}%) with a max streak of ${this.gameState.maxStreak}. Can you beat it?`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Car Logo Quiz Score',
                text: text,
                url: window.location.href
            }).catch(console.error);
        } else {
            // Fallback to clipboard
            navigator.clipboard.writeText(text).then(() => {
                // Show temporary feedback
                const originalText = this.elements.shareBtn.textContent;
                this.elements.shareBtn.textContent = 'Copied!';
                setTimeout(() => {
                    this.elements.shareBtn.textContent = originalText;
                }, 2000);
            }).catch(() => {
                // Fallback to alert
                alert('Share this score:\n\n' + text);
            });
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.carLogoQuiz = new CarLogoQuiz();
});

// Prevent zoom on double tap (iOS Safari)
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Handle device orientation changes
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        // Recalculate viewport height
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }, 500);
});

// Set initial viewport height
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);