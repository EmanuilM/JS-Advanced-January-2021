function solve(input) {
    const listCreator = function() {
        let list = [];
        return { 
            add: function(str) {
                list.push(str);
            },
            remove:function(str) {
              list =   list.filter(x => x!== str);
            },
            print: function () {
                console.log(list.join(','));
            }
        }
    }

    let listProcessor = listCreator();
    input.map(x => x.split(' ')).map(([cmd,text]) => listProcessor[cmd](text))
}
