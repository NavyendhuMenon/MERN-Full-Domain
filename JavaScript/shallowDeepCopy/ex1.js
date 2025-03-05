
//shallow copy

let orginal = {a:1, b: {c:2}}

let shallowCopy = {...orginal}

shallowCopy.b.c =1000

console.log(orginal.b.c);


//deep copy 

let orginals = {a: 1, b: {c:2}}
let deepCopy = JSON.parse(JSON.stringify(orginals))

deepCopy.b.c = 1000

console.log(orginals.b.c);



