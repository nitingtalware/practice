const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = []
let evenNumbers = []

arr.forEach(number=>{
    if(number%2 ===0){
evenNumbers.push(number)
    }
})


arr.forEach(number=>{
if(number%2 !==0){
    oddNumbers.push(number)
}
    }
)
console.log(`using forEach method evenNumbers`);
console.log(`${evenNumbers}`);

console.log(`using forEach method oddNumbers`);
console.log(`${oddNumbers}`);