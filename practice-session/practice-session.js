/* 
Practice session
Project:
Open index.html with Live Server. There are 2 statements.
When the user clicks a button, use JavaScript to add a comment that says "Correct!"" or "Incorrect!"

Exercise 1 - First question
1. Examine the HTML so you can determine which tag to select, and add a unigue id to it. Use the DOM to select it.
2. Create a function for a true answer and a function for a false answer. 
Inside each function, show a comment that says either "Correct!" or "Incorrect!"
3. Call the functions using an event attribute in index.html

Exercise 2 - Second question
This time, when a user clicks, next to the words Correct or Incorrect inside the comment, show the user an image, thumbs-up.png or thumbs-down.png
Look at the example screenshot to see what the output should look like.
Also, use the addEventListener method instead of an event attribute to call the functions.
1. Examine the HTML so you can determine which tags you need to select, and add a unigue id to them. 
Use the DOM to select them.
2. Create a function for a true answer and a function for a false answer. 
Inside the function, show a comment that says either "Correct!" or "Incorrect!" next to an image of either thumbs up or down. Add a class to the images and use CSS to size them so they look good.
3. Call the functions by adding an event listener to the buttons using the addEventListener() method.
____________
Hint 1 - Don't forget to to use the script tag to link to this file.
Hint 2 - Use variables to save yourself some repetitive typing.
*/







function showFeedback(isCorrect) {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = isCorrect ? 'Correct! <img src="thumbs-up.png" class="feedback-image">' : 'Incorrect! <img src="thumbs-down.png" class="feedback-image">';
}


function handleTrue() {
    showFeedback(true);
}


function handleFalse() {
    showFeedback(false);
}


document.getElementById('trueBtn').addEventListener('click', handleTrue);
document.getElementById('falseBtn').addEventListener('click', handleFalse);
