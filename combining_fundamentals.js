
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
  
  