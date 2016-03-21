$(function(){
	$(".gain").on("click",function(e){
		 e.preventDefault();
		 var oPhone = $(".phone").val();
		 if(true){
		 	$.ajax({
		 		url:"http://localhost:8080/Proxy/FootBall/checkcode/json/request/sms.do",
		 		dataType:"json",
		 	data:{"phonenumber":oPhone},
		 	success:function(d){
		 		console.log(d);
		 	};
		 	});
		 	
		 }
	})
});