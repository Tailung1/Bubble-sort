let arr=[5,8,2,1,3,10,7,4]

for(let i=0;i<arr.length-1;i++) {
    for(let j=0;j<arr.length-1-i;j++)  {
        if(arr[j]>arr[j+1]) {
            const temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            // [arr[j],arr[j+1]]=[arr[j+1],arr[j]] // short version with destructuring
        }
    }
}
console.log(arr)