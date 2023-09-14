const num =[5,4,3,2,6,7]

for(let i=0; i<num.length ;i++){
    console.log(num[i] ** 2 )

}
console.log('---------');
//for loop

for(let i of num){
    console.log(i**2)

}
for(let i of 'Hello world'){
    console.log(i)

}

for(let i of num.slice(0,3)){
    console.log(i**2)

}

