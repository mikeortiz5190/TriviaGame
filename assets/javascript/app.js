
    //REFERENCE INTERVAL/TIMER ACTIVITY 5.2

    
    $( document ).ready(function(){
    //  Interval Demonstration
    //  Set our number counter to 100.
    var number =15;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

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
    }

    //  
    window.onload = function(){
    $(".interchange1").hide();  
    $("#start").on("click", startGame);
    };

    //decrement/start function

    function startGame() {
      intervalId = setInterval(decrement, 1000);
      $("#start").hide();
      $(".interchange1").show();
    }

    //  The decrement function.
    function decrement() {
      number--;
      $(".timer").html("<h2> Time Remaining " + number + "</h2>");
      if (number === 0) {

        stop();

        check();

        //  
        
        return false;
      }
    }

    //  The stop function
    function stop() {
      clearInterval(intervalId);
      $(".switch").html($("<h4>").html("YOUR WRONG!"));
    }

    function check() {
      if ($("input:checked").val() === "true"){
        alert("YOUR RIGHT!!!");
      }
    }

    });