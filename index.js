var readLineSync = require('readline-sync');
var userName = readLineSync.question("Dear user, Please enter your name: ");

console.log("Welcome" + " "+ userName+" "+ "to the game - DO YOU KNOW ME!");

var qandA = [{
  question: "What is my favorite food ? ",
  answer: "Biriyani"
},
{
  question: "Where do I live ? ",
  answer: "Chennai"
},
{
  question: "Who is my Boyfriend ? ",
  answer: "Naga"
},
{
  question: "Do I love travel ? ",
  answer: "Yes"
},
{
  question: "Which is my Favourite Color ? ",
  answer:"Green"
}
]

var score =0;

function play(question,answer){
  var useranswer = readLineSync.question(question);
  if(useranswer == answer){
    console.log("Hurray ! You're right !");
    score+=1;
  }
  else{
    console.log("OOPS ! You're wrong !");
  }
  console.log("Your score is :" + " "+ score);
  console.log("*********************");
}

for(var i=0;i<qandA.length;i++){
  play(qandA[i].question, qandA[i].answer);
}

console.log("Your final score is :" + " "+ score);