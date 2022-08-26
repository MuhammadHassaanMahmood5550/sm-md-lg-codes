import { useEffect, useImperativeHandle, useLayoutEffect, useRef } from "react";

//******** */ useImperativeHandle = allow you to use state or function of child componenet 
//  into the parent componenet. here parent componenet means parent component 
//  using another(child component) in it.  ******
////-/-/-/-/-/-/ creating Button component as child


//********** */ useImperativeHandle = allow you to use state or function of child componenet 
//  into the parent componenet. here parent componenet means parent component 
//  using another(child component) in it.  end *********
const FirstTry = () => {

    return ( 
        <div id="Main_FirstTry">
            <h1>Lets Check First</h1>
        </div>
     );
}
 
export default FirstTry;  