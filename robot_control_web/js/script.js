jQuery(document).ready(function($) {
   // Votre code ici avec les appels à la fonction $()
	 M.AutoInit();

$('.menu-mobile .menu-m').click(function(){

	$('.content > div').addClass("masquer");
	$("." + $(this).attr('id')).removeClass("masquer");
});

//'fichier de config'

var jsonparse = JSON.parse(json);

//generation du select
jQuery.each(jsonparse,function(key, value){
	
	jQuery.each(value,function(key2, value2){
		if(key2 === "name"){
			$("#activitySelector").append($('<option value='+'"' + key + '"'+' > ' + value2 + '</option>'));

		}
	});	
});
// init selection list
$("#activitySelector").formSelect();
var selected = jsonparse["1"];

//lorsque l'on selectionne un robot
var activities = document.getElementById("activitySelector");
activities.addEventListener("change", function() {
	var a = $(this).val();
	robot_change(a);
});
// gere le changement de robot (genere le html necess et change l'element courant selectionné)
function robot_change(a) {
  jQuery.each(jsonparse,function(key, value){
			if(key === ""+ a){
				selected = jsonparse[key];
				jQuery.each(value,function(key2, value2){
					if(key2 === "text"){
						$("#robots_infos").html("<p>" + value2 + "</p>");
						$(".information p.rText").html(value2);
					}
					if(key2 === "img"){
						$("#robots_img").html("<img src='img/" + value2 + "'/>");
						$(".information #img").html("<img src='img/" + value2 + "'/>");
					}
					if(key2 === "name"){
						$(".information h3.nRobot span").html( value2);
					}
			});	
		}
	});
}
// premier appelle par défault
robot_change("1");

});
