var ctx = document.getElementById("myChart");
console.log(feedbacks.length);
var m, responses, answers;
var questions;
var feedbackLen = feedbacks.length;
document.write("hellooooo");
var myChart = new Chart(ctx);
{
  for (m = 0; m<feedbackLen; m++) {
    //document.write(JSON.stringify(feedbacks));
    responses=feedbacks[m]['responses'];
    questions=responses[m]['question'];
    answers=responses[m]['answers'];
    //answers=answers[m];
    console.log(responses);
    console.log(questions);
    console.log(answers);
     }
}
console.log(myChart);
