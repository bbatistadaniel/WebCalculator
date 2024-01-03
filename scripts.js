// Get the HTML element with the ID "display"
var display = document.getElementById("display");

// Function to add a character to the display
function addChar(x){
    // Check if the length of the display content is less than 9
    if((display.innerText).length < 9){
        // Check if the display content includes certain error messages, and clear the display if true
        if((display.innerText).includes("Error") || (display.innerText).includes("NaN") || (display.innerText).includes("Infinity")){
            clearDisplay();
        };
        // Append the character to the display content
        display.innerText = (display.innerText + String(x));
    }
};

// Function to clear the display
function clearDisplay(){
    display.innerText = "";
};

// Function to evaluate the expression in the display and display the result
function equalize(){
    try{
        // Evaluate the expression in the display and round to a specified number of decimal places
        x = shortDecimal(eval(display.innerText));
        // Check if the result is not NaN, and update the display if true
        if(x != "NaN"){
            display.innerText = x;
        };
    }
    // Catch and handle syntax errors by displaying "Error"
    catch(SyntaxError){
        display.innerText = "Error";
    };
};

// Function to round a number to a specified number of decimal places
function shortDecimal(x, y=4){
    // Check if the number is not an integer, and round to the specified decimal places
    if(Number.isInteger(x) == false){
        x = parseFloat(x).toFixed(y);
    };
    // Return the rounded number
    return x;
};
