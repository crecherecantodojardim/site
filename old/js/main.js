$(document).ready(function(){
	$( ".panel-title a" ).click(function(){
		var elm = $(this);
		if(elm.hasClass("open")){
			elm.removeClass("open");
			var close = true;
		} else{
			elm.addClass("open");
		}
	  var id = elm.attr("href")
	  var id = id.replace("#","")
	  $(".panel-group .panel").removeClass("active")
	  var li = elm.closest("li.panel");

	  if(close==true){
			li.removeClass('active');
		} else{
			li.addClass('active');
		}
	  $( ".portfolio--lr .col-12 img" ).hide()
	  $( ".portfolio--lr .col-12 img" ).each(function(){
	  	var elm = $( this );
	  	var id_this = elm.data( "id" )
	  	if( id == id_this ){
	  		console.log(id_this)
	  		elm.fadeIn()
	  	}
	  })
	})
});
