function createArray(lenghtArray, start){
    let array = [];
    for (let index = 0; index < lenghtArray; index++) {
        array.push( index + start);
    }
    return array;
}

// Cách 1: Có thể tìm ra nhiều phần tử bị thiếu trong mảng.
function findMissNumber1(arrayFull, arrayMiss){
    arrayFull.forEach(element => {
        var check = false;
        arrayMiss.forEach(e=>{
            if(element == e){
                check = true;
            }
        })
        if(check == false){
            console.log("Số bị thiếu trong mảng là: ",element);
        }
    });
}

// Cách 2: Do mảng chỉ thiếu 1 số trong dãy số liên tiếp.
function findMissNumber2(arrayMiss, start, end){
    let sum = (start + end)*(end - start + 1)/2
    let sumArrayMiss = 0;
    arrayMiss.forEach(element =>{
        sumArrayMiss += element;
    });
    console.log("Số bị thiếu trong mảng là: ",sum - sumArrayMiss);
}

let arrayFull = createArray(100, 1);
// Array bị thiếu số 7
let arrayMissNumber = [
    1,  2,  3,   4,  5,  6,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ]

findMissNumber1(arrayFull, arrayMissNumber);
findMissNumber2(arrayMissNumber, 1, 100);