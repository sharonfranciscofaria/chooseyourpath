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
        choices: [{
            text: 'Begin!',
            destination: 'farewell'
        }, ]
    },

    // Paddington Path
    'farewell': {
        title: 'Farewell my friend',
        context: 'Marshmallow decided to pursue his career in a prestigious tech company in the city, while Paddington happily embarked on his adventure in the forest with minimal supplies and no work responsibilities. Despite their bittersweet farewell, both friends embraced their chosen paths.',
        image: 'farewell.svg',
        choices: [{
                text: 'Join Paddington',
                destination: 'woods'
            },
            {
                text: 'Join Marshmallow',
                destination: 'city'
            },
        ]
    },

    'woods': {
        title: 'Into the woods',
        context: 'As Paddington immersed himself in the sights and sounds of nature, he lost track of time until he realised it was getting late, and he was left thirsty and hungry with no more water  or food left.',
        image: 'woods.svg',
        choices: [{
                text: 'Try to find shelter',
                destination: 'shelter'
            },
            {
                text: 'Find some food',
                destination: 'food'
            },
            {
                text: 'Find some water',
                destination: 'water'
            },
        ]
    },
    'food': {
        title: 'The Blue Lake: Safe or not safe',
        context: 'Paddington searches for food in the dense forest for hours, his hunger growing more intense. Just as he was about to lose hope, he remembered he could use his phone! He followed the map and finally found a lake!',
        image: 'food.svg',
        choices: [{
                text: 'Go fishing',
                destination: 'fish'
            },
            {
                text: 'Hunt',
                destination: 'hunt'
            },
            {
                text: 'Eat wild berries',
                destination: 'end1'
            },
        ]
    },

    'water': {
        title: 'The Blue Lake: Safe or not safe',
        context: 'Paddington searches for water in the dense forest for hours, his thirst growing more intense. Just as he was about to lose hope, he remembered he could use his phone! He followed the map and finally found a lake!',
        image: 'water.svg',
        choices: [{
                text: 'Collect some water and refill',
                destination: 'end2'
            },
            {
                text: 'Collect berries and smash it into juice',
                destination: 'end3'
            },
            {
                text: 'Skip for tonight, sleep there for the night',
                destination: 'night'
            },
        ]
    },

    'fish': {
        title: 'Wood and Fire',
        context: 'Eager to satisfy his hunger, he quickly fashioned a makeshift fishing rod from a stick and some twine. After several attempts, he finally managed to catch a small fish. But then, he realised he had no kitchen! He searched his surroundings for anything that could help him start a fire.',
        image: 'fish.svg',
        choices: [{
                text: 'Try to cut down some wood',
                destination: 'end4'
            },
            {
                text: 'Start fire right to the ground of the leaves',
                destination: 'end5'
            },
            {
                text: 'Set stones and add little wood branches',
                destination: 'night'
            },
        ]
    },

    'night': {
        title: 'First night',
        context: 'Paddington settles down to sleep. But in the middle of the night, he wakes up feeling alone and nostalgic about his life before his forest adventure. He decides to call Marshmallow. Concerned, Marshmallow researches and finds information about a nearby cave to assist Paddington.',
        image: 'night.svg',
        choices: [{
            text: 'Next',
            destination: 'onemonth'
        }, ]
    },

    'onemonth': {
        title: 'One month later: New source of Food?',
        context: 'After surviving for a month, Paddington becomes tired of eating the same food and using the same resources. Now more alert to the dangers of wild animals, Paddington decides to venture further into the forest in search of new sources of food and supplies.',
        image: 'onemonth.svg',
        choices: [{
                text: 'Try the new berries growing',
                destination: 'danger'
            },
            {
                text: 'Go fishing! It’s safe!s',
                destination: 'danger'
            },
            {
                text: 'Hunt',
                destination: 'end6'
            }
        ]
    },

    'danger': {
        title: 'A new friend?',
        context: 'On his way back, Paddington encounters a wild bear.',
        image: 'danger.svg',
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
            },
        ]
    },

    'call': {
        title: 'A close call',
        context: 'He escapes the creature and gets lost. He uses GPS to find his way home and starts marking his path. Paddington hesitates to call his friend due to low battery but decides to call anyway.',
        image: 'call.svg',
        choices: [{
            text: 'Next',
            destination: 'friend'
        }, ]
    },

    'reunited': {
        title: 'Marshmallow pays a visit to Paddington and confides that she has been struggling with stress in the city. However, being in the forest has helped her relax. She is amazed by its beauty and peacefulness. <br>Paddington and Marshmallow experiences taught them important lessons about themselves and the world. Paddington learned the value of resourcefulness and adapting to change, while Marshmallow discovered the joy of slowing down and appreciating life simple pleasures.',
        context: 'On his way back, Paddington encounters a wild bear.',
        image: 'reunited.svg',
        choices: [{
            text: 'Next',
            destination: 'coexisting'
        }, ]
    },

    'coexisting': {
        title: 'Congratulations!',
        context: 'Together, Paddington and Marshmallow joined forces to bridge the gap between the natural world and technology. They became champions for sustainability and environmental preservation, leveraging their diverse perspectives to create a better future for all.',
        image: 'coexisting.svg',
        choices: [{
            text: 'Next: Together we fight!',
            destination: 'final'
        }, ]
    },

    'final': {
        title: 'Congratulations!',
        context: 'Congratulations! Through guiding Paddington, you gained a deeper understanding of balancing technology and respect for the environment. <br>Although technology makes our lives easier, we must not forget that nature provides us with resources and beauty. By respecting and protecting nature, we can ensure that future generations enjoy the same benefits. Thank you for playing! Do not hesitate to restart the game to explore Marshmallow Path.',
        image: 'final.svg',
        choices: [{
            text: 'Restart',
            destination: 'start'
        }, ]
    },
    // Paddingtons endings

    'end1': {
        title: 'Poison!',
        context: 'Sorry you ate some poisonous berries and got sick. You tried to call the A&E but could not get any network. The end.',
        image: 'end.svg',
        choices: [{
            text: 'Go back',
            destination: 'food'
        }, ]
    },

    'end2': {
        title: 'Unfiltered Water!',
        context: 'Sorry you drank unfiltered water and got sick. You tried to call the A&E but could not get any network. The end.',
        image: 'end.svg',
        choices: [{
            text: 'Go back',
            destination: 'water'
        }, ]
    },

    'end3': {
        title: 'Poison!',
        context: 'Sorry you drank some poisonous berries and got sick. You tried to call the A&E but could not get any network. The end.',
        image: 'end.svg',
        choices: [{
            text: 'Go back',
            destination: 'water'
        }, ]
    },

    'end4': {
        title: 'The tree falls on you!',
        context: 'You have no skills cutting down a tree and so instead of cutting it away from you, you cut it towards you. plus, cutting down trees leads to climate change, soil erosion, desertification, fewer crops, floods, more greenhouse gases in the air, and numerous issues.',
        image: 'end.svg',
        choices: [{
            text: 'Go back',
            destination: 'fish'
        }, ]
    },

    'end5': {
        title: 'Fire!',
        context: 'You start up a fire in the woods and you are unable to control it. The end.',
        image: 'end.svg',
        choices: [{
            text: 'Go back',
            destination: 'fish'
        }, ]
    },

    'end6': {
        title: 'Hunt to be hunted!',
        context: 'You have no skills hunting, instead those wild animals attacked you and you got hurt. Plus, Hunting can lead to the loss of biodiversity, disturbance to ecosystems, and the depletion of populations of certain species.',
        image: 'end.svg',
        choices: [{
            text: 'Go back',
            destination: 'onemonth'
        }, ]
    },

    'end7': {
        title: 'Hunted',
        context: 'While bears can be accustomed to humans through training, they cannot be entirely domesticated. These solitary animals demand an extensive amount of food and will hunt when in need.',
        image: 'end.svg',
        choices: [{
            text: 'Go back',
            destination: 'danger'
        }, ]
    },
    // Marshmallow Path
    'city': {
        title: 'Living the life: a fantasy',
        context: 'Marshmallow gets so excited having access to all of the gadgets and lavish lifestyle. She prepares for her first day and is excited to start her week in this high-tech world. Her first challenge? Getting to work on time.',
        image: 'farewell2.svg',
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
            },
        ]
    },
    'car': {
        title: 'Car: Getting late?',
        context: 'Marshmallow takes her car and is ready to go.. a couple of minutes later, she gets stuck in the middle of the traffic. She opens the window trying to breathe but it’s toxic and highly polluted.',
        image: 'car.svg',
        choices: [{
                text: 'Try to park somewhere and walk',
                destination: 'walk'
            },
            {
                text: 'Try to park somewhere and take the train',
                destination: 'train'
            },
            {
                text: 'Stay and be patience, the company will understand',
                destination: 'work'
            },
        ]
    },

    'walk': {
        title: 'Walk: Getting late? ',
        context: 'As you walk, you notice that nobody smiles or greets one another. The constant barrage of notifications and alerts on their devices seems to have made people forget how to interact with each other in real life. The world seems cold, sterile, and devoid of any human connection.',
        image: 'walk.svg',
        choices: [{
                text: 'Ignore the feeling',
                destination: 'work'
            },
            {
                text: 'Focus on getting to work on time',
                destination: 'work'
            },
            {
                text: 'Check your phone like everyone else',
                destination: 'work'
            },
        ]
    },

    'train': {
        title: 'The train and people',
        context: 'Marshmallow takes the train, it’s quick to get to work. Trains or subways produce only one-third of carbon dioxide emissions compared to the average passenger vehicle.  You notice that no one is making eye contact, and nobody seems to acknowledge your presence. People walk with their heads down, scrolling through their phones or typing away on their laptops.',
        image: 'train.svg',
        choices: [{
                text: ' Ignore the feeling and carry on',
                destination: 'work'
            },
            {
                text: 'Read a book',
                destination: 'work'
            },
            {
                text: 'Check your phone',
                destination: 'work'
            },
        ]
    },

    'work': {
        title: 'First day at work',
        context: 'Marshmallow makes her way towards the towering high-tech building, her first day of work. The building is a sleek and modern structure, with shining glass panels, fake plants and polished metal accents. ',
        image: 'work.svg',
        choices: [{
                text: ' Go and check out those new techs!',
                destination: 'explore'
            },
            {
                text: 'Make some new friends?',
                destination: 'friends'
            },
            {
                text: 'Walk around the building and explore!',
                destination: 'explore'
            },
        ]
    },

    'friends': {
        title: 'A new friend?',
        context: 'People are not very friendly and seem to be entirely focused on their work. There is no chit-chat or idle talk, only the clicking of keyboards and the sound of people on phone calls. Despite the lack of interaction, you are amazed by the tech and come across a VR device.',
        image: 'friends.svg',
        choices: [{
            text: 'Next',
            destination: 'explore'
        }, ]
    },

    'explore': {
        title: 'Explore',
        context: 'You are amazed by the tech and the environment. You try the new VR device hoping to give a sense of nature in the virtual world. You spend hours wandering the city, but find nothing resembling nature. As the day wears on, you start to feel more and more frustrated and disconnected from the world around you.',
        image: 'explore.svg',
        choices: [{
            text: 'Next',
            destination: 'lonely'
        }, ]
    },

    'lonely': {
        title: 'A new friend?',
        context: 'After a month has gone by, Marshmallow has grown tired of this city. She longs for the company of her friends and the simple pleasures of life, such as breathing in fresh air, indulging in good quality food, taking trips to the beach, or strolling through the park and listening to the chirping of birds. These feelings of longing and isolation leave Marshmallow feeling downcast and depressed, prompting her to consider reaching out to Paddington for comfort.',
        image: 'lonely.svg',
        choices: [{
            text: 'Next',
            destination: 'coexisting2'
        }, ]
    },

    'coexisting2': {
        title: 'A close call',
        context: 'Paddington pays Marshmallow a visit and shares that he has been facing difficulties meeting his basic needs, such as food and shelter. Nonetheless, being in the city has provided him with easy access to safe food, financial resources, electricity, heating, and the ability to stay connected with friends and family worldwide. Through their respective experiences, both Paddington and Marshmallow have gained valuable insights about themselves and the world. Paddington has come to appreciate the importance of resourcefulness and adapting to change, whereas Marshmallow has learned to savour life simple pleasures and embrace a slower pace of living.',
        image: 'coexisting2.svg',
        choices: [{
            text: 'Next: Together we fight!',
            destination: 'final2'
        }, ]
    },

    'final2': {
        title: 'Congratulations!',
        context: 'Congratulations! Through guiding Paddington, you gained a deeper understanding of balancing technology and respect for the environment. <br>Although technology makes our lives easier, we must not forget that nature provides us with resources and beauty. By respecting and protecting nature, we can ensure that future generations enjoy the same benefits. Thank you for playing! Do not hesitate to restart the game to explore Paddingtons Path.',
        image: 'final.svg',
        choices: [{
            text: 'Restart',
            destination: 'start'
        }, ]
    },
}