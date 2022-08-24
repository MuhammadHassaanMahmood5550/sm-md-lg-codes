import { useEffect, useState, useRef, useLayoutEffect } from "react";

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
    useLayoutEffect(() => {
      console.log("i am useLayoutEffect called before useEffect perform any functionality before useEffect");
      }, []);
      useEffect(() => {
      console.log("i am useEffect called after useLayoutEffect");  
      },[])
      
      // setUp("h");
      //************** useLayoutEffect = useLayoutEffect called before useEffect end


    return ( 
        <div id="Main_Medium">
            <h1>Medium Codes</h1>
            {/*************** // use ref = to acess and manipulate dom elements */}
            {/* <input type="text" placeholder="Text" ref={inputRef} />
            <button onClick={() => whenClick()}>Focus On click</button>
            <button onClick={() => console.log("i got click bcz of useRef")} ref={buttonRef}>Auto click by useRef</button> */}
            {/*************** // use ref end  */}
        </div>
     );
}
 
export default Medium;