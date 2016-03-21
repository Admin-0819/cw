$(function(){
	$(".sub").on("click",function (e) {
		var oPhone = $(".phone-num").val(),
			oPss = $(".pass").val(),
			oName = $(".name").val();
		if(true){
		$.ajax({
			url:"http://localhost:8080/Proxy/FootBall/user/json/reg.do",
			data:{"loginname":oPhone,"password":oPss,"nickname":oName},
			success:function(d){
				console.log(d);
			}
		});
	};	
	});
	
});