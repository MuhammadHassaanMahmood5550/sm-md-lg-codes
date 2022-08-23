const Small = () => {
       //ternary operator
       var a = 2;

       a === 1 ? console.log("a is 1") : a === 2 ? console.log("a is 2") : console.log("a is 3");
   
       var b = 3;
   
       b === 2 ? ( a === 2 ? console.log("yes a is 2") : console.log("yes a is 3") ) :
        console.log("b isn't 2");
   
        var c = 4;
   
        let ternary1 = c % 2 === 0 ? (c++, b++) : (b++, a++);
        console.log("ternary1=", ternary1, "c=", c, "b=", b);
       //ternary operator end
       
    return ( 
        <div id="Main_Small">
            <h1>Small Codes</h1>
        </div>
     );
}
 
export default Small;