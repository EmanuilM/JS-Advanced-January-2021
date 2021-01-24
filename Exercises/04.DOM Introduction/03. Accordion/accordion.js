function toggle() {
    let btn = document.getElementsByClassName('button')[0];
     let text = document.getElementById('extra');
    if(btn.textContent === 'More') { 
        text.style.display = 'block';
        btn.textContent = 'Less'
    }else { 
        text.style.display = 'none';
        btn.textContent = 'More';


    }
}
