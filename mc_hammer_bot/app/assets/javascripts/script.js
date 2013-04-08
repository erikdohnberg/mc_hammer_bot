$(function() {
    
  var url = "http://localhost:8071/motion-control/update";

  $(".strafe-right").on("click", function(){
    console.log("Strafing Left");
    $.ajax(url, {dataType: "jsonp", data: {strafe: -1}, success: function() {
        console.log("Strafing Left [DONE]");
      }});
    })
  
  $(".strafe-left").on("click", function(){
    console.log("Strafing Left");
    $.ajax(url, {dataType: "jsonp", data: {strafe: -1}, success: function() {
        console.log("Strafing Left [DONE]");
      }});
    })
    
  $(".stop").on("click", function(){
    console.log("Stopping");
    $.ajax(url, {dataType: "jsonp", data: {}, success: function() {
        console.log("Stop [DONE]");
      }});
    })
    
  $(".forward").on("click", function(){
    console.log("Forward");
    $.ajax(url, {dataType: "jsonp", data: {forward: 1}, success: function() {
        console.log("Forward [DONE]");
      }});
    })

  $(".forward-left").on("click", function(){
    console.log("Forward Left");
    $.ajax(url, {dataType: "jsonp", data: {forward: 0.5, turn: 0.5}, success: function() {
        console.log("Forward-Left [DONE]");
      }});
    })

  $(".forward-right").on("click", function(){
    console.log("Forward Right");
    $.ajax(url, {dataType: "jsonp", data: {forward: 0.5, turn: -0.5}, success: function() {
        console.log("Forward-Right [DONE]");
      }});
    })

    $(".reverse").on("click", function(){
    console.log("Reverse");
    $.ajax(url, {dataType: "jsonp", data: {forward: -1}, success: function() {
        console.log("Reverse [DONE]");
      }});
    })

    $(".reverse-left").on("click", function(){
    console.log("Reverse Left");
    $.ajax(url, {dataType: "jsonp", data: {forward: -0.5, turn: 0.5}, success: function() {
        console.log("Reverse Left [DONE]");
      }});
    })

    $(".reverse-right").on("click", function(){
    console.log("Reverse Right");
    $.ajax(url, {dataType: "jsonp", data: {forward: -0.5, turn: -0.5}, success: function() {
        console.log("Reverse Right [DONE]");
      }});
    })

    $(".rotate-left").on("click", function(){
    console.log("Rotate Left");
    $.ajax(url, {dataType: "jsonp", data: {turn: 1}, success: function() {
        console.log("Rotate Left [DONE]");
      }});
    })

    $(".rotate-right").on("click", function(){
    console.log("Rotate Right");
    $.ajax(url, {dataType: "jsonp", data: {turn: -1}, success: function() {
        console.log("Rotate Right [DONE]");
      }});
    })

    $(".evasive").on("click", function(){
    console.log("EVASIVE MANEUVERS!!");

    	var apiCall = function(data, logText) {
    		return function() {
	    		$.ajax(url, {data: data, function(){console.log(logText)} } );
    		};
    	};


	    var maneuvers = [
	    	apiCall({strafe:1}, "Strafe Right!");
	    	apiCall({forward:1}, "Forward");
	    	apiCall({forward:1}, "Forward");
	    	apiCall({forward:1}, "Forward");

	    ];

	    var counter = function(){
	    	var actualCounterInstance = function(){
	    		maneuvers[math.rand(0, maneuvers.length-1)]();
	    	};
	    	return actualCounterInstance;
	    };

	    var initializeCounter = counter();
	    var changeRuntime = setInterval(initializeCounter,500);
	    setTimeout(function(){clearInterval(changeRuntime);}, 5000);
	});
  
  })