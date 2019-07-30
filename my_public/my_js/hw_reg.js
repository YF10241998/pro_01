function reg(){
  var uname = document.getElementById("uname");
  var email = document.getElementById("email");
  var upwd = document.getElementById("upwd");
  var phone = document.getElementById("phone");
  var userUname = uname.value;
  var userEmail = email.value;
  var userUpwd = upwd.value;
  var userPhone = phone.value;
  var userName = user_name.value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if(xhr.readyState==4&&xhr.status==200){
      var result = xhr.responseText;
      var obj = JSON.parse(result);
      if(obj.code==200){
				//window.location.href="http://127.0.0.1:5500/my_public/my_boot_index.html";
          alert("注册成功")
					var uname = document.getElementById("uname");
					setTimeout(function(){
					//获取用户名保存在sessionStorage中
						sessionStorage.setItem("uname",uname.value);
					//跳转到index.html
						// location.href="my_boot_index.html"
					},1000)
				
			}
    }
  }
  var url = "http://127.0.0.1:3000/project/reg"
  xhr.open("post",url,true);
  var formdata = "uname="+userUname+"&email="+userEmail+"&upwd="+userUpwd+"&phone="+userPhone+"&user_name="+userName;
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  
	xhr.send(formdata);
}



function uname(){
  var uname = document.getElementById("uname");
  var arrname = document.getElementById("errName")
  if(uname.value==""){
    arrname.innerHTML = "用户名不能为空";
  }else{
    arrname.innerHTML = "";
  }
}
function email(){
  var email = document.getElementById("email");
  var arrEmail = document.getElementById("errEmail")
  if(email.value==""){
    arrEmail.innerHTML = "邮箱不能为空";
  }else{
    arrEmail.innerHTML = "";
  }
}
function upwd(){
  var upwd = document.getElementById("upwd");
  var arrPwd = document.getElementById("errPwd")
  if(upwd.value==""){
    arrPwd.innerHTML = "密码不能为空";
  }else{
    arrPwd.innerHTML = "";
  }
}
function qrpwd(){
  var qrUpwd = document.getElementById("qrUpwd");
  var errqr = document.getElementById("errqr")
  var upwd = document.getElementById("upwd");
  if(upwd.value!=qrUpwd.value){
    errqr.innerHTML = "密码不一致";
  }else{
    errqr.innerHTML = "";
  }
}

function phone(){
  var phone = document.getElementById("phone");
  var arrPhone = document.getElementById("errPhone")
  if(phone.value==""){
    arrPhone.innerHTML = "联系方式不能为空";
  }else{
    arrPhone.innerHTML = "";
  }
}
function username(){
  var user_name = document.getElementById("user_name");
  var arrUsername = document.getElementById("errUsername")
  if(user_name.value==""){
    arrUsername.innerHTML = "中文姓名不能为空";
  }else{
    arrUsername.innerHTML = "";
  }
}