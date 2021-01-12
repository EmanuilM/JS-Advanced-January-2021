function solve(steps , stepsLength , speed) {

    let metersDistance=steps * stepsLength
    let speedMeters=speed / 3.6
    let time=metersDistance / speedMeters + Math.floor(metersDistance / 500) * 60
    let hours=Math.floor(time/3600)
    let mins=Math.floor(time/60)
    let secs=Math.round(time%60)
    console.log(`${hours < 10? 0 : ""}${hours}:${mins <10 ? 0 : ""}${mins}:${secs < 10 ? 0 : ""}${secs}`);

} 
