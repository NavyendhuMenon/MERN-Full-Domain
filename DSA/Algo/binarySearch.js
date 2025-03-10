

function binarySearch(arr, target){

    let left =0
    let right = arr.length -1


    while(left<=right){

        let mid = Math.floor((left+right)/2)

        if (arr[mid]=== target){
            return mid
        }else if(arr[mid]<target){

            left = mid +1

        }else{
            right = mid-1
        }
    }

    return "Couldnt find the target "

}

const numbers = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72]
console.log(binarySearch(numbers, 23))
console.log(binarySearch(numbers, 99))