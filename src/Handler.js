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
        
        function applyChaos(element) {
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
            applyChaos(calc);
        
            grids.forEach(grid => {
              applyChaos(grid);
            });
        }
        
        setTimeout(() => {
            startChaos();
            chaosIntensity += .1;
        }, 150);
        return "";
    }
}
