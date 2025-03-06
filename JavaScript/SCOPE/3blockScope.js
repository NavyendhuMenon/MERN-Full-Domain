


//Block Scope (introduced in Es6)

//Variables  declared using let or const inside {} (CURLY BRACES) are limited to the block
//var does not have block scope -- it ignores block boundaries


if (true){

    let blockVar = "Im inside a block"
    console.log(blockVar);// accessible here
    
}

console.log(blockVar); // Error : blockvar not defined


//blockvar is not accessible outside the if block for let and const


//var vs let in block scope


if (true){
    let testLet = "im using let"
    var testVar = "im using var"
}

console.log(testLet);
console.log(testVar);




