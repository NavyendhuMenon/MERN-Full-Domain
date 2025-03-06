


//Function Scope 

//A variable declared inside a function is only accessible within that function.
//it cannot be outside the function


function example(){
    let fnVar = "Im inside a function"
    var fn = "im a var"
    console.log(fnVar); // accessile inside the function
    console.log(fn);
    
}

example()
console.log(fn); // this also throw error even if its var in function scope
console.log(fnVar); // Error : fnVar is not defined 



