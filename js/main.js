$(function(){
	
	$(".header nav li.switch a").on("click" , function(e){
		
		$("body").toggleClass("switchMode");
		e.preventDefault();
	});
	
});