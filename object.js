let user = {
    name: 'Ramu',
    email: 'Ramu@gmail.com',
    password: '123456789',
    age: 35
};
console.log(user.name)
console.log(user['email']);
console.log(user['password']);

user.password='abrakadabra'
user.address='Lucknow';
console.log(user);

let smartphone= {
    brand :'Samsung',
    model:'m23',
    price:7000,
    colors: ['black','white','grey'],
    
 features: {
    cpu:'sd 865',
    ram:'8gb',
    storage: '128gb'

 }
   

};
console.log(Object.keys(smartphone));
console.log(Object.values(smartphone));
smartphone.color='black'
console.log(smartphone.colors[1])
// change index non to change color
smartphone.color[2]='orange'
console.log(smartphone)

smartphone.features.cpu='sd 880'
smartphone.features.storage='256 gb'

console.log(smartphone)// for change d features
console.log(smartphone.features)// for all features 

let smartphones =[
     {
    brand :'Samsung',
    model:'m23',
    price:7000,
    colors: ['yellow','white','grey','black']
},
{
brand :'poco',
model: 'm2',
price: 12000,
colors: ['crimson','white','grey']
},
{
brand :'Moto',
model:'G8',
price:16000,
colors: ['light blue','green']
},
{
    brand :'Nothing',
    model:'2',
    price:5000,
    colors: ['blue','white']
    }

];

smartphones[1].price=35000

console.log(smartphones)
smartphones.at(-2).colors.push('pink');

console.log(smartphones.at(-2).colors)
console.log(smartphones)

let count =0
for(let phone of smartphones){
    if(phone.price<5000){
count ++
}
}
console.log(count)

//use map get an arrray of all brands
//use filter get all smartphones havind price less than 5000
let brands =smartphones.map((p)=> {
    return p.brand
})
console.log(new Set (brands))
let phones1 = smartphones.filter( (phone)=>{return phone.price<5000})

console.log(phones1)

let phones2=smartphones.filter( (phone) => {return phone.colors.includes('black')})

console.log(phones2)