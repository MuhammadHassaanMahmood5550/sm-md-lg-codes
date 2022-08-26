import { forwardRef, useImperativeHandle, useState } from "react";
//forwardRef = to not only get props from parent but also reference passed using useRef hooks
//remember ref should be after props below
const ButtonAsChild = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    //here ref = reference.
    useImperativeHandle(ref, () => ({
        //we are passing handleToggle as function
       handleToggle(){
        setToggle(!toggle);
       }, 
    }));
console.log("toggle=", toggle);
    return ( 
        <div id="Main_ButtonAsChild">
            <h1>ButtonAsChild component</h1>
             <button 
             onClick={() => setToggle(!toggle)}
             >Button from child</button>
             <br/>
             {toggle == true ? <span>In Child: {toggle}</span> 
             : <span>In Child: {toggle}</span> }

            {toggle && <span>In Child: {toggle}</span> }
        </div>
     );
});
 
export default ButtonAsChild;