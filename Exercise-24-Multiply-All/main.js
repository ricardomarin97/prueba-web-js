var nums = [1, 5, 70, -2, -1, -0.5];

function multiplyAll(arr){

    if(arr.length == 0) return null;

    let res= 1;
    for(let i = 0, lens = arr.length; i < lens ; i++){
        res*=arr[i];
    }
    return res

}

console.log(multiplyAll([]));