// JavaScript for Rufus Realm

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Select the button in the hero section
    const galleryButton = document.querySelector('.btn');

    // Add a click event listener to the button
    galleryButton.addEventListener('click', () => {
        alert('Welcome to Rufus's Gallery! Prepare to explore some pawsome pictures!');
    });

    // Example: Add interactive hover effect to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#e68a00'; // Change color on hover
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = ''; // Reset color
        });
    });

    // Future functionality: Add dynamic content or interactive elements here
    // For example, you can load random Rufus facts dynamically or implement a slider.
});

// JavaScript for About Page

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Highlight a random fun fact about Rufus
    const funFacts = document.querySelectorAll('.about ul li');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFacts[randomIndex].style.color = '#ff9933';
    funFacts[randomIndex].style.fontWeight = 'bold';

    // Add click functionality to the image
    const aboutImage = document.querySelector('.about-image');

    aboutImage.addEventListener('click', () => {
        alert('Isn\'t Rufus the cutest? This image is one of our favorites!');
    });
});

// JavaScript for Gallery Page

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Add a click event to each gallery image
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
            alert(`You clicked on: ${img.alt}`);
        });
    });

    // Example: Add dynamic captions or additional interactive features here
    // E.g., Dynamically load a larger version of the image or open in a modal
});

// JavaScript for Fun Facts Page

document.addEventListener('DOMContentLoaded', () => {
    const factContainer = document.getElementById('dog-fact');
    const fetchFactButton = document.getElementById('fetch-fact');
    const dogImage = document.getElementById('dog-image');
    const breedGuessInput = document.getElementById('breed-guess');
    const submitGuessButton = document.getElementById('submit-guess');
    const gameFeedback = document.getElementById('game-feedback');

    const dogFactAPI = 'https://dog-api.kinduff.com/api/facts';
    const dogImageAPI = 'https://dog.ceo/api/breeds/image/random';

    // Fetch a fun dog fact
    async function fetchDogFact() {
        try {
            const response = await fetch(dogFactAPI);
            const data = await response.json();
            factContainer.textContent = data.facts[0];
        } catch (error) {
            factContainer.textContent = 'Failed to fetch a dog fact. Try again later!';
        }
    }

    // Fetch a random dog image
    async function fetchDogImage() {
        try {
            const response = await fetch(dogImageAPI);
            const data = await response.json();
            dogImage.src = data.message;
            dogImage.alt = 'A random dog';
            gameFeedback.textContent = '';
            breedGuessInput.value = '';
        } catch (error) {
            gameFeedback.textContent = 'Failed to load a dog image. Try again later!';
        }
    }

    // Handle breed guessing game
    submitGuessButton.addEventListener('click', () => {
        const userGuess = breedGuessInput.value.toLowerCase();
        const actualBreed = 'pug'; // Always set the correct breed to "pug"

        if (userGuess === actualBreed) {
            gameFeedback.textContent = 'Correct! You guessed it: Pug!';
            gameFeedback.style.color = 'green';
        } else {
            gameFeedback.textContent = `Oops! The correct breed was: ${actualBreed}`;
            gameFeedback.style.color = 'red';
        }
    });

    // Event listeners
    fetchFactButton.addEventListener('click', fetchDogFact);

    // Initialize the page with a fact and an image
    fetchDogFact();
    fetchDogImage();
});

// JavaScript for Contact Page

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    // Handle form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);

        // Reset the form
        contactForm.reset();
    });
});

