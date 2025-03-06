

//5. Closures (using lexical scope)


//A closure occurs when an inner function retains access to variables from its outer function,
//even after the outer function has finished executing


function counter (){
    let count =0

    return function (){
        count++
        console.log(count);
        
    }
}


const increment = counter(); // `count` is preserved in memory
increment(); // 1
increment(); // 2
increment(); // 3


// The inner function remembers count even after counter() has executed.



