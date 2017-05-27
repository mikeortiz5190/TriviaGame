
    //REFERENCE INTERVAL/TIMER ACTIVITY 5.2

    
    $( document ).ready(function(){
    //  Interval Demonstration
    //  Set our number counter to 100.
    var number = 3;

    var correct = 0;

    var wrong = 0;

    var intervalId;

/*
    answers = {
      an1: "1969",
      an2: "Nitrogen",
      an3: "string theory",
      an4: "the glutious max",
      an5: "adolf hitler"
    };

    questionOne = {
      respA1:"1981",
      respA2:"1969",
      respA3:"1973",
      respA4:"1965"
    };

    questionTwo = {
      respB1:"Oxygen",
      respB2:"Nitrogen",
      respB3:"Hydrogen",
      respB4:"Argon"
    }

    questionThree = {
      respC1:"Special theory of relativity",
      respC2:"General theory of relativity",
      respC3:"The photoelectric effect",
      respC4:"String theory"
    }

    questionFour = {
      respD1:"The toungue",
      respD2:"The rear deltoid",
      respD3:"The glutious max",
      respD4:"The trapazidious"
    }

    questionFive = {
      respE1:"Adolf Hitler",
      respE2:"Theodore Roosavelt",
      respE3:"Alexander Graham Bell",
      respE4:"Thomas Edison"
    }*/

    //Turn each question div into a variable

    var questOne = $(".interchange1");

    var questTwo = $(".interchange2");
    
    var questThree = $(".interchange3");

    var questFour = $(".interchange4");

    var questFive = $(".interchange5");

    //Place them into an array

    var question = [questOne, questTwo, questThree, questFour, questFive];

    //Hides all the questions in the HTML
    window.onload = function(){
    $("#start").on("click", startGame);
    $(".interchange1").hide();  
    $(".interchange2").hide();
    $(".interchange3").hide();
    $(".interchange4").hide();
    $(".interchange5").hide();
  };
  
  //Click the button to start the game and call QuizMe

  //The function will take turns showing and hiding each question div to the user. the user clicks on a response and has only 10
  //seconds to respond. once time expires, the code will return whether the user got the answer correct or not. then after 3 seconds, 
  //the code will loop again to the next question and repeat until all questions have been ran through the code.


  function startGame(){
    $("#start").hide();
    QuizMe();

  }

function QuizMe() {

  for(i = 0; i < question.length; i++){

    question[i].show();
    //question[i-1].hide();

    //decrement/start function
    function Timer() {
      intervalId = setInterval(decrement, 1000);
 
    }

    //decrement function.
    function decrement() {
      number--;
      $(".timer").html("<h2> Time Remaining " + number + "</h2>");
      if (number === 0) {

        stop();

        checkOne();

        setTimout(function(){
        }, 5000);
        
        return false;
      }
    }

    //stop function
    function stop() {
      clearInterval(intervalId);
    }

    function checkOne() {
      if ($("input:checked").val() === "true"){
      $(".switchOne").html($("<h4>").html("YOUR CORRECT!"));
      correct++;
      }
      else {
      $(".switchOne").html($("<h4>").html("YOUR WRONG!"));
      wrong++
      }
    }
  }
  console.log(correct);
  console.log(wrong);
}

//P.S, the code worked when I ran just one question without a for loop. When I started to incorporate
//the for loop for multiple questions, things didn't work as planned by the time this was turned in :(
  //I know we were told to use objects but I belive this method was more efficient, If I got it to work of course lol.
    

    });