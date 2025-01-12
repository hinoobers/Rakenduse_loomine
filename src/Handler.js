export function getPromptValue(name) {
    if(name === "π") {
        //return Math.PI.toString();
        return "π"; // calculate function will replace this with Math.PI
    } else {
        return name
    }
}

export function resetChaoticState() {
    window.location.reload(); // parem viis resetida
    // const root = document.getElementById('root');
    // const calc = document.querySelector('.calc');
    // const grids = document.querySelectorAll('.grid');
    // const buttons = document.querySelectorAll('button');

    // root.style.position = 'static';
    // root.style.left = '0';
    // root.style.top = '0';
    // root.style.transform = 'rotate(0deg) scale(1) translate(0px, 0px)';

    // calc.style.position = 'static';
    // calc.style.left = '0';
    // calc.style.top = '0';
    // calc.style.transform = 'rotate(0deg) scale(1) translate(0px, 0px)';

    // grids.forEach(grid => {
    //   grid.style.position = 'static';
    //   grid.style.left = '0';
    //   grid.style.top = '0';
    //   grid.style.transform = 'rotate(0deg) scale(1) translate(0px, 0px)';
    // });

    // buttons.forEach(button => {
    //   button.style.position = 'static';
    //   button.style.left = '0';
    //   button.style.top = '0';
    //   button.style.transform = 'rotate(0deg) scale(1) translate(0px, 0px)';
    // });
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
        const calc = document.querySelector('.calc');
        const grids = document.querySelectorAll('.grid');
        
        let chaosIntensity =.1;
        
          // Function to apply chaos to an element
        function applyChaos(element) {
            // Randomize position
            const randomLeft = Math.random() * 100 + '%';
            const randomTop = Math.random() * 100 + '%';
            const randomRotate = Math.random() * 720 - 360; 
            const randomScale = Math.random() * 2 + 0.5; 
            const randomX = Math.random() * 200 - 100; 
            const randomY = Math.random() * 200 - 100; 
        
            element.style.position = 'absolute';
            element.style.left = randomLeft;
            element.style.top = randomTop;
            element.style.transform = `rotate(${randomRotate}deg) scale(${randomScale}) translate(${randomX}px, ${randomY}px)`;
        }
        
        document.getElementsByClassName('resetbtn')[0].style.display = 'block';

        function startChaos() {
            // Apply chaos to calc
            applyChaos(calc);
        
            // Apply chaos to all grid containers
            grids.forEach(grid => {
              applyChaos(grid);
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
