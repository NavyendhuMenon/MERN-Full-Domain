

//4. Lexical Scope (Nested Functions)


//inner function can access function from their outer function (parent scope)



function outer (){
    let outerVar = "im from outer"
    var varVar ='CHECKING WITH VAR'

    function inner (){
        console.log(outerVar); //Accessible due to lexical scope

        console.log(varVar); // accessible for var as well
         
    }

    inner()
}


outer()


// The inner function can access outerVar because it is inside outer.