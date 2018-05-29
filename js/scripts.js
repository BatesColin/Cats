$(document).ready(function() {

 $("button#button1").click(function() {
   $("body").removeClass();
   $("body").addClass("red-background");
 });

 $("button#button2").click(function() {
   $("body").removeClass();
   $("body").addClass("green-background");
 });

 $("button#button3").click(function() {
   $("body").removeClass();
 });

});
