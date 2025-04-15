// // Bubble Sort

// let arr=[5,8,2,1,3,10,7,4]

// for(let i=0;i<arr.length-1;i++) {
//     for(let j=0;j<arr.length-1-i;j++)  {
//          console.log(i, j);
//         if(arr[j]>arr[j+1]) {
//             const temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//             // [arr[j],arr[j+1]]=[arr[j+1],arr[j]] // short version with destructuring

//         }
//     }
// }
// console.log(arr)

// Linear

// Selection Sort

let arr = [5, 3, 6, 12, 32, 4, 23, 7];

function SelectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxNumIndex = 0;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] > arr[maxNumIndex]) {
        maxNumIndex = j;
      }
    }
    let temp = arr[maxNumIndex];
    arr[maxNumIndex] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  console.log(arr);
}

SelectionSort(arr);
