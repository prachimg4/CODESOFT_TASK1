let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;
        
        if (buttonValue == '=') {
            try {
                string = eval(string);  // It's better to use a safe expression parser here
                input.value = string;
            } catch (error) {
                input.value = "Error";
            }
        } 
        
        else if (buttonValue == 'AC') {
            string = "";
            input.value = string;
        } 
        
        else if (buttonValue == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        
        else {
            string += buttonValue;
            input.value = string;
        }
    });
});
