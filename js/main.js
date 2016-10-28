
$(document).ready(function(){
		
	var lastQuoteItem = {lastQuote:''};
	var lastColorItem = {lastColor:'',lastBgColor:''};
	var colorsJSON="/assets/colors.json";
	var quotesJSON="/assets/quotes.json";
	var x,y;

	function tweetThis(text){
		
		$("#twitter").on('click',function(){
			var tweetURI = "https://twitter.com/intent/tweet?text="+encodeURIComponent(text);
			window.location.href=tweetURI;
		});

	}

	function accessRandomJSON(url,lastItem){

		var items= [];
		var qw=0;

		$.getJSON(url,function(json){
			json=json.sort(function(){
			return (Math.random()-Math.random());
			});


			json.map(function(val){
				items.push(val);
			});	
			
			 if(url==quotesJSON){

			 	// console.log(lastItem.lastQuote.quoteText);
			 	if(items[0].quoteText!==lastItem.lastQuote.quoteText){
					lastItem.lastQuote=items[0];
					// $("#quote").html('"'+lastItem.lastQuote.quoteText+'"');
					}

			    else{
					lastItem.lastQuote=items[1];
					// $("#quote").html('"'+lastItem.lastQuote.quoteText+'"');
					}

					
				    // $("#quote").animate({opacity:0})
				    //     .queue(function(){$("#quote")
				    //     	.text('"'+lastItem.lastQuote.quoteText+'"');
				    //      $("#quote").dequeue()})
				    //     .animate({opacity:1});  

			        $("#quote").text('"'+lastItem.lastQuote.quoteText+'"');
			        tweetThis(lastItem.lastQuote.quoteText);
					
			}

			else{
				if(items[0].color!==lastItem.lastColor.color){
					lastItem.lastBgColor=items[0];
					lastItem.lastColor=items[0];
				}

				else{
					lastItem.lastBgColor=items[1];
					lastItem.lastColor=items[1];
				}

				x=lastItem.lastColor.color;
				y=lastItem.lastBgColor.bgColor;
				var backColor=".backColor{background:"
			               +lastItem.lastBgColor.bgColor
			               +" !important;\
			            	 -webkit-transition: background 0.3s linear;\
							transition: background 0.3s linear;}";

	           var fontColor=".fontColor{color:"
	           				  +lastItem.lastColor.color
	           				  +" !important;\
	           					-webkit-transition: background 0.3s linear;\
								transition: background 0.3s linear;}";

			   var borderColor=".borderColor{border-color:"
			   					+lastItem.lastColor.color
	           				    +" !important;\
	           					  -webkit-transition: background 0.3s linear;\
									transition: background 0.3s linear;}";

			    var invertColor=".invertColor:hover{background:"
			    				 + lastItem.lastColor.color	
			    				 +" !important; color:"
			    				 + lastItem.lastBgColor.bgColor
			    				 +" !important;}";

			    $("#colorChanger").remove();

			 	$('<style id="colorChanger" type="text/css">'
			 		+backColor+fontColor
			 		+borderColor+invertColor
			 		+'</style>')
			 	.appendTo("head");
			 	console.log("color: "+lastItem.lastColor.color);
			 	console.log("back color: "+lastItem.lastBgColor.bgColor);
			 }
		});
	}

	accessRandomJSON(colorsJSON,lastColorItem);		
	accessRandomJSON(quotesJSON,lastQuoteItem);
	
	$("#new-quote").on('click',function(){

	accessRandomJSON(colorsJSON,lastColorItem);		
	accessRandomJSON(quotesJSON,lastQuoteItem);
	});

	$("#twitter").on('click',function(){
		location.href = "http://ctt.ec/T5sw6";
		console.log("gfrt");
	});
});