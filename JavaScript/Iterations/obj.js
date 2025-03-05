

// let obj = {y:[{a:2, b:[], c:12, x: {z:100}}]}``


const myObject = {

    firstName : "Navyendhu",
    secondName : "Menon",
    id : 1999,
    age : 26,
    height : 165,
    username : "navyendhu1999"

}



let objArr =[]


for (let i in myObject){

    let entry =[]

    entry.push(i)

    entry.push(myObject[i])

    objArr.push(entry)
    
}

console.log(objArr);




