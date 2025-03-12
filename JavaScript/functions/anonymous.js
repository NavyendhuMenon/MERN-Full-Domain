

//anonymous functions are functions without a name 
//it can be used in cases where the function is only needed for temporary


setTimeout (function(){
    console.log("this is anonymous");
    
},1000)


const anonFunc = function() {
    console.log("this is anonymous");
};
anonFunc();
