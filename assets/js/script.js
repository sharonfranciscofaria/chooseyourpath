const titleElement = document.querySelector('#title');
const contextElement = document.querySelector('#context');
const imageElement = document.querySelector('#picture');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');


// Event listener
button1.addEventListener("click", updateStory);
var currentStage = 'farewell';

function updateStory() {
  titleElement.innerHTML = scenes[currentStage].title;
  contextElement.innerHTML = scenes[currentStage].context;
  imageElement.innerHTML = '`<img src=\'./assets/images/${scenes[currentStage].image}\'>`';
  
 

}