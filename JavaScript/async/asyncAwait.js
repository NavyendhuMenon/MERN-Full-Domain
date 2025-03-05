

function delay(){

    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{

            console.log("Iam making a delay");


            let success = true

            if (success){

                resolve("Delayed")

            }else{
                reject("Something went wrong")
            }

            
        }, 1000)
    })
}


async function hello() {

    console.log("Iam in hello111");


   await delay()
   .then((result) => {
       console.log("Handled with .then():", result); // Logs the resolved value
   })
   .catch((error) => {
       console.error("Handled with .catch():", error); // Logs the error if rejected
   });

//    console.log(result);
   


    console.log("I got delayed by settimout");
    
    
    
}

hello()


// Simulating asynchronous tasks using Promises
// function boilWater() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Water is boiled.");
//             resolve("Boiled Water");
//         }, 2000); // Simulates 2 seconds delay
//     });
// }

// function cookPasta(boiledWater) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(`Pasta is cooked using ${boiledWater}.`);
//             resolve("Cooked Pasta");
//         }, 3000); // Simulates 3 seconds delay
//     });
// }

// // Using async/await
// async function makePasta() {
//     console.log("Starting to cook...");
//     const boiledWater = await boilWater(); // Wait for water to boil
//     const cookedPasta = await cookPasta(boiledWater); // Wait for pasta to cook
//     console.log(cookedPasta); // Pasta is ready
//     console.log("Meal is ready to serve!");
// }

// makePasta();




