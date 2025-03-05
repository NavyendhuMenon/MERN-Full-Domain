//A Proxy is like a "middleman" between you and an object (or function). 
// It allows you to change how things happen when you interact with an object. 
// So, instead of directly accessing or changing properties, you can control and customize what happens.





const target = {
    name : "Navyendhu"
}

const handler = {
    get : function (target, prop){
        console.log(`You accessed the ${prop} property`);

        return prop in target ? target[prop] : "Not found"
        
    }
}

const proxy = new Proxy(target, handler);

console.log(proxy.name)
console.log(proxy.age);
;
