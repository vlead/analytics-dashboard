var ctx = document.getElementById("myChart");
console.log(feedbacks.length);
document.write(feedbacks.length);
var m, question_type, answer_type, n, version;
var feedbackLen = feedbacks.length;
var myChart = new Chart(ctx);
var version_list = new Array();
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
      contains(feedbacks,version);
    }
    
  }
  function contains(feedbacks, version) {
    for (var i = 0 ; i<feedbacks.length; i++) {
      if (version_list.contains(version)){
          break;
        }
        else {
          version_list.push(version);
          document.write(version_list);
        }      
      }
  }
  console.log(myChart);
}
