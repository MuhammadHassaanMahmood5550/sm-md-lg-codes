const Practice = () => {
    //ternary operator
    var a = 2;

    a === 1 ? console.log("a is 1") : a === 2 ? console.log("a is 2") : console.log("a is 3");

    var b = 3;

    b === 2 ? ( a === 2 ? console.log("yes a is 2") : console.log("yes a is 3") ) :
     console.log("b isn't 2");

     var c = 4;

    //   c % 2 === 0 ? 1 (c++, b++) : (b++, a++);


    // condition1 ? value1
    //     : condition2 ? value2
    //     : condition3 ? value3
    //     : value4;
    return ( 
        <div id="Main_Practice">
            <h1>Lets Check First</h1>
        </div>
     );
}
 
export default Practice;