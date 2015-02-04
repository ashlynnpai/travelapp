var icon;

$('#loadingDiv').hide().ajaxStart( function() {
  $(this).show();  
  } ).ajaxStop ( function(){
  $(this).hide(); 
});


$.ajax({
  url : "http://api.wunderground.com/api/APIKEY/geolookup/conditions/q/Thailand/Bangkok.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var bangkokTemp = parsed_json['current_observation']['temp_f'];
  var bangkokWeather = parsed_json['current_observation']['weather']; 
  var currentCondIcon = parsed_json['current_observation']['icon'];

var img = document.createElement("img");
img.src = "http://icons.wxug.com/i/c/a/"+currentCondIcon+".gif";

var src = document.getElementById("banwei");
src.appendChild(img);      
    
document.getElementById("bante").innerHTML = bangkokTemp + " F";
document.getElementById("banwe").innerHTML = bangkokWeather;      
 }
});

$.ajax({
  url : "http://api.wunderground.com/api/APIKEY/geolookup/conditions/q/Egypt/Cairo.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var cairoTemp = parsed_json['current_observation']['temp_f'];
  var cairoWeather = parsed_json['current_observation']['weather']; 
  var currentCondIcon = parsed_json['current_observation']['icon'];

  var img = document.createElement("img");
  img.src = "http://icons.wxug.com/i/c/a/"+currentCondIcon+".gif";

  var src = document.getElementById("caiwei");
  src.appendChild(img);      

  document.getElementById("caite").innerHTML = cairoTemp + " F";
  document.getElementById("caiwe").innerHTML = cairoWeather;      
 }
});

$.ajax({
  url : "http://api.wunderground.com/api/APIKEY/geolookup/conditions/q/Australia/Sydney.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var sydneyTemp = parsed_json['current_observation']['temp_f'];
  var sydneyWeather = parsed_json['current_observation']['weather']; 
  var currentCondIcon = parsed_json['current_observation']['icon'];

  var img = document.createElement("img");
  img.src = "http://icons.wxug.com/i/c/a/"+currentCondIcon+".gif";

  var src = document.getElementById("sydwei");
  src.appendChild(img);      

  document.getElementById("sydte").innerHTML = sydneyTemp + " F";
  document.getElementById("sydwe").innerHTML = sydneyWeather;      
 }
});
    
$.ajax({
  url : "http://openexchangerates.org/api/latest.json?app_id=APIKEY",
  dataType : "jsonp",
  success : function(parsed_json) {
  var tbaht = parsed_json['rates']['THB'];
  var egyp = parsed_json['rates']['EGP'];
  var aud =  parsed_json['rates']['AUD'];

  document.getElementById("baht").innerHTML = tbaht;  
  document.getElementById("egy").innerHTML = egyp;    
  document.getElementById("ausd").innerHTML = aud;    
 }    
    
});




 






