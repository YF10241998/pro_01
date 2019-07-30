function login(){
	//获取用户名和密码
	var u_name=uname.value;
	var u_pwd=upwd.value;
	//1.创建异步对象
	var xhr=new XMLHttpRequest();
	//4.获取响应数据
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4&&xhr.status==200){
			var result=xhr.responseText;
			var obj = JSON.parse(result);
			if(obj.code>0){
				//window.location.href="http://127.0.0.1:5500/my_public/my_boot_index.html";
					alert("登陆成功");
					var uname = document.getElementById("uname");
					setTimeout(function(){
					//获取用户名保存在sessionStorage中
						sessionStorage.setItem("uname",uname.value);
					//跳转到index.html
						location.href="my_boot_index.html"
					},1000)
				
			}
		}
	}
	//2.创建请求
	var url="http://127.0.0.1:3000/project/login";
	xhr.open("post",url,true);
	var formdata="uname="+u_name+"&upwd="+u_pwd;
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//3.发送请求
	xhr.send(formdata);

	
}

