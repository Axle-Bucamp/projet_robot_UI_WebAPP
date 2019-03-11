jQuery(document).ready(function($) {
   // Votre code ici avec les appels à la fonction $()
	 M.AutoInit();

$('.menu-mobile .menu-m').click(function(){

	$('.content > div').addClass("masquer");
	$("." + $(this).attr('id')).removeClass("masquer");
});

//'fichier de config'
var json = '{"1" :{"name":"found1", "text":"ok google, do my homeworks"}, "2":{"name":"found2", "text":"ok siri ..."},"3":{"name":"found3", "text":"not this one pls"}}';
var jsonparse = JSON.parse(json);

//generation du select
option = document.createElement("option");
option.text =  jsonparse.text;
option.value = jsonparse.text;
document.getElementById("activitySelector").add(option);
$("#activitySelector").html('<option value='+""+' disable selected > choose your robots</option>');
jQuery.each(jsonparse,function(key, value){
	
	jQuery.each(value,function(key2, value2){
		if(key2 === "name"){
			$("#activitySelector").append($('<option value='+'"' + key + '"'+' > ' + value2 + '</option>'));
			
		}
	});	
});

$('select').formSelect('destroy');
$("#activitySelector").formSelect();

//lorsque l'on selectionne un robot
var activities = document.getElementById("activitySelector");
activities.addEventListener("change", function() {
	var a = $(this).val();
	jQuery.each(jsonparse,function(key, value){
			if(key === ""+ a){	
				jQuery.each(value,function(key2, value2){
					if(key2 === "text"){
						$("#robots_infos").html(value2);
					}
			});	
		}
	});
});



/* si l actualisation ne suffit plus pour le changement d oriantation 
var mql = window.matchMedia("(orientation: portrait)");
mql.addListener(handleOrientationChange);
handleOrientationChange(mql);
function handleOrientationChange(mql) {
  if (mql.matches) {
    
  } else {
    
    document.getElementsByClassName('capteurEtat').style.top = "90vh";
    document.getElementsByClassName('capteurEtat').style.right = "15em";
  }
}*/

});
