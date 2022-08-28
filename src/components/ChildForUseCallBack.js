import { useEffect } from "react";
const ChildForUseCallBack = (props) => {
    //****** useCallback = simillar to useMemo but useMemo stores value and useCallback stores function. useCallback = simillar to useMemo, it control rerender **********/
    console.log("i am console got call in ChildForUseCallBack components")
    useEffect(() => {
        console.log("useEffect inside ChildForUseCallBack called");
        },[props.returnData]);
//****** useCallback = simillar to useMemo but useMemo stores value and useCallback stores function. useCallback = simillar to useMemo, it control rerender **********/

    return ( 
        <div id="Main_ChildForUseCallBack">
            <h1>This is a component for useCallback hook</h1>
            {console.log("i am console got call in return")}
            {props.returnData()}
        </div>
     );
}
 
export default ChildForUseCallBack;