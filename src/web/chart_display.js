console.log(feedbacks.length);
var ctx = document.getElementById("myChart");
var total_feedbacks = feedbacks.length;
var total_generic_fbs = 0;
var total_exp_fbs = 0;
var total_lab_fbs = 0;
var total_edx_lab_fbs = 0;
var total_edx_exp_fbs = 0;
var url_feedbacks = 0;
var base_url = 'http://localhost:5000';
var inst_url = base_url+"/institutes";
for(var i=0;i<total_feedbacks;i++){
    if(feedbacks[i].version == "open-edx-virtual-labs-v2.0_for_experiment"){
	total_edx_exp_fbs += 1;	
    }
    else if(feedbacks[i].version == "open-edx-virtual-labs-v2.0_for_lab"){
	total_edx_lab_fbs += 1;	
    }
    else if(feedbacks[i].version == "generic-lab-feedback-v2.0"){
	total_lab_fbs += 1;	
    }
    else if(feedbacks[i].version == "generic-exp-feedback-v2.0"){
	total_exp_fbs += 1;	
    }
    else if(feedbacks[i].version == "generic-feedback-v2.0"){
	total_generic_fbs += 1;	
    }
}

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
	labels: ["open-edx-virtual-labs-v2.0_for_experiment", "open-edx-virtual-labs-v2.0_for_lab", "generic-lab-feedback-v2.0", "generic-exp-feedback-v2.0", "generic-feedback-v2.0"],
	datasets: [
            {
		label: "My First dataset",
		backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
		],
		borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
		],
		borderWidth: 1,
		data: [total_edx_exp_fbs, total_edx_lab_fbs, total_lab_fbs, total_exp_fbs, total_generic_fbs],
            }
	]
    }
    
});
