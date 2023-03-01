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

// The scenes and choices
const scenes = {
    'start': {
      title: 'Are you ready to choose your path?',
      context: 'You get to decide which path the character will take as it tries to navigate the gap between the natural and technological worlds. Along the road, there will be many obstacles to overcome, and the path you take will depend on the decisions you make.',
      choices: [
        { text: 'Begin!', destination: 'farewell' },
      ]
    },
  
  // Paddington Path
    'farewell': {
      title: 'Farewell my friend',
      context: 'Marshmallow decided to pursue his career in a prestigious tech company in the city, while Paddington happily embarked on his adventure in the forest with minimal supplies and no work responsibilities. Despite their bittersweet farewell, both friends embraced their chosen paths.',
      image: 'farewell.svg',
      choices: [
        { text: 'Join Paddington', destination: 'woods' },
        { text: 'Join Marshmallow', destination: 'city'},
      ]
    },
  
    'woods': {
      title: 'Into the woods',
      context: 'As Paddington immersed himself in the sights and sounds of nature, he lost track of time until he realised it was getting late, and he was left thirsty and hungry with no more water  or food left.',
      image: 'woods.svg',
      choices: [
        { text: 'Try to find shelter', destination: 'shelter' },
        { text: 'Find some food', destination: 'food' },
        { text: 'Find some water', destination: 'water' },
      ]
    },
    'food': {
      title: 'The Blue Lake: Safe or not safe',
      context: 'Paddington searches for food in the dense forest for hours, his hunger growing more intense. Just as he was about to lose hope, he remembered he could use his phone! He followed the map and finally found a lake!',
      image: 'food.svg',
      choices: [
        { text: 'Go fishing', destination: 'fish' },
        { text: 'Hunt', destination: 'hunt' },
        { text: 'Eat wild berries', destination: 'end1' },
      ]
    },
  
    'water': {
      title: 'The Blue Lake: Safe or not safe',
      context: 'Paddington searches for water in the dense forest for hours, his thirst growing more intense. Just as he was about to lose hope, he remembered he could use his phone! He followed the map and finally found a lake!',
      image: 'water.svg',
      choices: [
        { text: 'Collect some water and refill', destination: 'end2' },
        { text: 'Collect berries and smash it into juice', destination: 'end3' },
        { text: 'Skip for tonight, sleep there for the night', destination: 'night' },
      ]
    },
  
    'fish': {
      title: 'Wood and Fire',
      context: 'Eager to satisfy his hunger, he quickly fashioned a makeshift fishing rod from a stick and some twine. After several attempts, he finally managed to catch a small fish. But then, he realised he had no kitchen! He searched his surroundings for anything that could help him start a fire.',
      image: 'fish.svg',
      choices: [
        { text: 'Try to cut down some wood', destination: 'end4' },
        { text: 'Start fire right to the ground of the leaves', destination: 'end5' },
        { text: 'Set stones and add little wood branches', destination: 'night' },
      ]
    },
  
      'night': {
        title: 'First night',
        context: 'Paddington settles down to sleep. But in the middle of the night, he wakes up feeling alone and nostalgic about his life before his forest adventure. He decides to call Marshmallow. Concerned, Marshmallow researches and finds information about a nearby cave to assist Paddington.',
        image: 'night.svg',
        choices: [
          { text: 'Next', destination: 'onemonth' },
        ]
    },
  
    'onemonth': {
      title: 'One month later: New source of Food?',
      context: 'After surviving for a month, Paddington becomes tired of eating the same food and using the same resources. Now more alert to the dangers of wild animals, Paddington decides to venture further into the forest in search of new sources of food and supplies.',
      image: 'onemonth.svg',
      choices: [
        { text: 'Try the new berries growing', destination: 'danger' },
        { text: 'Go fishing! It’s safe!s', destination: 'danger' },
        { text: 'Hunt', destination: 'end6' }
      ]
    },
  
    'danger': {
      title: 'A new friend?',
      context: 'On his way back, Paddington encounters a wild bear.',
      image: 'danger.svg',
      choices: [
        { text: 'Run', destination: 'call' },
        { text: 'Hide', destination: 'call' },
        { text: 'Try to befriend it', destination: 'end7' },
      ]
    },
  
    'call': {
      title: 'A close call',
      context: 'He escapes the creature and gets lost. He uses GPS to find his way home and starts marking his path. Paddington hesitates to call his friend due to low battery but decides to call anyway.',
      image: 'call.svg',
      choices: [
        { text: 'Next', destination: 'friend' },
      ]
    },
  
    'reunited': {
      title: 'Marshmallow pays a visit to Paddington and confides that she has been struggling with stress in the city. However, being in the forest has helped her relax. She is amazed by its beauty and peacefulness. <br>Paddington and Marshmallow experiences taught them important lessons about themselves and the world. Paddington learned the value of resourcefulness and adapting to change, while Marshmallow discovered the joy of slowing down and appreciating life simple pleasures.',
      context: 'On his way back, Paddington encounters a wild bear.',
      image: 'reunited.svg',
      choices: [
        { text: 'Next', destination: 'coexisting' },
      ]
    },
  
    'coexisting': {
      title: 'Congratulations!',
      context: 'Together, Paddington and Marshmallow joined forces to bridge the gap between the natural world and technology. They became champions for sustainability and environmental preservation, leveraging their diverse perspectives to create a better future for all.',
      image: 'coexisting.svg',
      choices: [
        { text: 'Next: Together we fight!', destination: 'final' },
      ]
    },
  
    'final': {
      title: 'Congratulations!',
      context: 'Congratulations! Through guiding Paddington, you gained a deeper understanding of balancing technology and respect for the environment. <br>Although technology makes our lives easier, we must not forget that nature provides us with resources and beauty. By respecting and protecting nature, we can ensure that future generations enjoy the same benefits. Thank you for playing! Do not hesitate to restart the game to explore Marshmallow Path.',
      image: 'final.svg',
      choices: [
        { text: 'Restart', destination: 'start' },
      ]
    },