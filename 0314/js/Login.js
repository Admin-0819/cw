$(function(){
	$("#go").on("click",function(e){
		e.preventDefault();
		var oName = $("#name").val(),
			opwd = $("#password").val();
		if(true){
			$.ajax({
				url:"http://localhost:8080/Proxy/FootBall/user/json/login.do",
				dataType:'json',
				data:{"loginname":oName,"password":opwd},
					success:function(d){
						console.log(d);
						 alert("欢迎---"+d.data.loginuser.nickname+"---登录");
						 alert("ID:"+d.data.loginuser.id);
						 
					}

			})
		}
	});
});