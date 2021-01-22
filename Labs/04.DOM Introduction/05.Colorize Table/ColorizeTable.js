function colorize() {
    let data = Array.from(document.querySelectorAll('table , tbody , tr')).splice(3);
    data.forEach((x,i) => { 
        if(i % 2 === 0) { 
            data[i].style.backgroundColor = 'teal';
        }
    })
}
