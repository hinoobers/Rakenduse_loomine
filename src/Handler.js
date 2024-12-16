export function getPromptValue(name) {
    if(name == "pi") {
        //return Math.PI.toString();
        return "pi"; // calculate function will replace this with Math.PI
    } else {
        return name
    }
}

export function calculate(prompt) {
    // do all the calculation
    console.log(prompt);
    let modified = prompt.replaceAll("xY", "**");
    modified = modified.replaceAll("x", "*");
    modified = modified.replaceAll("pi", "Math.PI");
    
    return eval(modified);
}
