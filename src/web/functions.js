var ctx = document.getElementById("myChart");
console.log(feedbacks.length);
document.write(feedbacks.length);
var m, question_type, answer_type, n, version;
var feedbackLen = feedbacks.length;
document.write("hellooooo");
var myChart = new Chart(ctx);
{
  for (m = 0; m<feedbackLen; m++) {
    responses=feedbacks[m]['responses'];
    version=feedbacks[m]['version'];    
    for (n = 0; n<responses.length; n++) {
      //feedbacks[m]['responses'][n]['question'].setItem('name', 'ques');
      question_type = feedbacks[m]['responses'][n]['question'].name;
      answer_type=feedbacks[m]['responses'][n]['answers'][0].name;
      console.log(version);
      console.log(question_type);
      console.log(JSON.stringify(answer_type));
    }
    
   
  }
  document.write(n);
}
console.log(myChart);
