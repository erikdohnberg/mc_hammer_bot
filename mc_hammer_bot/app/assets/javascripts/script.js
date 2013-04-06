$(function() {
    
    var url = "http://192.168.1.55:8071/motion-control/update";
  
  $(".button").on("click", function(){
    console.log("Turning Left");
    $.ajax(url, {dataType: "jsonp", data: {turn: -1}, success: function() {
        console.log("Turning Left [DONE]");
      }});
    })
    
  // $(".stop").on("click", function(){
  //   console.log("Stopping");
  //   $.ajax(url, {dataType: "jsonp", data: {}, success: function() {
  //       console.log("Stop [DONE]");
  //     }});
  //   })
    
  // $(".turn-right").on("click", function(){
  //   console.log("Turning Right");
  //   $.ajax(url, {dataType: "jsonp", data: {turn: 1}, success: function() {
  //       console.log("Turn Right [DONE]");
  //     }});
  //   })
  
  })