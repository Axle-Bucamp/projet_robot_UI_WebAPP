var json = '{"1" :{"name":"turtlebot2", "text":" Le TurtleBot 2 est un robot mobile complet qui se programme avec ROS et qui propose des capacités avancées, notamment grâce au capteur ASUS Xtion Pro.", "url":"ws://localhost:9090", "img":"turtlebot2.png"}, "2":{"name":"turtlebot3", "url":"ws://localhost:9090", "text":"TurtleBot3 est un robot mobile de nouvelle génération, modulaire, compact et personnalisable. Explorons ROS et créons des applications intéressantes pour l’éducation, la recherche et le développement de produits.", "img":"turtlebot3.jpg"},"3":{"name":"summit XL", "url":"ws://localhost:9090", "text":"La structure mécanique robuste permet de transporter des charges beaucoup plus lourdes et est utilisée pour la recherche, la surveillance, la surveillance à distance et les applications militaires.", "img":"summit.png"}}';

var jsonparse = JSON.parse(json);
var selected = jsonparse["1"];
