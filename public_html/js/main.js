/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$("#accept").change(function(){
	$("#termn").slideToggle();
//	if($(this).prop( "checked" )){
//		console.log("ce");
//		$("#termn").slideDown();
//	}else{
//		console.log("no");
//		$("#termn").slideUp();
//	}
})
$(".inner-collapse").children("a").click(function(){
	$(".inner-collapse").children(".collapse").removeClass("in");
	var $par = $(this).parents(".inner-collapse");
	$par.children(".collapse").collapse("show");
})
