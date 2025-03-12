
//shallow copy

// A shallow copy creates a new object but still referebces the same nested objects in memory.
//Changes to nested object will reflect in both the orginal amd copied object

let orginal = {a:1, b: {c:2}}

let shallowCopy = {...orginal}

shallowCopy.b.c =1000

console.log(orginal.b.c); //1000




//deep copy 

let orginals = {a: 1, b: {c:2}}
let deepCopy = JSON.parse(JSON.stringify(orginals))

deepCopy.b.c = 1000

console.log(orginals.b.c); //2




let obj1 = {a:1, b :{c:33}}

let shallow = {...obj1}

shallow.b.c = 100


console.log(obj1.b.c);


let obj2 ={a:1, b :{c:33}}


let deep = JSON.parse(JSON.stringify(obj2))

deep.b.c = 1000

console.log(obj2.b.c);









