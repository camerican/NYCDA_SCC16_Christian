$(document).ready(function(){

	$("h1").click(function(){
		$("h1").fadeOut(4000)
		$("h1").fadeIn(1000);
	})
	
	$(document).keypress(function(event){
		if(event.charCode == 119){
			console.log("logsome")
			$("p").animate({
				"font-size": "30px"
			}, 2000)
		}
	})
})

