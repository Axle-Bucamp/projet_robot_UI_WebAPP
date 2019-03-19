
var ros = new ROSLIB.Ros();
  ros.on('connection', function() {
    console.log('Connected to websocket server.');
    //changer le capteur d'état marche
    $(".capteur-etat #marche").removeClass("orange");
    $(".capteur-etat #marche").addClass("green");
  });
  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
    // capteur en orange pour erreur de connection
    $(".capteur-etat #marche").removeClass("green");
    $(".capteur-etat #marche").addClass("orange");
    $("#vitesse").html("000km/h");

  });
  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
    $(".capteur-etat #marche").removeClass("green");
    $(".capteur-etat #marche").addClass("orange");
    $("#vitesse").html("000km/h");
    // capteur rouge 

  });
  // Subscribing to a Topic
  // ----------------------
  var listener = new ROSLIB.Topic({
    ros : ros,
    name : selected["vitesse"],
    messageType : 'geometry_msgs/Twist'
  });
  listener.subscribe(function(message) {
    //console.log('conect');
    //console.log('Received message on ' + listener.name + ': ' + message.linear.x);
    $("#vitesse").html(""+message.linear.x + "km/h");
  });

// video topic 
 var imageTopic = new ROSLIB.Topic({
	ros : ros,
 	name : selected["video"],
	messageType : 'sensor_msgs/CompressedImage'
});

 imageTopic.subscribe(function(message) {
   // console.log('Received message on ' + listener.name + ': ' + message.data);
   var ImageData1="data:image/jpeg;base64,"+message.data;
    displayImage = document.getElementById("v");
	displayImage.setAttribute('src', ImageData1);
  });



// position topic (longitude, latitude 
 var position = new ROSLIB.Topic({
	ros : ros,
 	name : selected["position"],
	messageType : 'sensor_msgs/NavSatFix'
});
var map = new google.maps.Map(document.getElementById('mapHere'), {
		  center: {lat: 0, lng: 0 },
		  zoom: 19
	    });;
var marker = new google.maps.Marker({position: {lat: 0, lng: 0 }, map: map});;
 position.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.latitude + ", "+  message.longitude);

    marker.setPosition({lat: message.latitude, lng: message.longitude });
    map.setCenter({lat: message.latitude, lng: message.longitude }); 
  });






