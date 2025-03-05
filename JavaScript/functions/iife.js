

(function(name){
    console.log(`Iam ${name}`);
    
})("Navyendhu")


var name = "Global";

(function() {
  var name = "Local";
  console.log("Inside IIFE: " + name); // "Local"
})();

console.log("Outside IIFE: " + name); // "Global"



