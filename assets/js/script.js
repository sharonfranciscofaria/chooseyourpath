// Scenes of the story are stored in this central data structure
// it has the following design:

// dictionary for which each key is the name of a scene, and each value is an object which contains three fields: title, context, and choices
// choices is itself a list of objects, where each object is a label for a button and the scene to jump to when that button is pressed




// The scenes and choices
const scenes = {
  'start': {
    title: 'Are you ready to choose your path?',
    context: 'You get to decide which path the character will take as it tries to navigate the gap between the natural and technological worlds. Along the road, there will be many obstacles to overcome, and the path you take will depend on the decisions you make.',
    choices: [{
        text: 'Begin!',
        destination: 'characters'
      },
      {
        text: 'How to play',
        destination: 'howtoplay'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },
  'characters': {
    title: 'Meet the characters',
    context: 'Paddington is a nature lover, while his best friend, a tech-loving cat, enjoys a luxurious lifestyle. Despite their differences, they share a strong friendship. <br> It is time that you choose who would you like to go with?',
    choices: [{
        text: 'Join Paddington!',
        destination: 'woods'
      },
      {
        text: 'Join Marshmallow',
        destination: 'city'
      },
      {
        text: 'How to play',
        destination: 'howtoplay'
      }
    ]
  },
  'howtoplay': {
    title: 'How to Play',
    context: 'Start by reading the introduction or prologue of the game to get a sense of the setting and characters. As you progress through the game, you will be presented with different scenarios and choices. <br> Read each choice carefully and think about what you want to do. Scroll and click on the button that corresponds to the choice you want to make. <br> Choose wisely!',
    choices: [{
        text: 'Begin!',
        destination: 'characters'
      },
      {
        text: 'About',
        destination: 'about'
      },
      {
        text: 'Home',
        destination: 'start'
      }
    ]
  },
  'about': {
    title: 'About',
    context: 'This game was developed by Sharon Francisco Faria. Music by composer Aleksey Chistilin, an open source audio for the game. Artwork created by Sharon Francsico Faria using Canva Pro. Permission granted. ',
    choices: [{
        text: 'Begin!',
        destination: 'characters'
      },
      {
        text: 'How to play',
        destination: 'howtoplay'
      },
      {
        text: 'Home',
        destination: 'start'
      }
    ]
  },

  'woods': {
    title: 'Into the woods',
    context: 'As Paddington immersed himself in the sights and sounds of nature, he lost track of time until he realised it was getting late, and he was left thirsty and hungry with no more water or food left.,',
    choices: [{
        text: 'Try to find a shelter',
        destination: 'night'
      },
      {
        text: 'Try to find food',
        destination: 'food'
      },
      {
        text: 'Try to find water',
        destination: 'water'
      }
    ]
  },

  'city': {
    title: 'Living the life: a fantasy',
    context: 'Marshmallow gets so excited having access to all of the gadgets and lavish lifestyle. <br> She prepares for her first day and is excited to start her week in this high-tech world. Her first challenge? Getting to work on time.',
    choices: [{
        text: 'Take the car',
        destination: 'car'
      },
      {
        text: 'Take the train',
        destination: 'train'
      },
      {
        text: 'Walk!',
        destination: 'walk'
      }
    ]
  },

  // Paddington Path 

  'food': {
    title: 'The Blue Lake: Safe or not safe',
    context: 'Paddington searches for food in the dense forest for hours, his hunger growing more intense. Just as he was about to lose hope, he remembered he could use his phone! He followed the map and finally found a lake!',
    choices: [{
        text: 'Go fishing',
        destination: 'fish'
      },
      {
        text: 'Hunt',
        destination: 'end6'
      },
      {
        text: 'Eat wild berries!',
        destination: 'end1'
      }
    ]
  },

  'water': {
    title: 'The Blue Lake: Safe or not safe',
    context: 'Paddington searches for water in the dense forest for hours, his thirst growing more intense. Just as he was about to lose hope, he remembered he could use his phone! He followed the map and finally found a lake!',
    choices: [{
        text: 'Collect berries and smash it into juice',
        destination: 'end2'
      },
      {
        text: 'Skip for tonight, sleep',
        destination: 'night'
      },
      {
        text: 'Drink water!',
        destination: 'end3'
      }
    ]
  },

  'fish': {
    title: 'Wood and Fire',
    context: 'Eager to satisfy his hunger, he quickly fashioned a makeshift fishing rod from a stick and some twine. After several attempts, he finally managed to catch a small fish. But then, he realised he had no kitchen! He searched his surroundings for anything that could help him start a fire.',
    choices: [{
        text: 'Cut down some wood',
        destination: 'end4'
      },
      {
        text: 'Start fire',
        destination: 'end5'
      },
      {
        text: 'Set wood branches and then fire',
        destination: 'night'
      }
    ]
  },

  'night': {
    title: 'First night',
    context: 'Paddington settles down to sleep. But in the middle of the night, he wakes up feeling alone and nostalgic about his life before his forest adventure. He decides to call Marshmallow. Do you think she will pick up?',
    choices: [{
        text: 'Ofcourse!',
        destination: 'onemonth'
      },
      {
        text: 'Why not?',
        destination: 'onemonth'
      },
      {
        text: 'No',
        destination: 'onemonth'
      }
    ]
  },

  'onemonth': {
    title: 'One month later',
    context: 'Marshmallow helped Paddington in finding a cave, its his new home now. It has been over a month.. Paddington became tired of eating the same food. Now more alert to the dangers of wild animals, Paddington decides to venture further into the forest in search of new sources of food and supplies.',
    choices: [{
        text: 'Try the new berries growing',
        destination: 'danger'
      },
      {
        text: 'Go fishing! It’s safe!?',
        destination: 'danger'
      },
      {
        text: 'Hunt',
        destination: 'end6'
      }
    ]
  },

  'danger': {
    title: 'Danger...',
    context: 'After eating, on his way back, Paddington encounters a wild bear.',
    choices: [{
        text: 'Run',
        destination: 'call'
      },
      {
        text: 'Hide',
        destination: 'call'
      },
      {
        text: 'Try to befriend it',
        destination: 'end7'
      }
    ]
  },

  'call': {
    title: 'A close call',
    context: 'He escapes the creature and gets lost. He uses GPS to find his way home and starts marking his path. Paddington hesitates to call his friend to save his phone battery but decides to call anyway. Do you think he did the right thing?',
    choices: [{
        text: 'What if there is an emergency',
        destination: 'reunited'
      },
      {
        text: 'Why not?',
        destination: 'reunited'
      },
      {
        text: 'Its important to stay connected!',
        destination: 'reunited'
      }
    ]
  },

  'reunited': {
    title: 'Reunited',
    context: 'Marshmallow pays a visit to Paddington and confides that she has been struggling with stress in the city. However, being in the forest has helped her relax. She is amazed by its beauty and peacefulness. Paddington and Marshmallow experiences taught them important lessons about themselves and the world.  <br> Paddington learned the value of resourcefulness and adapting to change, while Marshmallow discovered the joy of slowing down and appreciating life simple pleasures. As Marshmallow was about to leave he',
    choices: [{
        text: 'Ask Paddington if he could stay',
        destination: 'coexisting'
      },
      {
        text: 'Ask Paddington to come along?',
        destination: 'coexisting'
      },
      {
        text: 'Why cant we coexist both world?',
        destination: 'coexisting'
      }
    ]
  },

  'coexisting': {
    title: 'Coexisting',
    context: 'Together, Paddington and Marshmallow joined forces to bridge the gap between the natural world and technology. They became champions for sustainability and environmental preservation, leveraging their diverse perspectives to create a better future for all.',
    choices: [{
        text: 'We can do this!',
        destination: 'final1'
      },
      {
        text: 'A better future?',
        destination: 'final1'
      },
      {
        text: 'Together',
        destination: 'final1'
      }
    ]
  },

  'final1': {
    title: 'Congratulations!',
    context: 'Congratulations! Through guiding Paddington, you gained a deeper understanding of balancing technology and respect for the environment. <br>Although technology makes our lives easier, we must not forget that nature provides us with resources and beauty. By respecting and protecting nature, we can ensure that future generations enjoy the same benefits. <br> Thank you for playing! Do not hesitate to restart the game to explore Marshmallow Path.',
    choices: [{
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'Join Marshmallow',
        destination: 'city'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

  // Paddingtons endings

  'end1': {
    title: 'Poison!',
    context: 'Sorry you ate some poisonous berries and got sick. You tried to call the A&E but could not get any network. Try again.',
    choices: [{
        text: 'Go back',
        destination: 'food'
      },
      {
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

  'end2': {
    title: 'Poison!!',
    context: 'Sorry you drank some poisonous berries and got sick. You tried to call the A&E but could not get any network. Try again',
    choices: [{
        text: 'Go back',
        destination: 'water'
      },
      {
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

  'end3': {
    title: 'Unfiltered Water!',
    context: 'Sorry you drank unfiltered water and got sick. You tried to call the A&E but could not get any network. Try again.',
    choices: [{
        text: 'Go back',
        destination: 'water'
      },
      {
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

  'end4': {
    title: 'The tree falls on you!!',
    context: 'You have no skills cutting down a tree and so instead of cutting it away from you, you cut it towards you. plus, cutting down trees leads to climate change, soil erosion, desertification, fewer crops, floods, more greenhouse gases in the air, and numerous issues.',
    choices: [{
        text: 'Go back',
        destination: 'fish'
      },
      {
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

  'end5': {
    title: 'Fire!',
    context: 'You start up a fire in the woods and you are unable to control it. Try again!',
    choices: [{
        text: 'Go back',
        destination: 'food'
      },
      {
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

  'end6': {
    title: 'Hunt to be hunted!',
    context: 'You have no skills hunting, instead those wild animals attacked you and you got hurt. Plus, Hunting can lead to the loss of biodiversity, disturbance to ecosystems, and the depletion of populations of certain species.',
    choices: [{
        text: 'Go back',
        destination: 'food'
      },
      {
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

  'end7': {
    title: 'Hunted',
    context: 'While bears can be accustomed to humans through training, they cannot be entirely domesticated. These solitary animals demand an extensive amount of food and will hunt when in need.',
    choices: [{
        text: 'Go back',
        destination: 'danger'
      },
      {
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

  // Marshmallow Path

  'car': {
    title: 'Car: Getting late?',
    context: 'Marshmallow takes her car and is ready to go.. a couple of minutes later, she gets stuck in the middle of the traffic. She opens the window trying to breathe but it’s toxic and highly polluted.',
    choices: [{
        text: 'Try to park and walk',
        destination: 'walk'
      },
      {
        text: 'Try to park and take the train',
        destination: 'train'
      },
      {
        text: 'Stay and be patience',
        destination: 'work'
      }
    ]
  },

  'walk': {
    title: 'Walk: Getting late?',
    context: 'As you walk, you notice that nobody smiles or greets one another. The constant barrage of notifications and alerts on their devices seems to have made people forget how to interact with each other in real life. The world seems cold, sterile, and devoid of any human connection.',
    choices: [{
        text: 'Ignore the feeling',
        destination: 'work'
      },
      {
        text: 'Check your phone',
        destination: 'work'
      },
      {
        text: 'Focus on getting to work',
        destination: 'work'
      }
    ]
  },

  'train': {
    title: 'Train: Getting late?',
    context: 'Marshmallow takes the train, it’s quick to get to work. Trains or subways produce only one-third of carbon dioxide emissions compared to the average passenger vehicle.  You notice that no one is making eye contact, and nobody seems to acknowledge your presence. <br> People walk with their heads down, scrolling through their phones or typing away on their laptops.',
    choices: [{
        text: 'Ignore the feeling and carry on',
        destination: 'work'
      },
      {
        text: 'Read a book',
        destination: 'work'
      },
      {
        text: 'Check your phone',
        destination: 'work'
      }
    ]
  },

  'work': {
    title: 'First day at work',
    context: 'Marshmallow makes her way towards the towering high-tech building, her first day of work. The building is a sleek and modern structure, with shining glass panels, fake plants and polished metal accents. ',
    choices: [{
        text: 'Go and check out those new techs!',
        destination: 'explore'
      },
      {
        text: 'Make some new friends?',
        destination: 'friends'
      },
      {
        text: 'Walk around the building and explore!',
        destination: 'explore'
      }
    ]
  },

  'friends': {
    title: 'A new friend?',
    context: 'People are not very friendly and seem to be entirely focused on their work. There is no chit-chat or idle talk, only the clicking of keyboards and the sound of people on phone calls. Despite the lack of interaction, you are amazed by the tech and come across a VR device.',
    choices: [{
        text: 'Go grab it',
        destination: 'explore'
      },
      {
        text: 'Are we even allowed?',
        destination: 'explore'
      },
      {
        text: 'Lets do it!!',
        destination: 'explore'
      }
    ]
  },

  'explore': {
    title: 'Explore',
    context: 'You try the new VR device hoping to give a sense of nature in the virtual world. You spend hours wandering the city, but find nothing resembling nature. As the day wears on, you start to feel more and more frustrated and disconnected from the world around you.',
    choices: [{
        text: 'Lets go eat',
        destination: 'lonely'
      },
      {
        text: 'Lets go home',
        destination: 'lonely'
      },
      {
        text: 'Try to call Paddington',
        destination: 'lonely'
      }
    ]
  },

  'lonely': {
    title: 'One Month later',
    context: 'After a month has gone by, Marshmallow has grown tired of this city. She longs for the company of her friends and the simple pleasures of life, such as breathing in fresh air, indulging in good quality food, taking trips to the beach, or strolling through the park and listening to the chirping of birds. <br> These feelings of longing and isolation leave Marshmallow feeling downcast and depressed, prompting her to consider reaching out to Paddington for comfort. Do you think he will answer?',
    choices: [{
        text: 'Why not?',
        destination: 'visit'
      },
      {
        text: 'ofcourse!',
        destination: 'visit'
      },
      {
        text: 'I wish he was here',
        destination: 'visit'
      }
    ]
  },

  'visit': {
    title: 'A visit',
    context: 'Paddington pays Marshmallow a visit and shares that he has been facing difficulties meeting his basic needs, such as food and shelter. Nonetheless, being in the city has provided him with easy access to safe food, financial resources, electricity, heating, and the ability to stay connected with friends and family worldwide. Through their respective experiences, both Paddington and Marshmallow have gained valuable insights about themselves and the world. <br> Paddington has come to appreciate the importance of resourcefulness and adapting to change, whereas Marshmallow has learned to savour life simple pleasures and embrace a slower pace of living.',
    choices: [{
        text: 'Stop Paddington from leaving?',
        destination: 'final2'
      },
      {
        text: 'Go with Paddington',
        destination: 'final2'
      },
      {
        text: 'Why cant we coexist?',
        destination: 'final2'
      }
    ]
  },

  'final2': {
    title: 'Congratulations!',
    context: 'Congratulations! Through guiding Paddington, you gained a deeper understanding of balancing technology and respect for the environment. <br>Although technology makes our lives easier, we must not forget that nature provides us with resources and beauty. <br> By respecting and protecting nature, we can ensure that future generations enjoy the same benefits. Thank you for playing! Do not hesitate to restart the game to explore Paddingtons Path.',
    choices: [{
        text: 'Restart',
        destination: 'start'
      },
      {
        text: 'Join Paddington',
        destination: 'woods'
      },
      {
        text: 'About',
        destination: 'about'
      }
    ]
  },

};

// HTML elements 
const picture = document.getElementById('picture');
const title = document.getElementById('title');
const context = document.getElementById('context');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// Event Listener to buttons
button1.addEventListener('click', () => {
  const destination = scenes.start.choices[0].destination;
  updateScene(destination);
});

button2.addEventListener('click', () => {
  const destination = scenes.start.choices[1].destination;
  updateScene(destination);
});

button3.addEventListener('click', () => {
  const destination = scenes.start.choices[2].destination;
  updateScene(destination);
});

// Function to update pictures
function updateScene(sceneName) {
  const scene = scenes[sceneName];
  title.textContent = scene.title;
  context.innerHTML = scene.context;

  if (sceneName === 'start') {
    picture.src = './assets/images/start.svg';
  } else if (sceneName === 'howtoplay') {
    picture.src = './assets/images/howtoplay.svg';
  } else if (sceneName === 'characters') {
    picture.src = './assets/images/characters.svg';
  } else if (sceneName === 'about') {
    picture.src = './assets/images/about.svg';
  } else if (sceneName === 'woods') {
    picture.src = './assets/images/woods.svg';
  } else if (sceneName === 'city') {
    picture.src = './assets/images/city.svg';
  } else if (sceneName === 'food') {
    picture.src = './assets/images/food.svg';
  } else if (sceneName === 'water') {
    picture.src = './assets/images/water.svg';
  } else if (sceneName === 'fish') {
    picture.src = './assets/images/fish.svg';
  } else if (sceneName === 'night') {
    picture.src = './assets/images/night.svg';
  } else if (sceneName === 'onemonth') {
    picture.src = './assets/images/onemonth.svg';
  } else if (sceneName === 'danger') {
    picture.src = './assets/images/danger.svg';
  } else if (sceneName === 'call') {
    picture.src = './assets/images/call.svg';
  } else if (sceneName === 'reunited') {
    picture.src = './assets/images/reunited.svg';
  } else if (sceneName === 'reunited') {
    picture.src = './assets/images/reunited.svg';
  } else if (sceneName === 'coexisting') {
    picture.src = './assets/images/coexisting.svg';
  } else if (sceneName === 'final1') {
    picture.src = './assets/images/final1.svg';
  } else if (sceneName === 'end1') {
    picture.src = './assets/images/end1.svg';
  } else if (sceneName === 'end2') {
    picture.src = './assets/images/end2.svg';
  } else if (sceneName === 'end3') {
    picture.src = './assets/images/end3.svg';
  } else if (sceneName === 'end4') {
    picture.src = './assets/images/end4.svg';
  } else if (sceneName === 'end5') {
    picture.src = './assets/images/end5.svg';
  } else if (sceneName === 'end6') {
    picture.src = './assets/images/end6.svg';
  } else if (sceneName === 'end7') {
    picture.src = './assets/images/end7.svg';
  } else if (sceneName === 'car') {
    picture.src = './assets/images/car.svg';
  } else if (sceneName === 'walk') {
    picture.src = './assets/images/walk.svg';
  } else if (sceneName === 'train') {
    picture.src = './assets/images/train.svg';
  } else if (sceneName === 'work') {
    picture.src = './assets/images/work.svg';
  } else if (sceneName === 'friends') {
    picture.src = './assets/images/friends.svg';
  } else if (sceneName === 'explore') {
    picture.src = './assets/images/explore.svg';
  } else if (sceneName === 'lonely') {
    picture.src = './assets/images/lonely.svg';
  } else if (sceneName === 'visit') {
    picture.src = './assets/images/visit.svg';
  } else if (sceneName === 'final2') {
    picture.src = './assets/images/final2.svg';
  }


  button1.textContent = scene.choices[0].text;
  button2.textContent = scene.choices[1].text;
  button3.textContent = scene.choices[2].text;

  button1.removeEventListener('click', updateScene);
  button2.removeEventListener('click', updateScene);
  button3.removeEventListener('click', updateScene);

  scene.choices.forEach((choice, index) => {
    const button = index === 0 ? button1 : index === 1 ? button2 : button3;
    button.addEventListener('click', () => {
      updateScene(choice.destination);
    });
  });
}

// Update the initial scene
updateScene('start');

// Line break
const linebreak = document.createElement("br");
const queryForm = document.getElementById("queryForm");
queryForm.appendChild(linebreak);

