//removes , replaces or add elements in place


//splice(start, deleteCount, ...items)




let arr =[1,2,3,4,5]


arr.splice(1,2,1000,2500) // first dighit is the from index , 
// second is the total count to be deleted from the index given before, 
// 3rd and 4th will be the replacement number for the deleted ones

console.log(arr); //[ 1, 1000, 2500, 4, 5 ]
