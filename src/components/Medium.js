import { useEffect } from "react";
import { useState } from "react";

const Medium = () => {

    //--start = get window, screen, pixels, width, height
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

const { height, width } = useWindowDimensions();
 console.log(" height", height, "width", width );

 //--end = get window, screen, pixels, width, height

    return ( 
        <div id="Main_Medium">
            <h1>Medium Codes</h1>
        </div>
     );
}
 
export default Medium;