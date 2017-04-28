var ctx = document.getElementById("myChart");
var total_vlabs_generic_fbs = 0;
var total_exp_fbs = 0;
var total_lab_fbs = 0;
var total_edx_lab_fbs = 0;
var total_edx_exp_fbs = 0;
var url_feedbacks = 0;
var total_generic_fbs = 0;
var count = 0;
var elastic_url = "http://10.4.12.46/vlabs/feedback/_search?size=10000";
$.getJSON(elastic_url, function(data) {
    total_feedbacks = data['hits']['hits'];
  console.log("total_fbs" + total_feedbacks.length);
    for(var i=0;i<total_feedbacks.length;i++){
	if(total_feedbacks[i]['_source']['version'] == "open-edx-virtual-labs-v2.0_for_experiment"){
	    total_edx_exp_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "open-edx-virtual-labs-v2.0_for_lab"){
	    total_edx_lab_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-lab-feedback-v2.0"){
	    total_lab_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-exp-feedback-v2.0"){
	    total_exp_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "virtual-labs-feedback-v1.0"){
	    
	    total_vlabs_generic_fbs += 1;
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-feedback-v2.0") {
	    total_generic_fbs += 1;	
	}
    }
    console.log("open-edx-virtual-labs-v2.0_for_experiments " + total_edx_exp_fbs);
    console.log("open-edx-virtual-labs-v2.0_for_lab " + total_edx_lab_fbs);
    console.log("generic-lab-feedback-v2.0 " + total_lab_fbs);
    console.log("generic-exp-feedback-v2.0 " + total_exp_fbs);
    console.log("virtual-labs-feedback-v1.0 " + total_vlabs_generic_fbs);
    console.log("generic-feedback-v1.0 " + total_generic_fbs);
    var myBarChart = new Chart(ctx, {
	type: 'bar',
	data: {
	    labels: ["open-edx-virtual-labs-v2.0_for_experiment", "open-edx-virtual-labs-v2.0_for_lab", "generic-lab-feedback-v2.0", "generic-exp-feedback-v2.0", "virtual-labs-feedback-v1.0", "total_generic_fbs"],
	    datasets: [
		{
		    label: "Feedbacks Dashboard",
		    backgroundColor: [
			'rgba(255, 51, 51, 1)',
			'rgba(14, 128, 154, 1)',
			'rgba(255, 204, 0, 1)',
			'rgba(51, 204, 51, 1)',
			'rgba(0, 153, 225, 1)',
			'rgba(255, 51, 153, 1)'
		    ],
		    borderColor: [
		      'rgba(255, 51, 51, 1)',
			'rgba(14, 128, 154, 1)',
			'rgba(255, 204, 0, 1)',
			'rgba(51, 204, 51, 1)',
			'rgba(0, 153, 225, 1)',
			'rgba(255, 51, 153, 1)'
		    ],
		    borderWidth: 1,
		    data: [total_edx_exp_fbs, total_edx_lab_fbs, total_lab_fbs, total_exp_fbs, total_vlabs_generic_fbs, total_generic_fbs],
		}
	    ]
	}
	
    });
    
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
    location.reload();
  })
  .always(function() {
    console.log( "complete" );
  });

//version base graphs

var elastic_url = "http://10.4.12.46/vlabs/feedback/_search?q=version:virtual-labs-feedback-v1.0&size=10000";
$.getJSON(elastic_url, function(data) {
    total_feedbacks = data['hits']['hits'];
    console.log(total_feedbacks);
    console.log(total_feedbacks.length);
    for(var i=0;i<total_feedbacks.length;i++){
	if(total_feedbacks[i]['_source']['version'] == "open-edx-virtual-labs-v2.0_for_experiment"){
	    total_edx_exp_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "open-edx-virtual-labs-v2.0_for_lab"){
	    total_edx_lab_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-lab-feedback-v2.0"){
	    total_lab_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-exp-feedback-v2.0"){
	    total_exp_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "virtual-labs-feedback-v1.0"){
	    total_generic_fbs += 1;	
	}
    }
var ctx = document.getElementById("versionChart");    
    var myBarChart = new Chart(ctx, {
	type: 'bar',
	data: {
	    labels: ["open-edx-virtual-labs-v2.0_for_experiment", "open-edx-virtual-labs-v2.0_for_lab", "generic-lab-feedback-v2.0", "generic-exp-feedback-v2.0", "virtual-labs-feedback-v1.0"],
	    datasets: [
		{
		    label: "Feedbacks Dashboard",
		    backgroundColor: [
			'rgba(255, 51, 51, 1)',
			'rgba(14, 128, 154, 1)',
			'rgba(255, 204, 0, 1)',
			'rgba(51, 204, 51, 1)',
			'rgba(0, 153, 225, 1)',
			'rgba(255, 51, 153, 1)'
		    ],
		    borderColor: [
			'rgba(255, 51, 51, 1)',
			'rgba(14, 128, 154, 1)',
			'rgba(255, 204, 0, 1)',
			'rgba(51, 204, 51, 1)',
			'rgba(0, 153, 225, 1)',
			'rgba(255, 51, 153, 1)'
		    ],
		    borderWidth: 1,
		    data: [total_edx_exp_fbs, total_edx_lab_fbs, total_lab_fbs, total_exp_fbs, total_generic_fbs],
		}
	    ]
	}
	
    });
var elastic_url = "http://10.4.12.46/vlabs/feedback/_search?q=version:open-edx-virtual-labs-v2.0_for_lab&size=10000";
$.getJSON(elastic_url, function(data) {
    total_feedbacks = data['hits']['hits'];
    console.log(total_feedbacks);
    console.log(total_feedbacks.length);
    for(var i=0;i<total_feedbacks.length;i++){
	if(total_feedbacks[i]['_source']['version'] == "open-edx-virtual-labs-v2.0_for_experiment"){
	    total_edx_exp_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "open-edx-virtual-labs-v2.0_for_lab"){
	    total_edx_lab_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-lab-feedback-v2.0"){
	    total_lab_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-exp-feedback-v2.0"){
	    total_exp_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "virtual-labs-feedback-v1.0"){
	    total_generic_fbs += 1;	
	}
    }
var ctx = document.getElementById("openEdxLabChart");    
    var myBarChart = new Chart(ctx, {
	type: 'bar',
	data: {
	    labels: ["open-edx-virtual-labs-v2.0_for_experiment", "open-edx-virtual-labs-v2.0_for_lab", "generic-lab-feedback-v2.0", "generic-exp-feedback-v2.0", "virtual-labs-feedback-v1.0"],
	    datasets: [
		{
		    label: "Feedbacks Dashboard",
		    backgroundColor: [
			'rgba(255, 51, 51, 1)',
			'rgba(14, 128, 154, 1)',
			'rgba(255, 204, 0, 1)',
			'rgba(51, 204, 51, 1)',
			'rgba(0, 153, 225, 1)',
			'rgba(255, 51, 153, 1)'
		    ],
		    borderColor: [
			'rgba(255, 51, 51, 1)',
			'rgba(14, 128, 154, 1)',
			'rgba(255, 204, 0, 1)',
			'rgba(51, 204, 51, 1)',
			'rgba(0, 153, 225, 1)',
			'rgba(255, 51, 153, 1)'
		    ],
		    borderWidth: 1,
		    data: [total_edx_exp_fbs, total_edx_lab_fbs, total_lab_fbs, total_exp_fbs, total_generic_fbs],
		}
	    ]
	}
	
    });
    
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
    location.reload();
  })
  .always(function() {
    console.log( "complete" );
  });



var elastic_url = "http://10.4.12.46/vlabs/feedback/_search?q=version:open-edx-virtual-labs-v2.0_for_experiment&size=10000";
$.getJSON(elastic_url, function(data) {
    total_feedbacks = data['hits']['hits'];
    console.log(total_feedbacks);
    console.log(total_feedbacks.length);
    for(var i=0;i<total_feedbacks.length;i++){
	if(total_feedbacks[i]['_source']['version'] == "open-edx-virtual-labs-v2.0_for_experiment"){
	    total_edx_exp_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "open-edx-virtual-labs-v2.0_for_lab"){
	    total_edx_lab_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-lab-feedback-v2.0"){
	    total_lab_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "generic-exp-feedback-v2.0"){
	    total_exp_fbs += 1;	
	}
	else if(total_feedbacks[i]['_source']['version'] == "virtual-labs-feedback-v1.0"){
	    total_generic_fbs += 1;	
	}
    }
var ctx = document.getElementById("openEdxExpChart");    
    var myBarChart = new Chart(ctx, {
	type: 'bar',
	data: {
	    labels: ["open-edx-virtual-labs-v2.0_for_experiment", "open-edx-virtual-labs-v2.0_for_lab", "generic-lab-feedback-v2.0", "generic-exp-feedback-v2.0", "virtual-labs-feedback-v1.0"],
	    datasets: [
		{
		    label: "Feedbacks Dashboard",
		    backgroundColor: [
			'rgba(255, 51, 51, 1)',
			'rgba(14, 128, 154, 1)',
			'rgba(255, 204, 0, 1)',
			'rgba(51, 204, 51, 1)',
			'rgba(0, 153, 225, 1)',
			'rgba(255, 51, 153, 1)'
		    ],
		    borderColor: [
			'rgba(255, 51, 51, 1)',
			'rgba(14, 128, 154, 1)',
			'rgba(255, 204, 0, 1)',
			'rgba(51, 204, 51, 1)',
			'rgba(0, 153, 225, 1)',
			'rgba(255, 51, 153, 1)'
		    ],
		    borderWidth: 1,
		    data: [total_edx_exp_fbs, total_edx_lab_fbs, total_lab_fbs, total_exp_fbs, total_generic_fbs],
		}
	    ]
	}
	
    });
    
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
    location.reload();
  })
  .always(function() {
    console.log( "complete" );
  });
    
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
    location.reload();
  })
  .always(function() {
    console.log( "complete" );
  });
