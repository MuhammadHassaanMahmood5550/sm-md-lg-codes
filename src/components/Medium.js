import { useEffect, useState, useRef, useLayoutEffect, useMemo, useCallback } from "react";
import ButtonAsChild from "./ButtonAsChild";
import ChildForUseCallBack from "./ChildForUseCallBack";
const Medium = () => {

    //**************start = get window, screen, pixels, width, height
//     function getWindowDimensions() {
//         const { innerWidth: width, innerHeight: height } = window;
//         return {
//           width,
//           height
//         };
//       }

// function useWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
//     useEffect(() => {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions());
//       }
  
//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }, []);
  
//     return windowDimensions;
//   }

// const { height, width } = useWindowDimensions();
//  console.log(" height", height, "width", width );


 //**************end = get window, screen, pixels, width, height

    //************** use ref = to acess and manipulate dom elements
    // const inputRef = useRef(null);
    // const buttonRef = useRef(null);

    // const whenClick = () => {
    //     //to get value
    //  console.log("inputRef", inputRef.current.value);
    //     //to focus
    //     inputRef.current.focus();
    //     //to clear input
    //     inputRef.current.value = "";
    //     //to click 2nd button
    //     buttonRef.current.click();
    // }
    //************** use ref end 

        //************** useLayoutEffect = useLayoutEffect exactly same as useEffect()
    // useLayoutEffect called before useEffect
    // useLayoutEffect(() => {
    //   console.log("i am useLayoutEffect called before useEffect perform any functionality before useEffect");
    //   }, []);
    //   useEffect(() => {
    //   console.log("i am useEffect called after useLayoutEffect");  
    //   },[])
      
      // setUp("h");
      //************** useLayoutEffect = useLayoutEffect called before useEffect end

//   ***** we can do same word with props like passing state and function but some time it is hard to pass at top level so, useImperitive hook
// useImperativeHandle = allow you to use state or function of child componenet   into the parent componenet. here parent componenet means parent component 
//   using another(child component) in it.  ******
  ////-/-/-/-/-/-/ creating Button component as child */


  //  const buttonRef = useRef(null);

//  *****useImperativeHandle = allow you to use state or function of child componenet 
// into the parent componenet. here parent componenet means parent component 
// using another(child component) in it.  end *****


//**********devide array into chunks of your choise */
// const PER_BUCKET = 4
// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// console.log("items.length =-=", items.length);
// // the following reducer splits the original array into "buckets" (arrays) of 8 items.
// const newItems = items.reduce((result, item, i) => { 
//  //   console.log("result =-=", result, "item=-=", item, "i=-=", i);
//   const bucketIndex = Math.floor(i / PER_BUCKET);
// //   console.log("bucketIndex =-=", bucketIndex);
//   if (!result[bucketIndex]) {
//     result[bucketIndex] = [];
//   }
//   result[bucketIndex].push(item);
//   return result;
// }, []);
// console.log("final newItems =-=", newItems);
// console.log("final newItems.length =-=", newItems.length);
//**********devide array into chunks of your choise */

//********promise = if you do this then we will do this */
// let myPromise1 = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if(a === 2) {
//         resolve("success");  
//     }else{
//         reject("failed");
//     }
// })

// myPromise1.then((message) => {
//     console.log("we are in then message = ", message);
// }).catch((message) => {
//     console.log("we are in catch message = ", message);
// });
//********promise = if you do this then we will do this */

//******** remember when state change in our application that components rerenders
//// and that is why we use useMemo to control this.
// const [state1, setState1] = useState(0);
// const [state2, setState2] = useState(0);

// const checkFubction = () => {
// console.log('====================================');
// console.log("this function run when state1 changes =//= ", state1 + 1);
// console.log('====================================');
// }
////now useMemo know that only run function when [state1](dependency) change and not other states on the components.
//// checkFubctionMemo = even dont need to call but can cal any where
// const checkFubctionMemo = useMemo(() => checkFubction(), [state1]); 
//******** remember when state change in our application that components rerenders
//// and that is why we use useMemo to control this          end heres


      //****** useCallback = simillar to useMemo but useMemo stores value and useCallback stores function. useCallback = simillar to useMemo, it control rerender **********/
      const [toggle, setToggle] = useState(0);
      const [data, setData] = useState("the data from backend");
  
      const returnData = useCallback(() => {
          console.log("function is called");
          return data;
      },[data]);
          //****** useCallback = simillar to useMemo but useMemo stores value and useCallback stores function. useCallback = simillar to useMemo, it control rerender **********/



    return ( 
        <div id="Main_Medium">
            <h1>Medium Codes</h1>
            {/*************** // use ref = to acess and manipulate dom elements */}
            {/* <input type="text" placeholder="Text" ref={inputRef} />
            <button onClick={() => whenClick()}>Focus On click</button>
            <button onClick={() => console.log("i got click bcz of useRef")} ref={buttonRef}>Auto click by useRef</button> */}
            {/*************** // use ref end  */}


         {/**** we can do same word with props like passing state and function but some time it is hard to pass at top level so, useImperitive hook
         useImperativeHandle = allow you to use state or function of child componenet   into the parent componenet. here parent componenet means parent component 
     using another(child component) in it.  ******
     ////-/-/-/-/-/-/ creating Button component as child ****/}

       {/* <button
       onClick={() => {
        buttonRef.current.handleToggle();
       }}>
        Button from parent
       </button>

       <ButtonAsChild ref={buttonRef} /> */}

   {/****** we can do same word with props like passing state and function but some time it is hard to pass at top level so, useImperitive hook
    *  useImperativeHandle = allow you to use state or function of child componenet 
  into the parent componenet. here parent componenet means parent component 
  using another(child component) in it.  end  *****/}


  {/* //******** remember when state change in our application that components rerenders
// and that is why we use useMemo to control this. */}
            {/* {checkFubctionMemo} */}
            {/* <button
            onClick={() => setState2(state2 + 1)}
            >Change state2</button>
            <br />
            <button
            onClick={() => setState1(state1 + 1)}
            >Change state1</button> */}
{/* //******** remember when state change in our application that components rerenders
// and that is why we use useMemo to control this. */}

       {/* //****** useCallback = simillar to useMemo but useMemo stores value and useCallback stores function. useCallback = simillar to useMemo, it control rerender ********** */}
            {/* {returnData()}  */}
            <button
            onClick={() => setToggle(data + 1)}
            >toggle</button>
            <ChildForUseCallBack returnData={returnData}/>  
            {/* //****** useCallback = simillar to useMemo but useMemo stores value and useCallback stores function. useCallback = simillar to useMemo, it control rerender **********/}


        </div>
     );
}
 
export default Medium;