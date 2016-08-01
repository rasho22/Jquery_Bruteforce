$(function(){
    var password=$("password").val();
	var txt="";
	$.ajax({
		url:
        $.post ( "http://docusland.fr/code-academie/js_bruteforce/dico.txt",{
            password:password}, function(data){
            if (data == "Wrong login"){
                $("#resultat").html(data);
            }else {
                alert(data);
            }
            }
        });
    });
        /*
       dataType : 'html',
        success : function(code_html, statut){
       },
       error : function(resultat, statut, erreur){

       },
       complete : function(resultat, statut){
       	 $("#resultat").html(txt);

       }

	});

});

	/*

	var txt="";
	$.ajax({
		url: "http://docusland.fr/code-academie/js_bruteforce/dico.txt",
		success: function(){
			txt +="success \n";
		},
		error: function(){
			txt += "error \n";
		},
		beforeSend:function(){
			txt +="beforeSend \n";
		},
		dataFilter : function(){
			txt +="dataFilter \n";
		},
		complete : function(){
			txt +="complete \n";
			 $("#resultat").html(txt);
		},
	})*/
	/*var passeword= $("#passeword");
		$.post(""){
			passeword:passeword
		}, function(data)
	 $.ajax({url: "http://docusland.fr/code-academie/js_bruteforce/dico.txt",
	  success: function(result){
       $("#resultat").html(result);
   }});*/



