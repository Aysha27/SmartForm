// Your jQuery goes here

var userData = {};

$("#start").click(function(event){
  $("#q1").show();
  $("#welcome").hide();
});

$("#email").click(function(event){
  $("#q2").show();
  $("#q1").hide();
});

$("#html").click(function(event){
  $("#q2a").show();
  $("#q2").hide();
});

// $("#email").on("change keyup", function(){
//   console.log($(this).val());
//   $("#q1Next").prop('disabled', $
// }
