function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');
    gradientElement.addEventListener('mousemove' , e => { 
        let result = `${Math.floor((e.offsetX / e.target.clientWidth) * 100)}%`;
        resultElement.innerText = result;

    })
}
