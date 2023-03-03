# Nature or Tech

[View live project](https://sharonfranciscofaria.github.io/chooseyourpath/)

Nature or Tech" is an interactive choose-your-own-journey narrative game that centers around the idea of having to choose between nature and technology in our daily lives. The game features two distinct story paths that players can choose from, each with its own character and unique storyline.
<br>  

![Homepage](assets/images/homepage.PNG) 

---

## CONTENTS  
  
  * [User Experience](#user-experience-ux)
    * [Goal](#goal) 
    * [Targets](#targets)
    * [First Time Visitor](#first-time-visitor) 
    * [Returning Visitor](#returning-visitor) 
    * [Frequent Visitor](#frequent-visitor) 
  * [Story Development](#creation-process)
    * [Characters](#characters) 
    * [Location & Objects](#locations) 
    * [Worldbuilding](#worldbuilding) 
  * [Wireframes](#wireframes)
    * [Desktop](#desktop) 
    * [Tablet](#tablet) 
    * [Mobile](#Mobile) 
  * [Design & Media](#design-media)
    * [Brand](#brand) 
    * [Colour Palette](#colour-palette) 
    * [Typography](#typography)  
    * [Artwork](#artwork) 
    * [Audio](#audio) 
    * [Background Video](#background-video)
  * [Desktop, Tablet & Mobile Testings](#desktop-desktop--mobile-testing)
  * [Future Features](#future-features)
  * [Technologies Used](#technologies-used)
  * [Deployment](#deployment)
  * [How to deploy](#how-to-deploy)
  * [Audits](#validation)
    * [HTML Validation](#desktop-preview) 
    * [CSS Validation](#tablet-preview)
    * [JS Validation](#mobile-preview) 
    * [Performance Report](#lighthouse)
    * [Bugs & fixes](#bugs-fixes)
    * [Unsolved bugs](#unsolved-bugs) 
    * [Feedbacks from testers](#feedback)
  * [Credits](#credits) 
    * [References](#references) 
    * [Copyright](#copytright)
    * [Acknowledgements](#acknowledgements)

    --- 

## User Experience (UX)  

### **Goal**  
  
1. Entertaining Experience: Visitors may be looking for an engaging and interactive experience. The choose-your-own-journey narrative game can offer a fun and enjoyable experience that keeps them engaged throughout their journey.

<br>

2. Learning About Nature and Technology: Visitors who are interested in learning about the benefits and drawbacks of nature and technology can benefit from the educational information presented in the game. The interactive format can make the learning experience more engaging and memorable.

<br>

3. Exploring Different Story Paths: Visitors who enjoy interactive narrative games may be interested in exploring the different story paths available in the game. The unique storylines and characters can offer a different experience each time they play.

<br>

4. Sharing with Others: Visitors may want to share their experience with friends and family. The game's engaging and interactive format can make it easy to share and discuss the lessons learned about nature and technology.

<br>

### **Targets**

5. Age Group: The game is appropriate for a wide range of ages, from pre teen to young adults and beyond. The game can also attract parents who would like to educate their young children under supervision. After all the content is educational, and the interactive narrative format may appeal to those who enjoy storytelling and interactive games. 

<br>

6. Geographic Location: The game is relevant to people across the world, regardless of their geographic location. The game is accessible to anyone with an internet connection and an interest in the topic.

<br>

7. User Engagement: The game is designed to keep users engaged and interested throughout their journey. The use of artwork, compelling storytelling, a visually appealing design help keep users engaged.

<br>

8. User Empowerment: The game should empower users to make informed decisions about their use of technology and their relationship with nature. The game should provide users with the tools and knowledge needed to strike a balance between the two.

<br>
 
### **First Time Visitor**

- Learning and playing the Game: The first-time visitor may want to play and learn more about the game, including its premise, gameplay mechanics, and overall purpose. The goal is to finish the game and learn along the way. Regardless of which path they take or decisions. The visitor is free to repeat the game as much as they like,  It provides a new experience each time they are played.

<br>

- Discovering Educational Content: The first-time visitor may be interested in discovering educational content related to the game's theme. 

<br>

- Sharing the Game with Others: The first-time visitor may enjoy the game and want to share it with friends and family who may also be interested in the topic.

<br>


### **Returning Visitor**

- Exploring Different Story Paths: Returning visitors may be interested in exploring the second story path. They may want to experience different endings or make different choices to see how the story changes.

<br>

### **Frequent Visitor**  

- Story update and sharing: they would frequently check to see whether the narrative had been updated, or one could simply wish to re-experience the game again on their own or with their friends or families. 

 <br>

- Engaging with the Community: Frequent visitors may want to engage with other players and community members who share their interest in the game's theme. They may want to participate in online discussions or join social media groups related to the game.

<br>

--- 

## Story Development 
  
### **1. Characters**  
The first thing I have done is finding my character. This is important as a story developer to visualise them in situations whilst I build up the story. Canva provided me with character designs featuring various poses and actions. I carefully selected designs that matched in appearance for the fox. Unfortunately, there were fewer options available for the cat in comparison, so I utilized similar cat designs and primarily used black and white colors to maintain a cohesive aesthetic between the two characters.

![Paddington](assets/images/Paddington.png) 

One of my favorite characters of all time is Paddington, created by Michael Bond. Initially from the jungle, Paddington later finds himself exploring the city. In my case, I have switched things around because the colors of the fox reminded me of Paddington, and since a fox is more likely to prefer living in nature, I thought it would be fitting to have a cat as the city-dwelling character.

![Marshmallow](assets/images/marshmallow.png)

The reason I gave the cat the name Marshmallow was because to me, it resembled a marshmallow.

### **2. Locations & Objects**  

After that, I selected the necessary location and objects for the scene. As a story developer, this step is crucial for me to envision the story as I construct it.

![City](assets/images/locations2.svg)

<br>

![Woods](assets/images/locations.svg)


### **3. World Building**  

Through mind mapping, I was able to create a world-building framework for both paths in my game. Each scene seamlessly transitions into the next, creating a guide to the overall direction of the game. By visualising this framework on Figma, I was able to analyze the story from a more organised perspective and refine the paths to further develop the narrative.

![Worldbuilding](assets/images/worldbuilding.png)

### **4. Story Structure for JavaScript**  

This code updates and manipulates the content of an HTML page based on user interaction. It gets references to various HTML elements using the document.getElementById() method and adds event listeners to buttons using the addEventListener() method. When a button is clicked, the updateScene() function is called with a destination parameter based on the user's choice. The function retrieves a corresponding object from the scenes array based on the sceneName parameter, updates the HTML elements' content using the object's properties, sets the src attribute of the picture element based on the sceneName, removes the event listeners from the buttons, and adds new ones based on the updated choices array. The code loads the initial scene by calling updateScene() with the sceneName parameter of 'start.'


--- 

## Wireframes

Using Figma, I crafted the wireframes both desktop and mobile. Initially, I was unaware that the background would be in video format. however, the design helped me in envisioning the page's appearance, enabling me to experiment with various text fonts, sizes, and weights. This allowed me to style in CSS with ease after visualizing its look and feel.

### **Desktop**  

![Wireframe](assets/images/wireframe.PNG)

### **Mobile**

![Wireframe Mobile](assets/images/wireframe-mobile.PNG)

--- 

## Design & Media

### **Brand**  

I have chosen to go ahead with a text logo for the following reasons: 

1. Flexibility: Text logos are generally more flexible than image-based logos since they can be easily scaled up or down and used in a variety of contexts.

2. Simplicity: Text logos are often simpler and more straightforward than image-based logos, which can make them more memorable and easier to recognize. They can also be more versatile, allowing for variations in font, color, and style.

3. Clarity: Text logos can be more clear and legible than image-based logos, particularly when the logo needs to be displayed at a small size or in a low-resolution format. This can ensure that the logo is always visible and recognizable, even in challenging circumstances.


### **Colour Palette**

Despite using a video for the background, I primarily centered the color palette around blue since it is associated with both nature and technology. White was chosen for the text to ensure readability, as black would have been difficult to see against the video. The colours shown below are an approximate blend of the hues present in the video.
<br>
[Palette Link](https://coolors.co/000000-13102d-1e5c7e-2596be-3ec2d1-c0c4c2-ffffff) 
![colour](assets/images/palette.svg) 

 

### **Typography**

I used Google Fonts for my website, taking advantage of its vast library of 1,493 open source font families. Here are the chosen fonts for this project: 

![VT323](assets/images/vt323.PNG)

1. [VT323, by Peter Hull](https://fonts.google.com/specimen/VT323) was used due its legibility, retro style, and ease of use.

![Quciksand](assets/images/Quicksand.PNG)

2. [Quicksand, Designed by Andrew Paglinawan](https://fonts.google.com/specimen/Quicksand) was used due it's modern and friendly appearance, making it suitable for a wide range of audience. It is also highly legible, making it easy for players to read instructions and text within the game.

### **Artwork & Video**
As a Canva Pro user, I was able to access a wide variety of additional features and resources, including a vast library of licensed images, videos graphics, and templates that could be used without infringing on copyright laws. Drawing on my photography and design skills, I used these resources to create unique and visually striking artwork for this project. Whereas the video I used was included within Canva's library. 

![Woods Art](assets/images/woods-art.PNG)

<br> 

![City Art](assets/images/city-art.PNG)

### **Audio**
![Lexin Music by Aleksey Chistilin](assets/images/pixabay.PNG)
<br>
For this game, I used Pixabay to discover an audio that is free of copyright. I believed that incorporating this would serve as an excellent interactive feature to elevate the overall experience of the player. 
<br>
[Lexin Music by Aleksey Chistilin](https://pixabay.com/music/beautiful-plays-spirit-landscape-118015/) 

--- 

## Desktop, Tablet & Mobile Responsiveness 
My website is designed to be responsive and accessible on any device, mainly thanks to its scrolling functionality. I have tested them across all devices (Iphone, Ipads, Samsung tablets, Ipad mini, Desktop) using google dev tools.

![Responsive](assets/images/responsive.svg)

--- 

## Future Features  
 - Branching the story: This would allow for a more dynamic and personalized experience, as players' previous choices would impact the storyline and the outcome of the game. 

 <br>

 - Multiplayer: This could allow players to work together to achieve a common goal. The multiplayer mode could also include features such as chat or voice communication, leaderboards, and rewards for cooperative play. This could enhance the social aspect of the game and provide an additional layer of engagement for players.

 <br>

 - Customisation: This could allow players to customise their character's appearance and clothing, as well as the environment in which the game takes place. For example, players could choose different outfits that reflect their personal style or select different backgrounds or landscapes that suit their preferences. This could enhance the game's replayability and allow players to create a more personalised experience.

 <br>

 - Providing Feedback and Suggestions: Providing feedback and suggestions using the website rather via social media. 

 <br>

 - Resources: The website may provide additional resources and information related to environmental sustainability and technology use.

 <br>

 - Events: Organising local events based on location to create awareness

 <br>

---   
  
## Technologies Used    

- HTML
    - HTML is used to structure and use Bootstrap components by adding specific classes.
- CSS
    - CSS is used to style components used for the website
- Javascript
    - Javascript is used to create interactive and engaging games with dynamic graphics and user interfaces.
- [Google Fonts](https://fonts.google.com/)
    - I used Google Fonts as it has a library of 1493 open source font families:
      1. [VT323, Designed by Peter Hull](https://fonts.google.com/specimen/VT323)
      2. [Quicksand, Designed by Andrew Paglinawan](https://fonts.google.com/specimen/Quicksand)
- [Figma](https://www.figma.com)
    - The wireframes and the world building was pre-planned and designed via Figma. 
- [Canva](https://www.canva.com/)
    - Canva was used for: 
      1. Granting copyright free graphics to use and create artwork and download in svg / PNG. 
      2. Copyright copyright free video to use as background of website
      3. Designing and testing visuals 
- [Pixabay](https://pixabay.com/users/lexin_music-28841948/?tab=about)
    - Pixabay granted me copyright free music 
- [Coolors](https://coolors.co/)
    - Generated the brand colour palatte
- [QuillBot](https://quillbot.com/)
    - QuillBot was used scan writings and alert any errors in grammar, spelling, punctuation as well as rephrase any research used for the website
- [ChatGPT](https://openai.com/blog/chatgpt/)
    - This was used inform a summary of a topic, for example about nature or tech.
- [GitHub](https://github.com/sharonfranciscofaria)
    - Github stores, manages, and track changes to the project code
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    - Chrome DevTools helped to debug, inspect, test the website's responsive design and check performance analysis tools
- [Am I responsive](https://ui.dev/amiresponsive)
    - Mock up and check responsiveness across different devices 
- [Get Emoji ](ttps://getemoji.com/)
    - Text emojis were used for the home and audio button
- [Font Awesome](https://fontawesome.com/)
    - Font Awesome was used to access to open source social media icons
- [Icons]( https://icons8.com/icons/set/game)
    - Icons was used to download image needed and create favicon

---   
## Deployment

### **How to deploy**  

GitHub was used to deploy the website. These were the steps taken to achieve this:  

1. Login to GitHub account
2. Navigate to the project repository
3. Click the Settings button near the top of the page
4. In the left-hand menu, find and click on the Pages button
5. In the Source section, choose 'main' from the drop-down, select branch menu
6. Select 'root' from the drop-down folder menu
7. Click 'Save' and after a few moments the project will have been made live and a link is visible at the top of the page

---  
    
## Audits 

![Lighthouse](assets/images/audit.PNG) 
  
### **HTML Validation using W3C Validation** 

![screenshot of CSS validation](assets/images/HTML.PNG)

### **CSS Validation using W3C Validation** 

![screenshot of CSS validation](assets/images/CSS.PNG)

### **Javascript Validation using JSHint** 

![screenshot of JSHint validation](assets/images/JS.PNG)

   
### **Bugs & Fixes**  
 1. To ensure that the video does not overlap with the navigation and footer elements, I styled in CSS to create separate containers for each of them and bring them forward in the layout and ensure it's responsive across all devices. 

 2. To address the issue of the text overlapping the video and the white footer appearing, I implemented a solution by designing a video container that fits the entire frame. Additionally, I created a separate container that consolidates the title, context, and image. This allows users to scroll through this section without encountering the problem of the page being cut off and leaving a white footer.

 3. Initially, the audio on my website played automatically as soon as the user entered the site, without giving them any control over it. To address this issue, I used JavaScript to create functions that enable the user to turn the sound on and off at their discretion by simply pressing a button.

### **Unsolved Bugs** 
 
1. Even though I was able to come up with an alternative solution for the video to fill the page, my initial intention was to have the video stretch across the page and expand, which would have eliminated the need for a scroll-down feature for the main body section.

2. Although I found the strong scroll bar on the page disruptive to the design, I was unable to style it as I wanted. As a compromise, I decided to hide the scroll bar while keeping its functionality intact. However, this solution poses a potential problem as it may confuse users into thinking the page is static and that they cannot scroll through it.

3. In Javascript, I wasn't able to add the picture value within the rest (title, context , choices and destination). I had to separate it or it would not work for me.

4. The images takes longer time to load and if the  game is played quickly, it can freeze and crash. 

### **Feedback from testers**  

1. After sharing and testing the link with some friends, they pointed out some errors in the story's destination when clicked. As a result, I was able to correct the errors and update the story's text to make it more relevant.

2. The website game may crash if played too quickly. However, since it is a narrative-based game, the user is compelled to take their time and cannot rush to click the next page, which helps to prevent crashes.

3. Not being able to control the volume when played 
---  

## Credits  
  
### **References**

- [Code Institute](https://codeinstitute.net/ie/) 
- [W3Schools](https://www.w3schools.com/) 
- [StackOverflow](https://stackoverflow.com/)
- [The Wheelchair Guy : How to play Audio Files with JavaScript](https://www.youtube.com/watch?v=3xlws5og44U)
- [Free Code: How To Add Full Screen Video In HTML, CSS](https://www.youtube.com/watch?v=4WMsIele2lI)
- [Times of India](https://timesofindia.indiatimes.com/readersblog/taneesha-ahuja/impact-of-technology-on-environment-43973/)
- [UN](https://www.unep.org/explore-topics/technology/why-does-technology-matter)
- [Deloitte](https://www2.deloitte.com/uk/en/pages/about-deloitte-uk/articles/the-green-room-podcast-episode.html?episode=27#/the-green-room-podcast-is-technology-our-planets-best-hope.html)
- [World Economic Forum](https://www.weforum.org/agenda/2018/08/here-s-how-technology-can-help-us-save-the-planet/)
- [Nature](https://www.nature.com/articles/nature10682)

### **Copyright**

- Artwork & Video: I have used Canva Pro, a paid version of Canva that provides users with access to additional features and resources, including a wider range of images, graphics, and templates. Canva Pro users have access to a large library of licensed materials that can be used in their designs without violating copyright laws. 

<br>

- Story: As the writer of this story, I used my research skills and scriptwriting expertise to develop a narrative that explores the balance between nature and technology. Inspired by my passion for environmental sustainability and appreciation for the benefits of technology, I crafted a story that delves into the complexities of this topic. By weaving together different themes and ideas, I created a unique storyline that reflects my personal values and interests.

<br>

- Audio:The audio was found through Pixabay, an open source platform for images, audio and other graphics. The composer Aleksey Chistilin has over 10 years of experience in composition and music arrangement. Inspired by notable Cinematic composers, his music has been used in multimedia exhibitions and award-winning arthouse films.
<br>
[Royalty Free Music by Lexin Music](https://pixabay.com/music/beautiful-plays-spirit-landscape-118015/) 
<br>


### **Acknowledgements** 
  1. My tutor at Westminster Adult Education Service, Richey Malhotra who helped me immensely from the beginning of the project to when I got stuck at some codes. A big thanks for guiding me throughout the whole project.

  <br>

  2. My classmates and team at Westminster Adult Education Service who have been kind to help one another when in need, share ideas and jokes around when working together!

  <br>
  
  3. My partner Juan Carlos Diaz Lara, whom I am thankful for introducing me into this coding world and taking the journey with me.
