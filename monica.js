/*
* version 1 | All rights reserved by Hsin Cheu

* Special thanks to everyone who helped & created plugins to make this happen.

* Jquery - CSV - https://code.google.com/p/jquery-csv/

* Stopwatch - http://www.kellishaver.com/projects/stopwatch/

*/

$(document).ready(function(){

$("#tabs-3").on("keypress", function(enter){
if (enter.keyCode == 13){
var number = $('input[name="number"]').val();
var firstName = $('input[name="firstName"]').val();
var lastName = $('input[name="lastName"]').val();
var age = $('input[name="age"]').val();
var sex = $('input[name="sex"]').val().toUpperCase();
/*var type = $('input[name="type"]').val(); */
var time = $('input[name="time"]').val();
var olives = number;

$("#drinks").append('<li id="bottles" class=' + number + ' ' + 'data-agegroup=' + age + ' ' + 'data-sexgroup=' + sex + '>' + '<span class="0">' + number + '</span>' + " " +'<span  class="1">' + firstName + " " + '</span>' + " " +  '<span class="2">' + lastName +  " " + '</span>' + " " + '<span  class="3">' + age + '</span>' + " " + '<span  class="4">' + sex + '</span>' + '</li>');

$("#drinks").append('<li id="bottles2">' + '<span  class="six">' + " " + time + '</span>' + '</li>');

/*  " " +  '<span  class="5">' + type + '</span>' + */

$('form').trigger("reset");
}

});

$('#recordInput').on('keypress', function(e) {
if (e.keyCode === 13) { 
var record = $('input[name="record"]').val(); 
var x =  $("#drinks li").filter('.'+record).each(function(){
return $(this).text() === record;
});
if(x.length){
x.appendTo("#hugs");
 $('form').trigger('reset');
 }
 else{
$("#main2").effect("shake");
 $('form').trigger('reset');
 }
}
});

$("body").on("click", function(){
var x = $('#drinks').children().addClass(function(){
    return $(this).find('span:first').text();
});
$("#drinks li").addClass(x);
});


$("body").on("click", function(){
var x =  $('#drinks li').each(function() {
        $(this).attr('data-agegroup', $('span:nth-child(4)', this).text().toUpperCase());
    });
    
var y = $("#drinks li").each(function(){
$(this).attr('data-sexgroup', $('span:nth-child(5)', this).text().toUpperCase());
});

var z = $("#hugs li").each(function(){
 $(this).attr('data-agegroup', $('span:nth-child(4)', this).text().toUpperCase());
});

var zz = $("#hugs li").each(function(){
$(this).attr('data-sexgroup', $('span:nth-child(5)', this).text().toUpperCase());
});
});

/*
$("#finishedbutton").on("click", function(){
$("#drinks li").appendTo("#hugs");
});
*/

$(document).ready(function(){
$("#shortss ol").hide();
$("#shirtss ol").hide();
$("#shirtssshortssb, #shirtssshortssb2").hide();

/*
if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
$('body').css("overflow-x", "hidden");
}
*/

});

$("#finishedbutton6").on("click", function () {

$("#hugs .six").remove();
var six = $("#hugs li");
$("#kisses span").each(function(i) {
    $(this).clone().appendTo(six.eq(i));
});

$('html, body').animate({scrollTop:$("#shirtss").offset().top}, 250);

var y = "f";
var z = "m";

$("#f0, #f1, #f2, #f3, #f4, #f5, #f6, #f7, #f8, #f9, #f10, #f11, #f12, #f13, #f14, #f15, #f16, #f17, #f18, #f19, #f20, #f21, #f22, #f23").empty();
$("#m0, #m1, #m2, #m3, #m4, #m5, #m6, #m7, #m8, #m9, #m10, #m11, #m12, #m13, #m14, #m15, #m16, #m17, #m18, #m19, #m20, #m21, #m22, #m23").empty();   

$("#shortss ol").show();
$("#shirtss ol").show();
$("#shirtssshortssb, #shirtssshortssb2").show();


$("#shirtssshortss0, #shirtssshortss1, #shirtssshortss2, #shirtssshortss3, #shirtssshortss4, #shirtssshortss5, #shirtssshortss6, #shirtssshortss7, #shirtssshortss8, #shirtssshortss9, #shirtssshortss10, #shirtssshortss11, #shirtssshortss12, #shirtssshortss13, #shirtssshortss14, #shirtssshortss15, #shirtssshortss16, #shirtssshortss17, #shirtssshortss18, #shirtssshortss19, #shirtssshortss20, #shirtssshortss21, #shirtssshortss22, #shirtssshortss23, #shirtssshortss24, #shirtssshortss25, #shirtssshortss26, #shirtssshortss27, #shirtssshortss28, #shirtssshortss29, #shirtssshortss30, #shirtssshortss31, #shirtssshortss32, #shirtssshortss33, #shirtssshortss34, #shirtssshortss35, #shirtssshortss36, #shirtssshortss37, #shirtssshortss38, #shirtssshortss39, #shirtssshortss40").show();


// Female

var female = $("#hugs li").filter(function () {
	return $(this).is('[data-sexgroup]') && $(this).data('sexgroup') == y.toUpperCase();
});
	 female.clone().appendTo("#f21");
    female.clone().appendTo("#f0");
    
    
	var femaleA1 = $("#f0 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 0;
});
    femaleA1.appendTo("#f1"); 
    
	var femaleA2 = $("#f1 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 5;
});
    femaleA2.appendTo("#f2"); 
    
	var femaleA3 = $("#f2 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 10;
});
    femaleA3.appendTo("#f3"); 
    
    var femaleA4 = $("#f3 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 15;
});
    femaleA4.appendTo("#f4"); 
    
    var femaleA5 = $("#f4 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 20;
});
    femaleA5.appendTo("#f5"); 
    
    var femaleA6 = $("#f5 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 25;
});
    femaleA6.appendTo("#f6"); 
    
    var femaleA7 = $("#f6 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 30;
});
    femaleA7.appendTo("#f7"); 
    
    var femaleA8 = $("#f7 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 35;
});
    femaleA8.appendTo("#f8"); 
    
    var femaleA9 = $("#f8 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 40;
});
    femaleA9.appendTo("#f9"); 
    
    var femaleA10 = $("#f9 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 45;
});
    femaleA10.appendTo("#f10"); 
    
    	var femaleA11 = $("#f10 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 50;
});
    femaleA11.appendTo("#f11"); 
    
    	var femaleA12 = $("#f11 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 55;
});
    femaleA12.appendTo("#f12"); 
    
    var femaleA13 = $("#f12 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 60;
});
    femaleA13.appendTo("#f13"); 
    
    var femaleA14 = $("#f13 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 65;
});
    femaleA14.appendTo("#f14"); 
    
    var femaleA15 = $("#f14 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 70;
});
    femaleA15.appendTo("#f15");    
    
    var femaleA16 = $("#f15 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 75;
});
    femaleA16.appendTo("#f16");  
    
    var femaleA17 = $("#f16 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 80;
});
    femaleA17.appendTo("#f17");  
    
    var femaleA18 = $("#f17 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 85;
});
    femaleA18.appendTo("#f18");  
    
    var femaleA19 = $("#f18 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 90;
});
    femaleA19.appendTo("#f19");
    
    var femaleA20 = $("#f19 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 95;
});
    femaleA20.appendTo("#f20");
    
/*
$('#f1 li').slice(3).hide(); $('#f2 li').slice(3).hide(); $('#f3 li').slice(3).hide(); $('#f4 li').slice(3).hide(); $('#f5 li').slice(3).hide(); $('#f6 li').slice(3).hide(); $('#f7 li').slice(3).hide(); $('#f8 li').slice(3).hide(); $('#f9 li').slice(3).hide(); $('#f10 li').slice(3).hide(); $('#f11 li').slice(3).hide(); $('#f12 li').slice(3).hide(); $('#f13 li').slice(3).hide(); $('#f14 li').slice(3).hide(); $('#f15 li').slice(3).hide(); $('#f16 li').slice(3).hide(); $('#f17 li').slice(3).hide(); $('#f18 li').slice(3).hide(); $('#f19 li').slice(3).hide(); $('#f20 li').slice(3).hide(); 
*/

if ($("#f1").is(":empty")){
$("#shirtssshortss1").hide();
} if ($("#f2").is(":empty")){
$("#shirtssshortss2").hide();
}if ($("#f3").is(":empty")){
$("#shirtssshortss3").hide();
}if ($("#f4").is(":empty")){
$("#shirtssshortss4").hide();
}if ($("#f5").is(":empty")){
$("#shirtssshortss5").hide();
}if ($("#f6").is(":empty")){
$("#shirtssshortss6").hide();
}if ($("#f7").is(":empty")){
$("#shirtssshortss7").hide();
}if ($("#f8").is(":empty")){
$("#shirtssshortss8").hide();
}if ($("#f9").is(":empty")){
$("#shirtssshortss9").hide();
}if ($("#f10").is(":empty")){
$("#shirtssshortss10").hide();
}if ($("#f11").is(":empty")){
$("#shirtssshortss11").hide();
}if ($("#f12").is(":empty")){
$("#shirtssshortss12").hide();
}if ($("#f13").is(":empty")){
$("#shirtssshortss13").hide();
}if ($("#f14").is(":empty")){
$("#shirtssshortss14").hide();
}if ($("#f15").is(":empty")){
$("#shirtssshortss15").hide();
}if ($("#f16").is(":empty")){
$("#shirtssshortss16").hide();
}if ($("#f17").is(":empty")){
$("#shirtssshortss17").hide();
}if ($("#f18").is(":empty")){
$("#shirtssshortss18").hide();
}if ($("#f19").is(":empty")){
$("#shirtssshortss19").hide();
}if ($("#f20").is(":empty")){
$("#shirtssshortss20").hide();
}

// Male     
    
var male = $("#hugs li").filter(function () {
	return $(this).is('[data-sexgroup]') && $(this).data('sexgroup') == z.toUpperCase();
});
	 male.clone().appendTo("#m21");
    male.clone().appendTo("#m0");
    
    
	var maleA1 = $("#m0 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 0;
});
    maleA1.appendTo("#m1");    
    
	var maleA2 = $("#m1 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 5;
});
    maleA2.appendTo("#m2"); 
    
	var maleA3 = $("#m2 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 10;
});
    maleA3.appendTo("#m3"); 
    
    var maleA4 = $("#m3 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 15;
});
    maleA4.appendTo("#m4"); 
    
    var maleA5 = $("#m4 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 20;
});
    maleA5.appendTo("#m5"); 
    
    var maleA6 = $("#m5 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 25;
});
    maleA6.appendTo("#m6"); 
    
    var maleA7 = $("#m6 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 30;
});
    maleA7.appendTo("#m7"); 
    
    var maleA8 = $("#m7 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 35;
});
    maleA8.appendTo("#m8"); 
    
    var maleA9 = $("#m8 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 40;
});
    maleA9.appendTo("#m9"); 
    
    var maleA10 = $("#m9 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 45;
});
    maleA10.appendTo("#m10"); 
    
    	var maleA11 = $("#m10 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 50;
});
    maleA11.appendTo("#m11"); 
    
    	var maleA12 = $("#m11 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 55;
});
    maleA12.appendTo("#m12"); 
    
    var maleA13 = $("#m12 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 60;
});
    maleA13.appendTo("#m13"); 
    
    var maleA14 = $("#m13 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 65;
});
    maleA14.appendTo("#m14"); 
    
    var maleA15 = $("#m14 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 70;
});
    maleA15.appendTo("#m15");    
    
    var maleA16 = $("#m15 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 75;
});
    maleA16.appendTo("#m16");  
    
    var maleA17 = $("#m16 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 80;
});
    maleA17.appendTo("#m17");  
    
    var maleA18 = $("#m17 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 85;
});
    maleA18.appendTo("#m18");  
    
    var maleA19 = $("#m18 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 90;
});
    maleA19.appendTo("#m19");
    
    var maleA20 = $("#m19 li").filter(function () {
	return $(this).is('[data-agegroup]') && $(this).data('agegroup') >= 95;
});
    maleA20.appendTo("#m20");
 
 /*   
$('#m1 li').slice(3).hide();  $('#m2 li').slice(3).hide();$('#m3 li').slice(3).hide(); $('#m4 li').slice(3).hide(); $('#m5 li').slice(3).hide(); $('#m6 li').slice(3).hide(); $('#m7 li').slice(3).hide(); $('#m8 li').slice(3).hide(); $('#m9 li').slice(3).hide(); $('#m10 li').slice(3).hide(); $('#m11 li').slice(3).hide(); $('#m12 li').slice(3).hide(); $('#m13 li').slice(3).hide(); $('#m14 li').slice(3).hide(); $('#m15 li').slice(3).hide(); $('#m16 li').slice(3).hide(); $('#m17 li').slice(3).hide(); $('#m18 li').slice(3).hide(); $('#m19 li').slice(3).hide(); $('#m20 li').slice(3).hide(); 
*/


if ($("#m1").is(":empty")){
$("#shirtssshortss21").hide();
} if ($("#m2").is(":empty")){
$("#shirtssshortss22").hide();
}if ($("#m3").is(":empty")){
$("#shirtssshortss23").hide();
}if ($("#m4").is(":empty")){
$("#shirtssshortss24").hide();
}if ($("#m5").is(":empty")){
$("#shirtssshortss25").hide();
}if ($("#m6").is(":empty")){
$("#shirtssshortss26").hide();
}if ($("#m7").is(":empty")){
$("#shirtssshortss27").hide();
}if ($("#m8").is(":empty")){
$("#shirtssshortss28").hide();
}if ($("#m9").is(":empty")){
$("#shirtssshortss29").hide();
}if ($("#m10").is(":empty")){
$("#shirtssshortss30").hide();
}if ($("#m11").is(":empty")){
$("#shirtssshortss31").hide();
}if ($("#m12").is(":empty")){
$("#shirtssshortss32").hide();
}if ($("#m13").is(":empty")){
$("#shirtssshortss33").hide();
}if ($("#m14").is(":empty")){
$("#shirtssshortss34").hide();
}if ($("#m15").is(":empty")){
$("#shirtssshortss35").hide();
}if ($("#m16").is(":empty")){
$("#shirtssshortss36").hide();
}if ($("#m17").is(":empty")){
$("#shirtssshortss37").hide();
}if ($("#m18").is(":empty")){
$("#shirtssshortss38").hide();
}if ($("#m19").is(":empty")){
$("#shirtssshortss39").hide();
}if ($("#m20").is(":empty")){
$("#shirtssshortss40").hide();
}
});

$("#timeInput").on("keypress", function(enter3){
if (enter3.keyCode == 13){
entertime = $('input[name="record"]').val();
var clockhr = $(".hr").text();
var clockmin = $(".min").text();
var clocksec = $(".sec").text();
$("#kisses").append('<li id="bottles2"><span class="six">'+ " "  + clockhr + "." + clockmin + "." + clocksec + '</span></li>');
$('form').trigger("reset");
}

});

$(function() {
    $( "#enterinfo" ).tabs();
  });
  
  $(function() {
    $( "#enterinfo2" ).tabs();
  });


$("#finishedbutton").click(function(){
$("#finishedbutton").toggle();
$("#finishedbutton2").toggle();
$("#others2, #drinks").toggle();
$("#finishedbutton3").toggle();
$("#finishedbutton4").toggle();
$("#finishedbutton5").toggle();
$("#finishedbutton6").toggle();
$("#timerstyle").slideToggle("fast");
$("#others5").toggle();
$("#name").toggle();
$("#name2").toggle();
$("#kisses li").css("list-style", "none");
$(".h2").toggle();
$("#shirtss, #shortss").toggle();
$("#f1, #f2, #f3, #f4, #f5, #f6, #f7, #f8, #f9, #f10, #f11, #f12, #f13, #f14, #f15, #f16, #f17, #f18, #f19, #f20, #f21, #f22, #f23").toggle();
$("#m1, #m2, #m3, #m4, #m5, #m6, #m7, #m8, #m9, #m10, #m11, #m12, #m13, #m14, #m15, #m16, #m17, #m18, #m19, #m20, #m21, #m22, #m23").toggle();
});

$("#finishedbutton2").click(function(){
$("#finishedbutton2").toggle();
$("#finishedbutton").toggle();
$("#finishedbutton3").toggle();
$("#finishedbutton4").toggle();
$("#finishedbutton5").toggle();
$("#finishedbutton6").toggle();
$("#others2, #drinks").toggle();
$("#timerstyle").slideToggle("fast");
$("#others5").toggle();
$("#name").toggle();
$("#name2").toggle();
$("#kisses li").css("list-style", "decimal");
$("#kisses li").css("list-style-position", "inside");
$(".h2").toggle();
$("#shirtss, #shortss").toggle();
$("#f1, #f2, #f3, #f4, #f5, #f6, #f7, #f8, #f9, #f10, #f11, #f12, #f13, #f14, #f15, #f16, #f17, #f18, #f19, #f20, #f21, #f22, #f23").toggle();
$("#m1, #m2, #m3, #m4, #m5, #m6, #m7, #m8, #m9, #m10, #m11, #m12, #m13, #m14, #m15, #m16, #m17, #m18, #m19, #m20, #m21, #m22, #m23").toggle();
$("#hugs .six").remove();
$("#f0 .six, #f1 .six, #f2 .six, #f3 .six, #f4 .six, #f5 .six, #f6 .six, #f7 .six, #f8 .six, #f9 .six, #f10 .six, #f11 .six, #f12 .six, #f13 .six, #f14 .six, #f15 .six, #f16 .six, #f17 .six, #f18 .six, #f19 .six, #f20 .six, #f21 .six, #f22 .six, #f23 .six").remove();
$("#m0 .six, #m1 .six, #m2 .six, #m3 .six, #m4 .six, #m5 .six, #m6 .six, #m7 .six, #m8 .six, #m9 .six, #m10 .six, #m11 .six, #m12 .six, #m13 .six, #m14 .six, #m15 .six, #m16 .six, #m17 .six, #m18 .six, #m19 .six, #m20 .six, #m21 .six, #m22 .six, #m23 .six").remove();
});

$("#name").click(function(){
$( this ).val(function( x, val ) {
    return val.toUpperCase();
  });
});

$("#name2").click(function(){
$( this ).val(function( x, val ) {
    return val.toUpperCase();
  });
});

$(".button").click(function(){
$(".button").hide();
$("#others").show();
$("#finishedbutton").show();
$("#finishedbutton4").show();
$("#finishedbutton5").show();
});

$("#learnhow").click(function(){
$("#learnhow").toggle();
$("#learnhow2").toggle();
$("#hideIntro").slideToggle();
 $('html, body').animate({scrollTop:$("#intro4text").offset().top}, 750);
  return false;
});

$("#learnhow2").click(function(){
$("#learnhow2").toggle();
$("#learnhow").toggle();
$("#hideIntro").slideToggle();
});

$("#getstarted").click(function(){
$("#getstarted").hide();
$("#learnhow").hide();
$("#learnhow2").hide();
$("#flash").slideToggle();
$("#hideIntro").slideToggle();
$("#main").show();
$("#main2").show();
$("#intro3, #intro4, #intro, #intro2, #intro5, #intro6, #intro7").hide("fade");
});


$(function(){
$("#drinks, #drinks2, #hugs, #kisses, #shirts, #shorts").sortable({
      connectWith: ".huh"
});
});

$(document).on("dblclick", "#drinks #bottles", function(){
$(this).appendTo("#hugs");
});

$(document).on("dblclick", "#drinks #bottles2", function(){
$(this).appendTo("#kisses");
});

$(document).on("dblclick", "#hugs #bottles", function(){
$(this).appendTo("#drinks");
});

$(document).on("dblclick", "#hugs #bottles2", function(){
$(this).appendTo("#drinks");
});

$(document).on("dblclick", "#kisses #bottles2", function(){
$(this).appendTo("#drinks");
});

$(document).on("dblclick", "#kisses #bottles", function(){
$(this).appendTo("#drinks");
});

$(document).on("click", ".button", function(){
$("#files").click();
});

$("#files").on("click", function(){
$("#tabs-1").hide();
});

/*
LOAD FILE BEGINS HERE
*/

  $(document).ready(function() {
    if(isAPIAvailable()) {
      $('#files').bind('change', handleFileSelect);
    }
  });

  function isAPIAvailable() {
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      // Great success! All the File APIs are supported.
      return true;
    } else {
      // source: File API availability - http://caniuse.com/#feat=fileapi
      // source: <output> availability - http://html5doctor.com/the-output-element/
      document.writeln('The HTML5 APIs used in this form are only available in the following browsers:<br />');
      // 6.0 File API & 13.0 <output>
      document.writeln(' - Google Chrome: 13.0 or later<br />');
      // 3.6 File API & 6.0 <output>
      document.writeln(' - Mozilla Firefox: 6.0 or later<br />');
      // 10.0 File API & 10.0 <output>
      document.writeln(' - Internet Explorer: Not supported (partial support expected in 10.0)<br />');
      // ? File API & 5.1 <output>
      document.writeln(' - Safari: Not supported<br />');
      // ? File API & 9.2 <output>
      document.writeln(' - Opera: Not supported');
      return false;
    }
  }

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var file = files[0];

    // read the file contents
    printTable(file);
  }

  function printTable(file) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event){
      var csv = event.target.result;
      var data = $.csv.toArrays(csv);
      var html = '';
      for(var row in data) {
        html += '<li id="bottles">\r\n';
        for(var item in data[row]) {
          html += '<span' +" " + "class=" +[item] + '>' + data[row][item] + '</span>\r\n';
        }
        html += '</li>\r\n';
      }
      $('#drinks').html(html);
    };
    reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
  }
  
/*
LOAD FILE ENDS HERE
*/

});

/*
TIMER BEGINS HERES
*/

(function($) {
  $.fn.stopwatch = function(theme) {
    var stopwatch = $(this);
    stopwatch.addClass('stopwatch').addClass(theme);

    stopwatch.each(function() {
      var instance = $(this);
      var timer = 0;

      var stopwatchFace = $('<div>').addClass('the-time');
      var timeHour = $('<span>').addClass('hr').text('00');
      var timeMin = $('<span>').addClass('min').text('00');
      var timeSec = $('<span>').addClass('sec').text('00');
      var startStopBtn = $('<a>').attr('href', '').addClass('start-stop').text('Start');
      var resetBtn = $('<a>').attr('href', '').addClass('resetTime').text('Reset');
      stopwatchFace = stopwatchFace.append(timeHour).append(timeMin).append(timeSec);
      instance.html('').append(stopwatchFace).append(startStopBtn).append(resetBtn);

      startStopBtn.bind('click', function(e) {
        e.preventDefault();
        var button = $(this);
        if(button.text() === 'Start') {
          timer = setInterval(runStopwatch, 1000);
          button.text('Stop');
        } else {
          clearInterval(timer);
          button.text('Start');
        }
      });

      resetBtn.bind('click', function(e) {
          e.preventDefault();
          clearInterval(timer);
          startStopBtn.text('Start');
          timer = 00;
          timeHour.text('00');
          timeMin.text('00');
          timeSec.text('00');

      });

      function runStopwatch() {
        // We need to get the current time value within the widget.
        var hour = parseFloat(timeHour.text());
        var minute = parseFloat(timeMin.text());
        var second = parseFloat(timeSec.text());

        second++;


        if(second > 59) {
          second = 0;
          minute = minute + 1;
        }

        if(minute > 59) {
          minute = 0;
          hour = hour + 1;
        }

        timeHour.html("0".substring(hour >= 10) + hour);
        timeMin.html("0".substring(minute >= 10) + minute);
        timeSec.html("0".substring(second >= 10) + second);
      }
    });
  }
})(jQuery);

    $(function() {
      $('#stopwatch').stopwatch('Timer');
    
    });
    
/*
TIMER ENDS HERE
*/



