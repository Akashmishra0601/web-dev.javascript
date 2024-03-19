// // // // functions and memory management in javascript

// // // function sayMyNmae(){

// // //     console.log("AkashMishra")
// // //     console.log("AkashMishra")


// // // }

// // // sayMyNmae()


// // // // function addTwoNumbers(number_1 , number_2){ //parameters
// // // //     console.log(number_1 + number_2)
// // // // }

// // // // const result = addTwoNumbers(3 , 4) //arguments

// // // // console.log(result)


// // // function addTwoNumbers(number_1 , number_2){ //parameters
// // //     let result = number_1 + number_2
// // //     console.log("hello")
// // //     return result
// // // }

// // // const result = addTwoNumbers(3 , 4) //arguments

// // // console.log(result)



// // // // rest and spread 
// // // function calculateCardPrice(...num1){

// // //     return num1

// // // }
// // // // console.log(calculateCardPrice(200,300,400))

// // // function calculateCardPrice(val1, val2 , ...num1){

// // //     return num1

// // // }
// // // console.log(calculateCardPrice(200,300,400))



// // const user = {
// //     username: " Akash",
// //     age : 21
// // }


// // function handleobj (anyobj){
// //     console.log(`username is ${anyobj.username} and age is ${anyobj.age}`)
// // }

// // handleobj(user)



// // this and arrow functions ***********8


// const user = {
//     username : "Akash",
//     age : 21,
//     msge:"welcome",

//     wel: function(){
//         console.log(`${this.username}, welcome`)
//         console.log(this);

//     }
// }
// user.wel()
// user.username="sam"
// user.wel()

console.log(this);



// function chai(){
//     let username = "Akash Mishra"
//     console.log(this.username)   
// }
// chai()


const chai = () => {
    let username = "Akash Mishra"
    console.log(this)   
}
chai()