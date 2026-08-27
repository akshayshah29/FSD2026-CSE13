// console.log("Heyy...I m using JS ")

//let and var keyword

// let a=23;

// if(a>10){
//     let a=45;
//     console.log("Value of a inside block of if  ="+a)
// }
// console.log("Value of a outside block of if  ="+a)


// function sum(a,b){
//     return a+b;
// }
// // const a=sum();
// // console.log("a="+a);
// function sumofsum(){
//     console.log(sum(40,30)+sum(10,400));
// }
// sumofsum();



// function myInfo(){
//     console.log("My Information")
//     const info1=myInfo()
//     console.log("My friends information")
//     const info2=myInfo()
// }



// const generateNumber=function(){
//     return Math.floor(Math.random()*1000);
// }
// const randomNumber=generateNumber();

// console.log(randomNumber)


// function findEvenNumber(){
//      const number1=generateNumber();

// }



// const sum=(a,b)=>{
//     return a+b;
// }
// const result=sum(20,50);

//IIFE
// (()=>{console.log("Hey....using IIFE")})();

//Callback function



// function sum(a,b){
//     return a+b;
// }

// function sumWtihMsg(clbk,msg){
//     const result=clbk(20,40);
//     return msg+result;
// }
// sumWtihMsg(sum,"Hii...Sum=");


// function login(msg,error){
//     if(error){
//         console.log(error)
//     }else{
//         console.log(msg);
//     }
// }


// function loginHandler(username,password,clbk){
//     const myUsername="ptomer40";
//     const myPassword="12345";
//     if(username==myUsername && password== myPassword){
//         clbk("success",null);
//     }else{
//         clbk(null,"Username or password is incorrect")
//     }

// }
// loginHandler("ptomer40","13242",login)


// callback hell

// setTimeout(()=>{
//     console.log("One")
//     setTimeout(()=>{
//         console.log("Two")
//         setTimeout(()=>{
//             console.log("Three");
//             setTimeout(()=>{
//                 console.log("Four")
//                 setTimeout(()=>{
//                     console.log("Five");
//                     setTimeout(()=>{
//                         console.log("Six");
//                         setTimeout(()=>{
//                             console.log("Seven")
//                             setTimeout(()=>{
//                                 console.log("Eight")
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)

// },1000)




// console.log("One")
// setTimeout(()=>console.log("Two"),1000);
// console.log("Threee")



// Promise in JS

const myPromise=new Promise((resolve,reject)=>{
      let username="ptomer40";
      let password="12345";
      if(username=="ptomer40" && password=="12345"){
        resolve("success");
      }
      else{
        reject("Invalid user")
      }
})

// myPromise.then((msg)=>{
// console.log(msg)
// })
// .catch(msg=>{
//     console.log(msg)
// })
// .finally(()=>console.log("All resource has been closed"))
  

async function loginHandler(){
    try{
           const loginStatus=await myPromise;
           console.log(loginStatus)
 
    }catch(e){
        console.log(e)
    }finally{
       console.log("Closing all the open resources...")
    }
}
loginHandler();