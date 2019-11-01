$(function(){
	//页面初始化
	$(".number1").mouseover(function(){
		$(".mainForm").show();
		$(".mainForm2").hide();
		//$(".error").hide();
		$(".form input").val("");//页面中所有文本框为空
	});
	$(".number2").mouseover(function(){
		$(".mainForm").hide();
		$(".mainForm2").show();
		//$(".error").hide();
		$(".form input").val("");//页面中所有文本框为空
	});
	//文本框失去焦点
	$(".form input").blur(function(){
		$("#mz_Float").css("top","");
	});
	//协议条款
	
	//mainform1
	//密码是否可见(mainform1)
	
	//手机号栏失去焦点
	$(".phone").blur(function(){
		reg=/^1[3|4|5|7|8][0-9]\d{4,8}$/i;
		if($(".phone").val()==""){
			
		}
	})
	
	
	
	
	
	$(".fullBtnBlue").click(function(){
		
	})
	$(".full_login").click(function(){
		window.location.href="login.html";
	})
})
