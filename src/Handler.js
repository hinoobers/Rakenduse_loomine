export function getPromptValue(name) {
    if(name === "π") {
        //return Math.PI.toString();
        return "π"; // calculate function will replace this with Math.PI
    } else {
        return name
    }
}

export function calculate(prompt) {
    // do all the calculations
    prompt = prompt.replace(/π(?=π)/g, 'πx')  
            .replace(/π(\d)/g, 'πx$1') 
            .replace(/(\d|\))π/g, '$1xπ')
    console.log(prompt);
    let modified = prompt.replaceAll("x^y", "**");
    modified = modified.replaceAll("x", "*");
    modified = modified.replaceAll("π", "Math.PI");

    try {
        return eval(modified);
    } catch(err) {
        const root = document.getElementById('root');
        const calc = document.querySelector('.calc');
        const grids = document.querySelectorAll('.grid');
        const buttons = document.querySelectorAll('button');
        
        let chaosIntensity =.1; // Intensity of chaos (higher values mean more randomization)
        
          // Function to apply chaos to an element
        function applyChaos(element) {
            // Randomize position
            const randomLeft = Math.random() * 100 + '%';
            const randomTop = Math.random() * 100 + '%';
            const randomRotate = Math.random() * 720 - 360; // random rotation between -360 and 360 degrees
            const randomScale = Math.random() * 2 + 0.5; // scale between 0.5 and 2 times the original size
            const randomX = Math.random() * 200 - 100; // Random X-axis position change
            const randomY = Math.random() * 200 - 100; // Random Y-axis position change
        
            element.style.position = 'absolute';
            element.style.left = randomLeft;
            element.style.top = randomTop;
            element.style.transform = `rotate(${randomRotate}deg) scale(${randomScale}) translate(${randomX}px, ${randomY}px)`;
        }
        
          // Chaos function to be applied on the entire root and children periodically
        function startChaos() {
            // Apply chaos to root element
            applyChaos(root);
        
            // Apply chaos to calc
            applyChaos(calc);
        
            // Apply chaos to all grid containers
            grids.forEach(grid => {
              applyChaos(grid);
            });
        
            // Apply chaos to all buttons
            buttons.forEach(button => {
              applyChaos(button);
            });
        }
        
        // Start the chaotic effect periodically
        setTimeout(() => {
            startChaos();
            chaosIntensity += .1;
        }, 150);
        return "";
    }
}
