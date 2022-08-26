import { useEffect, useImperativeHandle, useLayoutEffect, useRef } from "react";

const PER_BUCKET = 4
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// const items = ["a"];
console.log("items.length =-=", items.length);
// the following reducer splits the original array into "buckets" (arrays) of 8 items.
const newItems = items.reduce((result, item, i) => { 
 //   console.log("result =-=", result, "item=-=", item, "i=-=", i);

  const bucketIndex = Math.floor(i / PER_BUCKET);

//   console.log("bucketIndex =-=", bucketIndex);

  if (!result[bucketIndex]) {
    result[bucketIndex] = [];
  }

  result[bucketIndex].push(item);

  return result;
}, []);

console.log("final newItems =-=", newItems);
// console.log("final newItems.length =-=", newItems.length);

// for (let j = 0; j < newItems.length; j++) {
//     new Promise( (resolve, reject) => {
//         console.log("Initial");
//         resolve();
//       })
    
// }

// let myPromise1 = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if(a === 2) {
//     for (let j = 0; j < newItems.length; j++) {  
//         if(newItems.length < 7){
//             resolve(newItems[j]);
//         }else{
//             reject("failed");
//         }
//       }  
//     }else{
//         reject("failed");
//     }
// })

// myPromise1.then((message) => {
//     console.log("we are in then message = ", message);
// }).catch((message) => {
//     console.log("we are in catch message = ", message);
// });


let myPromise1 = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a === 2) {
    for (let j = 0; j < newItems.length; j++) {  
        if(newItems[j] != undefined){
            resolve(newItems[j]);
        }else{
            reject("failed");
        }
      }  
    }else{
        reject("failed");
    }
})

myPromise1.then((message) => {
    console.log("we are in then message = ", message);
}).catch((message) => {
    console.log("we are in catch message = ", message);
});

    
    // "Consuming Code" (Must wait for a fulfilled Promise)
   
// new Promise( (resolve, reject) => {
//     console.log("Initial");
//     //resolve();
//     reject();
//   })
//     .then(() => {
  
//       console.log("1st", newItems[0]);
//     })
//     .catch((err1) => {
//         console.log("1st err1", err1);
//     })
//     .then(() => {
//       console.log("Do this, no matter what happened before");
//       console.log("2st", newItems[100]);
//     })
//     .catch((err2) => {
//         console.log("1st err1", err2);
//     });






// ------------------------------------
// just for the demo:
// const original = document.getElementById("original");
// const modified = document.getElementById("modified");

// let origHTML = `[${items.toString()}]`;
// let newHTML = "[";

// for (let item of newItems) { newHTML += `[${item.toString()}]` };

//   newHTML += "]"

// original.textContent = origHTML;
// modified.textContent = newHTML;

//******** remember when state change in out application that components rerender (means return( which is showing content on screen ) rerender) 
//but useEffects, functions won't run again untill call inside return() as we discussed only return() rerenders. 
// and that is why we use useMemo 

   

//******** remember when state change in out application that components rerender (means return( which is showing content on screen ) rerender) 
//but useEffects, functions won't run again untill call inside return() as we discussed only return() rerenders. 
// and that is why we use useMemo               end heres
const FirstTry = () => {

    return ( 
        <div id="Main_FirstTry">
            <h1>Lets Check First</h1>
        </div>
     );
}
 
export default FirstTry;  