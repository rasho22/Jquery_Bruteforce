$(function(){
	var txt="";
	$.ajax({
		url: "http://docusland.fr/code-academie/js_bruteforce/dico.txt",
		type : 'POST',
		type : 'GET',
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



