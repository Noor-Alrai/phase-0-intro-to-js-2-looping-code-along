// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
   
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);

  function writeCards(name , event){
    const messages = [];
    
    
    for ( let i = 0 ; i < gifts.length ; i ++){
      
        messages[i]=`Thank you, ${name[i]}, for the wonderful ${event} gift!`
     
      
    }
    return messages;
  }
  writeCards(["Charlie", "Samip", "Ali"], "birthday");

  function countDown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
    

return number;
  }
  countDown(10);