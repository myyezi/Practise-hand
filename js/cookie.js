function getCookie(key){
    var cookie=document.cookie;
    if(cookie){
        var cookieList=cookie.split("; ");
        for(var i=0 ;i<cookieList.length; i++){
            var item=cookieList[i];
            var itemList=item.split("=");
            var itemKey=decodeURIComponent(itemList[0]);//用了加密
            var itemValue=decodeURIComponent(itemList[1]);
            if(itemKey==key){//比较等号前的是否相等
                return itemValue;//返回的是后面一个的值
            }
        }
        return "";
    }else{
        return "";
    }
}

function setCookie(key, value, days){
    var date=new Date();
    date.setDate(date.getDate()+days);
    date.setHours(date.getHours()-8);
    document.cookie= encodeURIComponent(key) +"="+encodeURIComponent(value) +";expires=" +date +";path=/";
}