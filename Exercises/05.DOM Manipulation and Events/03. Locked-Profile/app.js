function lockedProfile() {
    Array.from(document.getElementsByClassName('profile')).forEach(perant => { 
        let btn = perant.querySelectorAll('button')[0];
        
        btn.addEventListener('click' , () => { 
            let unlockElement = perant.querySelectorAll('input')[1].checked;
            let hiddenDiv = perant.querySelectorAll('div')[0];
            if(unlockElement) { 
                
                if(btn.textContent === 'Show more') { 
                    hiddenDiv.style.display = 'block';
                    btn.textContent = 'Hide it';
                }else { 
                    hiddenDiv.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            }
        });

    }); 
    
}
