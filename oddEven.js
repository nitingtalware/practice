const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const evenNumbers=arr.filter(number=>{
return number%2 ===0;
 });

 const oddNumbers=arr.filter(number=>{
return number%2 !==0;
 }) 

 console.log(evenNumbers);
 console.log(oddNumbers);