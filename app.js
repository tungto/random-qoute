$(document).ready(function(){
	getRandomQuote();
  $('#nextquote').click(function(){
    getRandomQuote();
  });
  function getRandomQuote(){
    $.ajax({
		url: 'https://talaikis.com/api/quotes/random/',
		type: 'GET',
		dataType: 'json',
		success: function(data) {
	  	    var quote=data.quote;
	  	    var author=data.author;
	  			$('#container #content').html(quote);
	  			$('#container h4').html("-"+author);
	        $('#share').attr('href',"https://twitter.com/intent/tweet?text="+quote+"   "+author);
	  		},
      error: function(err) {
        $('.quote #data').html("Oops something went wrong!, Please try again.");
      }
    });
  }
});
	






