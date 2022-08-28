import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useEffect, useImperativeHandle, useLayoutEffect, useRef } from "react";
import ChildForUseCallBack from "./ChildForUseCallBack";

const FirstTry = () => {
    return ( 
        <div id="Main_FirstTry">
            <h1>Lets Check First</h1>
        </div>
     );
}
 
export default FirstTry;  