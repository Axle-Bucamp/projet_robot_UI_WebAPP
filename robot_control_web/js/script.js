jQuery(document).ready(function($) {
   // Votre code ici avec les appels à la fonction $()
	 M.AutoInit();

$('.menu-mobile .menu-m').click(function(){

	$('.center div').addClass("masquer");
	$("." + $(this).attr('id')).removeClass("masquer");
});


});
