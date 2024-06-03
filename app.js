window.addEventListener('load', () => {
    
    //Selectors
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    
    //Colors for bubbles
    const colors = ['#60d394', '#d36060', '#c060d3', '#d3d160', '#6860d3', '#60d394']

    //Test how look this element
    console.log(sounds);

    //By each pad add this
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            //Reset music
            sounds[index].currentTime = 0;
            //Play music for taping
            sounds[index].play();

            //Invoke function to create bubbles and pass index
            createBubbles(index);
        });
    });
    
    //Create function makes bubbles
    const createBubbles = (index) => {
        //Create an html element
        const bubble = document.createElement('div');
        //Append element
        visual.appendChild(bubble);
        //Adding color by index from array colors and div pads
        bubble.style.backgroundColor = colors[index];
        //Adding an animation
        bubble.style.animation = `jump${index} 1s ease`;
        //Finshing the animation remove bubble element
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    };

});