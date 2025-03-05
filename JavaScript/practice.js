


function findDuplicate(array){

    const uniqueArray = [];


    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
    
        // Check if the current element exists in the uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (array[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
    
        // If not a duplicate, add it to the uniqueArray
        if (!isDuplicate) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray
}

const array = [1, 2, 2, 3, 4, 4, 5];


console.log(findDuplicate(array)); 

