function solve() {
    return { 
        hasClima (obj) { 
          return  Object.assign(obj , {temp:21 ,tempSettings:21,adjustTemp : function () {
              return  this.temp < this.tempSettings ? this.temp++ : this.temp--; 
            }});
        },
        hasAudio(obj) { 
           return Object.assign(obj , {currentTrack:null , nowPlaying: function() {
               if(this.currentTrack !== null) { 
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
               }
           }} )
        },
        hasParktronic(obj) { 
            return Object.assign(obj , {checkDistance: function(num) {
                if(num < 0.1) { 
                    console.log("Beep! Beep! Beep!");
                }else if(num >= 0.1 && num < 0.25) { 
                    console.log("Beep! Beep!");
                }else if(num >= 0.25 && num < 0.5) { 
                    console.log("Beep!");
                }else { 
                    console.log("");
                }
            }})
        }
    }
}
