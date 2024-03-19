// // singleton
// // bject literals

// // Object.create
// const mysym = Symbol("key1")
// const jsUser = {

//     Name : "Akash Mishra",
//     age : 21,
//     [mysym] : "mkey2",
//     location : "Kanpur",
//     isLoggedIn : false,
//     last_days_logedIn : ["monday" , "tuesday"]


// }
// console.log(jsUser.Name)
// console.log(jsUser["Name" , "age" ]);
// console.log(typeof mysym);

// a = jsUser.Name = "Akash"
// // Object.freeze(jsUser)
// jsUser.age = 228

// console.log(a)
// console.log(jsUser);



// jsUser.greeting = function(){
//     console.log("hello js user");
// }
// console.log(jsUser.greeting())




// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "12345"
tinderuser.Name = "samay"
tinderuser.isLoggedIn = false

// console.log(tinderuser)

const regularuser = {
    email : "akash@gm,ail.com",
    fullname:{
        username: "Akash",
        userlast: "mishra"
    },

}

console.log(regularuser.fullname)

const obbj1 = {1: "a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = Object.assign({} , obbj1, obj2)
const obj4 = {...obbj1 , ...obj2}
console.log( obj4);




// distructuring 

const course = {
    coursename : "js",
    price: 1000,
    courseInInstructor:"iam"
}

// course.courseInInstructor
const {courseInInstructor} = course





// JSON

// {
//     name: "histesh"
//     coursenmae: "1000"
//     pricne : 23456
// }