function solution() {
    let text = '' ; 
    return { 
        append: str => text += str,
        removeStart: n => text =  text.substr(n),
        removeEnd: n => text = text.substr(0 , text.length - n),
        print: () => console.log(text),

    } 

}
