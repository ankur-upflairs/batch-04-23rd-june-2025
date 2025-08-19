// if(condition) {
//     //code => if condition is true than this code executes
// }
// else {
//     //code =>if condition is false than this code executes
// }

// let age =19 
// let age = prompt('enter your age ?')
// //always give value in string
// console.log(age,typeof age)
// age = parseInt(age)
// console.log(age,typeof age)
//parseInt , parseFloat , Number 
let age = parseInt(prompt('enter age : '))
if(age >= 18) {
    // console.log('your are adult')
    document.write('you are a adult')
}
else {
    // console.log('your are minor')
    document.write('you are a minor')
}


