function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([12, 1, 2, 34, 5], 2));
