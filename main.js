/* Exercise 1 
1. Use a script tag to link to this file.
2. Create a function called greet
Inside the function, log "Hello world" in the console
3. Call the function
4. Edit the function to add a parameter: greeting
Inside the function, change "Hello World" to greeting to log it in the console
5. Edit the function call to include a string argument - the greeting of your choice.
*/




/* Exercise 2
1. In main.js, use the DOM to select the p tag with id moon-fact-1 and assign it a variable
2. Create a function called factOne
Inside factOne(), set the textContent of the p tag to a string containing a moon fact from moon-facts.txt
3. In index.html, add the onclick attribute to the flag pin image tag 
Set its value to call the factOne() function
*/




/* Exercise 3
1. In main.js, use the DOM to select the p tag with id moon-fact-2 and assign it a variable
2. Create a function called factTwo
Inside factTwo(), set the textContent of the p tag to a string containing a moon fact from moon-facts.txt
3. Outside the function, use the DOM to select the pin image tag with id fact-2-icon
4. Use the .addEventListener() method to add a click event listener to the flag image. Have it call function factTwo on click
*/

/* Exercise 4
1. Inside function factTwo(), set the src property of factTwoIcon to a string containing pin-blue.png
2. EDIT the line you just created, replace factTwoIcon with the word this
*/





/* Exercise 5 - Finish the moon facts
1. Use the querySelector method to select the p tag with id moon-fact-3
2. Create a function called factThree()
Inside the function, change the textContent of the p tag to the text of another fact from moon-facts.txt
Change the flag image to pin-blue.png, use either the variable or the this keyword for the flag image object
3. Outside the function, add an event listener for the click event and have it call the factThree function
4. Repeat the same steps for moon-fact-4, moon-fact-5

Secret alien base
5. Use the querySelector method to select the p tag with id moon-fact-6
6. Create a function called secret()
Inside the function, change the textContent of the p tag to text about a secret alien moon base 
Change the flag image to the alien ship
7. Outside the function, add an event listener for the click event and have it call the secret function
*/



/*****  Bonus Exercise - Fixing the first flag image ******
1. In index.html, add an argument, this, to the factOne() function call in the flag image tag.
2. In main.js, add a parameter called icon to the factOne() function
3. Inside the function, run the src property on the parameter icon and set its value to "pin-blue.png" 
*/
function greet(greeting) {

    console.log(greeting);
}


greet("Welcome to the Interactive Moon Facts project!");
const factOneTag = document.getElementById('moon-fact-1');


function factOne() {

    factOneTag.textContent = "The moon is Earth's only natural satellite.";
}

factOne();
<img class="pin" src="pin-red.png" onclick="factOne();"></img>
const factTwoTag = document.getElementById('moon-fact-2');


function factTwo() {
  
    factTwoTag.textContent = "The moon is about 1/6th the size of Earth.";
}


factTwo();
const factTwoIcon = document.querySelector('#fact-2-icon');

function factTwo() {

    factTwoTag.textContent = "The moon is about 1/6th the size of Earth.";

    this.src = "pin-blue.png";
}

factTwoIcon.addEventListener('click', factTwo);
const factThreeTag = document.querySelector('#moon-fact-3');
const factFourTag = document.querySelector('#moon-fact-4');
const factFiveTag = document.querySelector('#moon-fact-5');


const factThreeIcon = document.querySelector('#fact-3-icon');
const factFourIcon = document.querySelector('#fact-4-icon');
const factFiveIcon = document.querySelector('#fact-5-icon');


function factThree() {
  
    factThreeTag.textContent = "The moon has a thin exosphere composed mostly of hydrogen, helium, neon.";

    this.src = "pin-blue.png";
}


function factFour() {
    
    factFourTag.textContent = "The moon takes about 27.3 days to rotate on its axis and complete one orbit around Earth.";

  
    factFourIcon.src = "pin-blue.png";
}


function factFive() {
   
    factFiveTag.textContent = "The moon's gravity is about 1/6th of Earth's gravity.";

    
    this.src = "pin-blue.png";
}


factThreeIcon.addEventListener('click', factThree);
factFourIcon.addEventListener('click', factFour);
factFiveIcon.addEventListener('click', factFive);
const factSixTag = document.querySelector('#moon-fact-6');


const alienShipIcon = document.querySelector('#alien-ship-icon');


function secret() {

    factSixTag.textContent = "Did you know? There's a secret alien base on the moon! 👽";


    alienShipIcon.src = "alien-ship.png";
}


alienShipIcon.addEventListener('click', secret);
function factOne(icon) {
   
    factOneTag.textContent = "The moon is Earth's only natural satellite.";

    icon.src = "pin-blue.png";
}