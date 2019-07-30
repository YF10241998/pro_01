$(function(){
    $.ajax({
        url:"my_boot_head.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("header");
            $(`<link rel="stylesheet" href="./my_css/hw_boot_head.css">`)
            .appendTo("head");
            var msg = document.getElementById("msg");
    var n = sessionStorage.getItem("uname");
    if(n){
        var str =`${n},`
        str +='<a href="loginout.html">退出</a>';
        msg.innerHTML = str;
    }
        }
    })
})

