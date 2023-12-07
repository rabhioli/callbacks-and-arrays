
const crayonBox = {
    colors: ['red', 'blue', 'green', 'yellow']
  };
  
  
  console.log(crayonBox.colors[2]); 
  

  const bottle = {
    cap: {
      material: 'plastic',
      color: 'blue'
    }
  };
  

  console.log(bottle.cap.color); 
  

  const receipt = [
    {
      item: 'Notebook',
      price: 5.99
    },
   
  ];
  
  console.log(receipt[0].item); 
  
  const apartmentBuilding = [

    ['John', 'Alice', 'Bob', 'Eve']
  ];
 
  console.log(apartmentBuilding[2][1]); 


const knit = () => {
    return {
      item: 'scarf',
      size: '6ft',
      color: 'blue'
    };
  };
  
  
  const knittedItem = knit();
  console.log(knittedItem.size); 
  

  const crayonSelector = () => {
    return {
      colors: ['red', 'blue', 'green', 'yellow']
    };
  };
  

  const selectedCrayon = crayonSelector();
  console.log(selectedCrayon.colors[2]); 
  

  const powerButton = () => {
    return {
      options: () => {
        console.log('Select a song.');
      }
    };
  };
  
  
  const optionsFunction = powerButton().options;
  optionsFunction(); 

 
const add = (num1, num2) => num1 + num2;


const subtract = (num1, num2) => num1 - num2;


const multiply = (num1, num2) => num1 * num2;


const divide = (num1, num2) => num1 / num2;

const calculate = (num1, num2, operates) => operates(num1, num2);


console.log(calculate(5, 3, add));      
console.log(calculate(10, 4, subtract));  
console.log(calculate(3, 7, multiply));
console.log(calculate(20, 5, divide));    
 
const bar = () => {
    console.log('bar here');
};


bar();


const foo = () => {
    console.log('foo here');
};


foo();

// The error here is a syntax error. The correct syntax for defining an arrow function is const foo = () => {...}.
//  In the provided code, there's a missing equal sign (=) after const foo, leading to a syntax error.
// it should be written as 
// const foo = () => {
//     console.log('hi');
// };

// foo();
  
  