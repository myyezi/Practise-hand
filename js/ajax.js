var $={
   ajax:function(json){
    var xhr=new XMLHttpRequest();
  var type =json["type"];
  var url=json["url"];
  if(json["data"]){
      var html="?";
      for(var i in json["data"]){
          html+=i+"="+json["data"][i]+"&";
      }
      html=html.substring(0,html.length-1);
  }
    var success=json["success"];
    xhr.open(type,url,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            if(json["dataType"]=="json"){
                try{
                    result =json.parse(result);
                } catch(e){
                    if(json["error"]){
                        json.error(e);
                    }
                }
            }
        }else{
            if(json.sendBefore){
                json.sendBefore();
            }
        }
    }
   }
}