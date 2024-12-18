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
    let modified = prompt.replaceAll("xY", "**");
    modified = modified.replaceAll("x", "*");
    modified = modified.replaceAll("π", "Math.PI");

    try {
        return eval(modified);
    } catch(err) {
        return 'Error'
    }
}
