
// Scenes of the story are stored in this central data structure
// it has the following design:

// dictionary for which each key is the name of a scene, and each value is an object which contains three fields: title, context, and choices
// choices is itself a list of objects, where each object is a label for a button and the scene to jump to when that button is pressed

// The scenes and choices
const scenes = {
    'start': {
      title: 'Are you ready to choose your path?',
      context: 'You get to decide which path the character will take as it tries to navigate the gap between the natural and technological worlds. Along the road, there will be many obstacles to overcome, and the path you take will depend on the decisions you make.',
      choices: [
        {
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
      context: 'Paddington is a nature lover, while his best friend, a tech-loving cat, enjoys a luxurious lifestyle. Despite their differences, they share a strong friendship. Who wil you join? ',
      choices: [
        {
            text: 'Join Paddington!',
            destination: 'wood'
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
      context: 'Start by reading the introduction or prologue of the game to get a sense of the setting and characters. As you progress through the game, you will be presented with different scenarios and choices. Read each choice carefully and think about what you want to do. Scroll and click on the button that corresponds to the choice you want to make. Choose wisely!Read the text carefully and try to immerse yourself in the narrative. Continue making choices and exploring the different paths until you reach the end of the game.These are the instructions for playing the game.',
      choices: [
        {
            text: 'Join Paddington!',
            destination: 'wood'
          },
          {
            text: 'Join Marshmallow',
            destination: 'city'
          },
          {
            text: 'Home',
            destination: 'start'
          }
      ]
    },
    'about': {
      title: 'About',
      context: 'TThis game was developed by Sharon Francisco Faria. Music by composer Aleksey Chistilin, an open source audio for the game. Artwork created by Sharon Francsico Faria using Canva Pro. Permission granted. ',
      choices: [
        {
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
    }
  };
  
  // Get the HTML elements
  const picture = document.getElementById('picture');
  const title = document.getElementById('title');
  const context = document.getElementById('context');
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');
  
  // Add event listeners to the buttons
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
  
  // Function to update the current scene
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
  