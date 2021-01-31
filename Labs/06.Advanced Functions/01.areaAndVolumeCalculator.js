function solve(area,vol,arr) {
    return JSON.parse(arr).map(x => { 
        return { 
            area: Math.abs(area.call(x)),
            volume : Math.abs(vol.call(x))
        }
    })
}
