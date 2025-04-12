window.addEventListener('load', initializeApp);

function initializeApp() {
    // Selectors
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    
    // Colors for bubbles
    const colors = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#6860d3', '#60d394'];

    // Test how look this element
    console.log(sounds);
    
    // Setup event listeners
    setupPadEventListeners(pads, sounds, visual, colors);
}

function setupPadEventListeners(pads, sounds, visual, colors) {
    // By each pad add this
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            playSound(sounds[index]);
            createBubbles(index, visual, colors);
        });
    });
}

function playSound(sound) {
    // Reset music
    sound.currentTime = 0;
    // Play music for taping
    sound.play();
}

function createBubbles(index, visual, colors) {
    // Create an html element
    const bubble = document.createElement('div');
    // Append element
    visual.appendChild(bubble);
    // Adding color by index from array colors and div pads
    bubble.style.backgroundColor = colors[index];
    // Adding an animation
    bubble.style.animation = `jump${index} 1s ease`;
    // Finishing the animation remove bubble element
    bubble.addEventListener('animationend', function() {
        visual.removeChild(this);
    });
}