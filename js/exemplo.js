$(document).ready(
  function(){
    $.getJSON("json/db.json", function(data){
      var cont = 0; // Cria a variavel para contar quantas pessoas temos
      $.each(data, function(){ cont++; }); // Contar quantas pessoas temos

      // Percorre de 0 até quantas pessoas tiverem
      for(i = 0; i <= cont; i++){
        $.each(data[i], function(chave, valor){ // Recebe a chave ("nome", "idade", "imagem") e seus valores
          if(chave == "nome"){ // Se for nome
            $("<p> Nome: "+valor+"</p>").appendTo("body"); // Adiciona o paragrafo com o nome
          }
          if(chave == "idade"){
            $("<p> Idade:"+valor+"</p>").appendTo("body"); // Adiciona o paragrafo com a idade
          }
          if(chave == "imagem"){
            $("<p>Imagem: <img src=\""+valor+"\"></p>").appendTo("body"); // Adiciona uma imagem da pessoa
          }
        });
      }
    });

});
