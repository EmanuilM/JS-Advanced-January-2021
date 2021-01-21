function edit(element, match, repl) {
    while(element.textContent.includes(match)){
        element.textContent = element.textContent.replace(match, repl)
    } 
}
