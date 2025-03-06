

//SCOPE CHAIN


//The scope chain in js is the process of looking for a variable in its own scope and 
//moving outward until it finds the variable or reaches the global scope


//How It Works?
// 1.JavaScript first looks for a variable inside the current function.
// 2.If not found, it checks the outer function (if inside another function).
// 3.If still not found, it keeps going up until the global scope.
// 4.If the variable isn’t found anywhere, JavaScript throws an error.


let globalVar = "I am global";

function outer() {
    let outerVar = "I am in outer function";

    function inner() {
        let innerVar = "I am in inner function";

        console.log(innerVar); // ✅ Found in inner() scope
        console.log(outerVar); // ✅ Found in outer() scope
        console.log(globalVar); // ✅ Found in global scope
    }

    inner();
}

outer();
