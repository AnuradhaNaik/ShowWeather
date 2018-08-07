var fivecities = { "NYC" : {
      "lat": 40.7128,
      "long":-74.0060,
      "fullform": "New York",
      "state": "NY"
   },
   "CHI": {
     "lat": 41.88183,
      "long":-87.6,
      "fullform": "Chicago",
      "state": "IL"
   },
   "EWR": {
     "lat": 40.7356,
      "long":-74.17236,
      "fullform": "Newark",
      "state": "NJ"
   },
   "PHI": {
     "lat": 39.952583,
      "long":-75.16522,
      "fullform": "Philadelphia",
      "state": "PA"
   },
   "FAR": {
     "lat":38.854004,
      "long":-77.356918,
      "fullform": "FairFax",
      "state": "VA"
   }
};

function getTemp(argument,id) {
   
   var getcity=fivecities[argument];
  // console.log(getcity);
   var temp="null";
 $.getJSON("https://fcc-weather-api.glitch.me/api/current",
        {
          
          lat:getcity['lat'],
          lon:getcity['long']
        
        },
        function(response){  //'response' is actually a variable, we could name it what ever we want. It just stores what the api sends
         console.log(response);

      temp=Math.round((response.main.temp) * 100) / 100

;
        
          $(id).html(temp);
        });


}

function getTempF(argument,id) {
   
   var getcity=fivecities[argument];
  // console.log(getcity);
   var temp="null";
 $.getJSON("https://fcc-weather-api.glitch.me/api/current",
        {
          
          lat:getcity['lat'],
          lon:getcity['long']
        
        },
        function(response){  //'response' is actually a variable, we could name it what ever we want. It just stores what the api sends
        //  console.log(response);
       
       
          temp=toFarenheit(response.main.temp);
        
          $(id).html(temp);
         
        });


}
function getTempD(argument,id) {
   
   var getcity=fivecities[argument];
  // console.log(getcity);
   var temp="null";
 $.getJSON("https://fcc-weather-api.glitch.me/api/current",
        {
          
          lat:getcity['lat'],
          lon:getcity['long']
        
        },
        function(response){  //'response' is actually a variable, we could name it what ever we want. It just stores what the api sends
        //  console.log(response);
       
       
          
        
          $("#d1").html(response.weather[0].description);
          $("#h1").html("Humidity : "+response.main.humidity+"%");
         
        });


}

function toCelsius(temp) {
var x = (temp -32) * 5 / 9;
        var value = Math.round(x * 100) / 100;
        return value;

   // body...
}
function toFarenheit(temp) {
  var x = temp * 9 / 5 + 32;
        var value = Math.round(x * 100) / 100

;
        return value;
}

function toTemp(argument,city) {
  
  $('#fc div').toggleClass('selected');
  if(argument=='C'){
             getTemp(city,"#t1"); ;

  }
  else {
    getTempF(city,"#t1"); ;
  }
}