function encodeAndDecodeMessages() {
    let [encodeBtn , decodeBtn] = document.getElementsByTagName('button');
    let [messageArea , lastMsg] = document.getElementsByTagName('textarea');

    encodeBtn.addEventListener('click' , () => { 
        if(messageArea.value !== '') { 
            let currentMsg = Array.from(messageArea.value).map(x => x = String.fromCharCode(x.charCodeAt(0) + 1))
            .reduce((a,b) => {
               return a + b;
            }, '');
            
            lastMsg.value = currentMsg;
            messageArea.value = '';
        }
    });

    decodeBtn.addEventListener('click' , () => { 
        let msg = Array.from(lastMsg.value).map(x => x = String.fromCharCode(x.charCodeAt(0) - 1))
        .reduce((a,b) => { 
            return a + b;
        } , '')

        lastMsg.value = msg;
        
    });
    
}


