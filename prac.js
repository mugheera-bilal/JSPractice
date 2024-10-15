// function hello1(){
//     let message = "closure 1"
//     {
//         let message = " closure 2"
//         console.log("this is" + message)
//     }
//     let c = function hello2(){
//         console.log("and this is "+message)
//     }
//     return c
// }

// a = hello1()
// a()


//////////////

// const a = ()=>{
//     x = 1
//     console.log(x)
//     const b = ()=>{
//         y = 1
//         console.log(y)
//         const c  = ()=>{
//             z = 1
//             console.log(z)
//         }
//         c()
//     }
//     b()
// }
// a()

///////////////////

// function a() {


//     for (var i = 1; i <= 5; i++) {

//         function close(x) {

//             setTimeout(function b() {
//                 console.log(x)
//             }, i * 1000)
//         }
//         close(i)
//     }
//     console.log("hello world")
// }
// a()


///////////////////////////////////////////////////

// const radius=[3,4,2,1]

// let calculateRadius =  function (radius){
//     const output = []
//     for (let i=0; i<radius.length; i++){
//          output.push(Math.PI * radius[i] * radius[i])
//     }
//     return output
// }

// console.log(calculateRadius(radius))

// let calculateArea =  function (radius){
//     const output = []
//     for (let i=0; i<radius.length; i++){
//          output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius))

// let calculateCircumference =  function (radius){
//     const output = []
//     for (let i=0; i<radius.length; i++){
//          output.push(2 * radius[i])
//     }
//     return output
// }

// console.log(calculateCircumference(radius))


/////////////////////////////////


// const radius=[3,4,2,1]

// const area = function (radius){
//     return Math.PI * radius * radius
// }
// const diameter = function (radius){
//     return 2 * radius
// }
// const circumference = function (radius){
//     return 2 * Math.PI * radius 
// }
// let calculate =  function (radius,logic){
//     const output = []
//     for (let i=0; i<radius.length; i++){
//         output.push(logic(radius[i]))
//     }
//     return output
// }

// console.log(calculate (radius, area))
// console.log(calculate (radius, diameter))
// console.log(calculate (radius, circumference))

//////////////////////////////

// Mapping of an array

// const arr = [5, 10, 4, 6, 2]

// function double(x) {
//     return x * 2
// }

// function triple(x) {
//     return x * 3
// }

// function binary(x) {
//     return x.toString(2)
// }

// const outputDouble = arr.map(double)
// const outputTriple = arr.map(triple)
// const outputBinary = outputTriple.map(
//     function binary(x) {
//         return x.toString(2)
//     }
// )


// console.log(arr)
// console.log(outputDouble)
// console.log(outputTriple)
// console.log(outputBinary)


/////////////////////////////////////////

// .filter method to filter an array

// const arr = [5, 4, 1, 3, 2,6]

// function isOdd(x) {
//     return x % 2
// }

// function isEven(x) {
//     return x % 2 === 0
// }

// function greaterValues (x){
//     return x > 4
// }


// const outputOddValues = arr.filter(isOdd)
// const outputEvenValues = arr.filter(isEven)
// const outputGreaterValues = arr.filter(greaterValues)

// console.log(outputOddValues)
// console.log(outputEvenValues)
// console.log(outputGreaterValues)


///////////////////////////////////////////

// .reduce() function


// const arr = [5, 4, 1, 3, 2, 6]

// function findSum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }

// console.log(findSum(arr))

// const outputSum=arr.reduce(function(acc,curr){
//     acc= acc + curr
//     return acc
// },0) 

// console.log(outputSum)


// function findMax(arr) {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//       if(arr[i]>max){
//         max = arr[i]
//       }
//     }
//     return max
// }

// console.log(findMax(arr))

// const outputMax = arr.reduce(function(acc,curr){
//     if (acc < curr){ 
//            acc = curr

//     }
//     return acc    
// },0)

// console.log(outputMax)


////////////////////////////////////////

// mapping and reducing manipulation

// const users = [
//     { firstName: "mugheera", lastName: "bilal", age: 23 },
//     { firstName: "salman", lastName: "imran", age: 27 },
//     { firstName: "ahmedd", lastName: "ali", age: 23 },
//     { firstName: "imran", lastName: "khan", age: 56 },

// ]

// let outputFullName = users.map((x)=> x.firstName + " " + x.lastName)

// console.log(outputFullName)

// let outputAge = users.reduce(function (acc, curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age]
//     } else {
//         acc[curr.age] = 1
//     }
//     return acc
// },{})

// console.log(output)


////////////////////////////////////////////

// chaining of map and filter

// const users = [
//     { firstName: "mugheera", lastName: "bilal", age: 23 },
//     { firstName: "salman", lastName: "imran", age: 27 },
//     { firstName: "ahmedd", lastName: "ali", age: 23 },
//     { firstName: "imran", lastName: "khan", age: 56 },
// ]

// let outputWithChaining = users.filter(x => x.age < 30).map(x=> x.firstName)

// console.log(outputWithChaining)

// const outputWithReduce = users.reduce(function(acc, curr){
//     if(curr.age < 30){
//         acc.push(curr.firstName);  //if age of current user is < 30, push there firstName into the acc array
//     }
//     return acc;
// }, [ ]);  //initially, the acc will be an empty array

// console.log(outputWithReduce);



///////////////////////////////////////////////////



// const cart =["shoes","shirt","pant"]

// const promise = createOrder(cart)
// console.log(promise)

// function createOrder(cart){
//     const pr = new Promise(function (resolve, reject){
//         if(!validateCart(cart)){
//             const err = new Error("cart is not valid") 
//             reject(err)
//         }
//         const orderId = "1234"
//         if (orderId){
//             setTimeout(function(){
//                 resolve(orderId)
//             }, 5000)
//         }
//     })
//     return pr
// }

// function validateCart(cart){
//     return true
// }
// function proceedToPayment(orderId){
//     return new Promise(function(resolve,reject){
//         resolve("payment Successfull")
//     })
// }

// promise
// .then(function(orderId){
//     console.log(orderId)
// })
// .then(function(orderId){
//     return proceedToPayment(orderId)
// })
// .then (function(paymentInfo){
//     console.log(paymentInfo)
// })
// .catch(function(err){ 
//     console.log(err.message)
// })



/////////////////////////////////////////////////////
////// async and await method and also have an example of then 



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise is resolved")
//     }, 5000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise is resolved")
//     }, 10000)
// })

// // await can only be used inside function
// async function getPromiseValue() {
//     console.log("hello world!!")
//     // js engine will wait for the await function to resolve
//     const val = await p1
//     console.log("after await")
//     console.log(val)

//     const val2 = await p2
//     console.log("after await 2")
//     console.log(val)

// }
// getPromiseValue()

// // // handling promise with then function
// // function getData(){
// //     p.then((res) => console.log(res))
// //     console.log("after then")
// // }
// // getData()

///////////////////////////////////////////////////////////
/////////// this method


// const name = {
//     firstName: "mugheera",
//     lastName: "bilal",
//     printFullName : function (){
//         console.log(this.firstName + " " + this.lastName)
//     }
// }
// name.printFullName()

// const name2 = {
//     firstName: "akshay",
//     lastName: "saini"
// }

// name.printFullName.call(name2)


//// example 2

// console.log(this)

// const name = {
//     firstName: "mugheera",
//     lastName: "bilal",
   
// }

// let printFullName = function (homeTown,state){
//     console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state)
// }
// printFullName.call(name,"karachi","sindh")

// const name2 = {
//     firstName: "akshay",
//     lastName: "saini"
// }

// // //function borrowing

// printFullName.call(name2,"islamabad", "punjab")

// printFullName.apply(name2,["islamabad", "punjab"])

// let printMyName = printFullName.bind(name2,"islamabad", "punjab")
// console.log(printMyName)
// printMyName()


