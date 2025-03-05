//scope chain is the chain of lexical environment
//lexical env is the local memory + its lexical refernce
//if a function is within another function its lexical scope reference will be its parent

function a(){
    console.log(b);
    
}


var b = 50

a()