var readlineSync =require("readline-sync");

function Welcome(){
    var Username =readlineSync.question("What's your name");
    console.log("Welcome"+Username+"Do you konw Anshu");
}
   var score=0;
function play(question,answer){
   var UserAns=readlineSync.question(question);
   if(UserAns.toUperCase() === answer.toUperCase())
   {
    console.log("Great That's right!");
    score++;
   }
    else{
        console.log("Ohh that wrong!");
    }

    console.log("Current Score :"+score);
    console.log("---------------------");
}

var QA =[{
  question:"where do I live ?",
  answer:"Allahabad"
} ,
  {
  question:"Who is my favorite superhero ?",
  answer:"Dhruv"
},
{
  question:"Which is my favorite sad song?",
  answer:"Channa Meraya"
}]

for(var i=0;i<QA.length;i++){
    var currentQuestion=QA[i];
    play(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY! YOU SCORDED"+ score);