function displayBibTex(element,id)
{
	var content = document.getElementById(id).innerHTML;
	document.getElementById(element).innerHTML="";
      	bibtex = new BibTex();
	bibtex.content = content;
      	bibtex.parse();

	// get date
	var theDate=new Date();
	var theYear=theDate.getFullYear();
	
	var year;

	for(year=theYear; year>=2007;year--){
           var hTag = document.createElement("h4");
           var hLine = document.createElement("hr");
	   hTag.innerHTML = year;
	   document.getElementById(element).appendChild(hTag);
	 
	      	for (var i in bibtex.data) {
		   if(bibtex.data[i]['year']==year){
	    	    var citation = "";
		    var pTag = document.createElement("p");
		    // create the authors list
	    	    var authors = "";
		    var author = "";
	    	    for (var j=0; j < bibtex.data[i]['author'].length - 2; j++){
		    	author = bibtex.data[i]['author'][j]['first']+" "+bibtex.data[i]['author'][j]['last'];
                        if(author.indexOf("Shiwali")!=-1){
		             author = author.bold();
 			}
	    	    	authors = authors+author+",";
	   	    	}
		    	author = bibtex.data[i]['author'][j]['first']+" "+bibtex.data[i]['author'][j]['last'];
                        if(author.indexOf("Shiwali")!=-1){
		             author = author.bold();
 			}
			authors = authors+author+",";
		    	author = bibtex.data[i]['author'][j+1]['first']+" "+bibtex.data[i]['author'][j+1]['last'];
                        if(author.indexOf("Shiwali")!=-1){
		             author = author.bold();
 			}
			authors = authors+author+".";
		    // create the citation text
   	    	    citation = citation + authors+" "+bibtex.data[i]['title']+". "+"<i>"+bibtex.data[i]['booktitle']+"</i>, "+bibtex.data[i]['year']+".<br />";

		    // add tag links
	            citation = citation + "[";
	   	    if(bibtex.data[i]['pdf']){
			citation = citation + "&nbsp;<a href=\""+bibtex.data[i]['pdf']+"\">pdf</a>&nbsp;";
	            }
		    if(bibtex.data[i]['url']){
			citation = citation + "|&nbsp;<a href=\""+bibtex.data[i]['url']+"\">http</a>&nbsp;";
	            }
		    if(bibtex.data[i]['abstract']){
			citation = citation + "|&nbsp;<a href=\""+bibtex.data[i]['Abstract']+"\">Abstract</a>&nbsp;";
	            }
		    citation = citation + "]";
		    // write to html
		    pTag.innerHTML = citation;
	      	    document.getElementById(element).appendChild(pTag);
                 }
		   document.getElementById(element).appendChild(hLine);
      	      }
	}
}		    