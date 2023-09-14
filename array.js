const num = [2,4,7,56,'987'];

console.log(num);

console.log(typeof num)

const movie=['hulk','ironman','gadar','barbie','batman','deadpool','3idiot'];
console.log(movie.length)

console.log(movie[-1])
//slicing
console.log(movie.at(-3));
console.log(movie.slice(2 ,-2))
console.log(movie.slice(2,100))

movie.push('pk') //add element in end 
movie.unshift('flash')//add in the begining

//movie.pop()//delete element from end
//movie.shift()//delete element from begining
console.log(movie)

movie.splice(1,1)
movie.splice(1,1,'frozen')
console.log(movie)

movie.splice(2,3)
console.log(movie)

console.log(...movie)
console.log(['mi1',...movie,'mi2','3am'])


