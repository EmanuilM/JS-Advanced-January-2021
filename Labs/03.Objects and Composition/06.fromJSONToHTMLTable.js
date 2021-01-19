  function solve(input) {
    let parse = JSON.parse(input)
    let str = '<table>\n'
    str += `   <tr>${Object.keys(parse[0]).map(x => `<th>${replace(x)}</th>`).join('')}</tr>\n` 
    parse.forEach( x => { str += `   <tr>${Object.values(x).map( x => `<td>${replace(x)}</td>`).join('')}</tr>\n` })
    str += '</table>'
    function replace(str) {
        return String(str)
            .replace(/&/g , '&amp;')
            .replace(/</g , "&lt;")
            .replace(/>/g , "&gt;")
            .replace(/"/g , "&quot;")
            .replace(/'/g , "&#39;")
    }
    return str
}
