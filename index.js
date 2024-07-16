//1.creating an array 
let arr=[1,2,5,7,9,3,5,6,7]
function array(){
    return arr
}
console.log(array(arr+ " "))

//2.Max and Min value of array

let min=9999999
let max=-1234
for(let i=0;i<arr.length;i++)
{
    if(max<arr[i])
        max=arr[i]
    
}

console.log("Maximum number is "+max)
for(let i=0;i<arr.length;i++)
    {
        if(min>arr[i])
            min=arr[i]
        
    }
console.log("Minimum number is "+min)

//3.merging the Array

let arr2=[12,13,14,15,16,17,18,19]
console.log(arr+arr2)

//4. check the array

let a=0
for(let i=0;i<arr.length;i++)
{
  if(a==arr[i])
    console.log("Number is available in array")
  else
    console.log("number is not Available in array")
}

//5.Array sort and reverse

console.log("The reverse array is "+arr.reverse())
console.log("The sorting array is "+arr.sort())

