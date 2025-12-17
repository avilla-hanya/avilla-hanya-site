//Adjusts width of sidebar navigation to 250px
//Also need to push the page to the right
function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

//Closes the sidebar again by returning the width to 0
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function checkAnswers() {
  //set starting score to zero
  let score = 0;
  //assign quiz elements to quiz variable
  quiz = document.forms.quiz.elements;
  
  //assign the correct answer to a variable
  answer1 = quiz.chaos.value;
  //checks if the answer is correct
  if (answer1 == "kirk") {
    //adds 25 to the score for correct answer
    score = score + 25;
  }

  answer2 = quiz.knights.value;
  if (answer2 == "11") {
    //adds 25 to the score for correct answer
    score = score + 25;
  }

  answer3 = quiz.omen.value;
  if (answer3 == "mohg") {
    //adds 25 to the score for correct answer
    score = score + 25;
  }

  answer4 = quiz.moonveil.value;
  if (answer4 == "executor") {
    //adds 25 to the score for correct answer
    score = score + 25;
  }
  alert("Thanks for playing. You scored " + score);
}
