/*let sensor = new MagnetometerSensor();
let output = document.getElementById('windows--output');
sensor.start();

sensor.onchange - function(event){
  console.log("Magnetic field along the X-axis" + event.reading.magneticFieldX);
  console.log("Magnetic field along the Y-axis" + event.reading.magneticFieldY);
  console.log("Magnetic field along the Z-axis" + event.reading.magneticFieldZ);
  output.iner
}

var 
prev_lat,
prev_long,
min_accuracy=150,
current_datetime,
info_string,
wpid;
function format_time_component(time_component)
{
  if(time_component<10)
    time_component="0"+time_component;
  else 
    if(time_component.length<2)
      time_component=time_component+"0";
    return time_component;
 }


function geo_success(position)
{
  var d=new Date();
  var h=d.getHours();
  var m=d.getMinutes();
  var s=d.getSeconds();
  var current_datetime=format_time_component(h)+":"+format_time_component(m)+":"+format_time_component(s);
  if(position.coords.accuracy<=min_accuracy)
  {
    if(prev_lat!=position.coords.latitude||prev_long!=position.coords.longitude)
    {
      if(position.coords.altitude>max_altitude)
        max_altitude=position.coords.altitude;
      else 
        if(position.coords.altitude<min_altitude)
          min_altitude=position.coords.altitude;
        prev_lat=position.coords.latitude;
        prev_long=position.coords.longitude;
          info_string="Current positon: lat="+position.coords.latitude+
          ", long="+position.coords.longitude+" (accuracy "
          +Math.round(position.coords.accuracy,1)+"m)";
    }
  }
  else
    info_string="Accuracy not sufficient ("+
  Math.round(position.coords.accuracy,1)+"m vs "+min_accuracy+
    "m) - last reading taken at: "+current_datetime;
  if(info_string)
    op.innerHTML=info_string;
}

function geo_error(error)
{
  switch(error.code)
  {
     case error.TIMEOUT:op.innerHTML="Timeout!";
     break;
  }
  ;
}
function get_pos()
{
  if(!!navigator.geolocation)
    wpid=navigator.geolocation.watchPosition(geo_success,geo_error,{enableHighAccuracy:true,maximumAge:30000,timeout:27000});
  else
    op.innerHTML="ERROR: Your Browser doesnt support the Geo Location API";
}
function init_geo()
{
  op=document.getElementById("output");
  if(op)
  {
    start_btn=document.getElementById("start-button");
    if(start_stop_btn)
    {
      start_btn.onclick=function()
      {
        if(wpid)
        {
          console.log("no")
          navigator.geolocation.clearWatch(wpid);
          wpid=false;
        }
        else
        {
          get_pos();
        }
      }
    }
    else

      op.innerHTML="ERROR: Couldn't find the start/stop button";
  }
}
window.onload=init_geo;
*/

let button =document.getElementById('start-button');
button.onclick = function geoFindMe() {
  let output = document.getElementById("geo");
  let magX = document.getElementById("magnetoX");
  let magY = document.getElementById("magnetoY");
  let magZ = document.getElementById("magnetoZ");
  magX.innerHTML= navigator.geolocation;
  magY.innerHTML= navigator.magnetometer;


  if (!navigator.geolocation){
    output.innerHTML = "Geolocation is not supported by your browser";
    return;
  }

  function success(position) {
    let latitude  = position.coords.latitude;
    let longitude = position.coords.longitude;
    let acuracy = position.coords.accuracy;

    output.innerHTML = 'Lati: ' + latitude + '° <br/>Long:' + longitude + '° <br/>' + acuracy +'m';

   
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "Locating…";

  navigator.geolocation.getCurrentPosition(success, error);


}
let sensor = new Magnetometer();
sensor.start();
  let magX = document.getElementById("magnetoX");
  let magY = document.getElementById("magnetoY");
  let magZ = document.getElementById("magnetoZ");
 
sensor.onchange = () => {
    MagX.innerHTML ="Magnetic field along the X-axis " + sensor.x;
    MagY.innerHTML ="Magnetic field along the Y-axis " + sensor.y;
    MagZ.innerHTML ="Magnetic field along the Z-axis " + sensor.z;
};
