$(function(){
    $.ajax({
        url:"my_boot_foot.html",
        type:"get",
        success:function(result){
            $(result).replaceAll("footer");
            $(`<link rel="stylesheet" href="./my_css/hw_boot_foot.css">`)
            .appendTo("head");
        }
    })
})