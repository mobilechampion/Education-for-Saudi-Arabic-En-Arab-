
$(document).ready(function () {

    


    $('.menuBtn').on('click', function (event) {
        $('#menuMain').toggleClass('active');
        $('#main').toggleClass('active');
    })


    $('.dropdown').find('.textHolder').hide();
    $('#menuMain').attr('style', 'height:'+$('#mainBody')[0].scrollHeight+'px');

    $( window ).resize(function() {
      $('#menuMain').attr('style', 'height:'+$('#mainBody')[0].scrollHeight+'px');
    });
    $('.line').on('click', function (event) {
    	if ( $(this).hasClass('active') ) {

            $(this).parent().find('.textHolder').removeClass('active');
            setTimeout(function(){ $('#menuMain').attr('style', 'height:'+$('#mainBody')[0].scrollHeight+'px'); }, 600);
            $(this).parent().find('.textHolder').hide("slow");
            $(this).removeClass('active');
            $(this).parent().find('.pullRight').text('+');

    	} else {
            $('.dropdown').find('.pullRight').text('+');
            $('.line').removeClass('active');
            $('.dropdown').find('.textHolder').hide("slow");
            $(this).parent().find('.textHolder').show("slow");

            $(this).addClass('active');
            $(this).parent().find('.pullRight').text('-');
            setTimeout(function(){ $('#menuMain').attr('style', 'height:'+$('#mainBody')[0].scrollHeight+'px'); }, 600);
            

    	}
    })


    var myElement = document.getElementsByTagName('body')[0];

    // create a simple instance
    // by default, it only adds horizontal recognizers
    var mc = new Hammer(myElement);

    mc.on("panleft panright", function(ev) {
        if (ev.angle < 30 && ev.angle > -30 && ev.type == 'panright' &&  ev.distance > 50) {
            $('#menuMain').addClass('active');
            $('#main').addClass('active');
        }

        if ((ev.angle > 150 && ev.angle <= 180) ||  (ev.angle < -150 &&  ev.angle >= -179) && ev.type == 'panleft' && ev.distance > 50) {
            $('#menuMain').removeClass('active');
            $('#main').removeClass('active');
        }
    });

// ducument ready end
})