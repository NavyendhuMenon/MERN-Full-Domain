


let array = [10,30,333,21,5]


function findMin(arr){

  return  arr.reduce((a,b)=>a<b,0)
}

console.log(findMin(array));

