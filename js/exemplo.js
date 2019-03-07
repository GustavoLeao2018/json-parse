$(document).ready(
  function(){
    $.getJSON({
      type: "GET",
      headers: {"Access-Control-Allow-Origin" : "*"},
      url: "js/db.json"
    }, function(data){
        $.each(data, function(key, value){
            if(key == "nome"){
              $("#nome").append("Nome: "+value);
            }
            if(key == "idade"){
              $("#idade").append("Idade: "+value);
            }
            if(key == "facebook"){
              $("#facebook").append('Facebook: <a href="'+value+'">Facebook</a>');
            }
        });
    });
  });
