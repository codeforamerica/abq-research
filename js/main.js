$(function(){
	$('.cfalogo').hover(
	function() {
		$('nav').show();
	});



  var height = $(window).height(),
      width = $(window).width();


  var setSize = function(){
    height = $(window).height();
    width = $(window).width();

    $(".quote").css({width:width, height:height});
    $("img.bgimg").css({width:width, height:height});
  }

  $(window).scroll(function(){

    console.log(($(window).scrollTop() % height) / height, Math.floor($(window).scrollTop() / height), "img#img-"+ Math.floor($(window).scrollTop() / height));

    $("img.bgimg").each(function(i,el){
      if(($(el).attr("id") == "img-"+Math.floor($(window).scrollTop() / height)) ||
        ($(el).attr("id") == "img-"+(Math.floor($(window).scrollTop() / height) -1))){

        $("img#img-"+ Math.floor($(window).scrollTop() / height)).css({opacity:(($(window).scrollTop() % height) / height)*1.8 });
        $("img#img-"+ (Math.floor($(window).scrollTop() / height) -1)).css({opacity:(1-($(window).scrollTop() % height) / height)*1.8});

      }else{
        $(el).css({opacity:0});

      }        

    });


  });

  setSize();
  $(window).resize(setSize);



});



