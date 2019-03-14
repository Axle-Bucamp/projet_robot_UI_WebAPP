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

  });
  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
    $(".capteur-etat #marche").removeClass("green");
    $(".capteur-etat #marche").addClass("orange");
    // capteur rouge 

  });
  // Publishing a Topic
  // ------------------
  var cmdVel = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
  });
  var twist = new ROSLIB.Message({
    linear : {
      x : 0.1,
      y : 0.2,
      z : 0.3
    },
    angular : {
      x : -0.1,
      y : -0.2,
      z : -0.3
    }
  });
  cmdVel.publish(twist);
  // Subscribing to a Topic
  // ----------------------
  var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/listener',
    messageType : 'std_msgs/String'
  });
  listener.subscribe(function(message) {
    console.log('Received message on ' + listener.name + ': ' + message.data);
    listener.unsubscribe();
  });
  // Calling a service
  // -----------------
  var addTwoIntsClient = new ROSLIB.Service({
    ros : ros,
    name : '/add_two_ints',
    serviceType : 'rospy_tutorials/AddTwoInts'
  });
  var request = new ROSLIB.ServiceRequest({
    a : 1,
    b : 2
  });
  addTwoIntsClient.callService(request, function(result) {
    console.log('Result for service call on '
      + addTwoIntsClient.name
      + ': '
      + result.sum);
  });
  // Getting and setting a param value
  // ---------------------------------
  ros.getParams(function(params) {
    console.log(params);
  });
  var maxVelX = new ROSLIB.Param({
    ros : ros,
    name : 'max_vel_y'
  });
  maxVelX.set(0.8);
  maxVelX.get(function(value) {
    console.log('MAX VAL: ' + value);
  });

