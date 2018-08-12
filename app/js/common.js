
$(document).ready(function() {
    
    
    //Рабочий if
    if($(document).width() > 992){
        $('.first-screen').height($('.first-screen').width()/1.5);

        $(window).resize(function(){
            $('.first-screen').height($('.first-screen').width()/1.5);
        });

        $('.background .col-md-3 ').height($('.first-screen').height()*(1/3));

        $(window).resize(function(){
            $('.background .col-md-3 ').height($('.first-screen').height()*(1/3));
        });
        
        $('.examples').height($('.examples').width()/1.5);

        $(window).resize(function(){
            $('.examples').height($('.examples').width()/1.5);
        });
        
        $('.popup-gallery .col-md-3 ').height($('.examples').height()*(1/3));

        $(window).resize(function(){
            $('.popup-gallery .col-md-3 ').height($('.examples').height()*(1/3));
        });
    }
    
     if($(document).width() <= 992 && $(document).width() > 768){
        $('.first-screen').height($('.first-screen').width()/(1200/1066));

        $(window).resize(function(){
            $('.first-screen').height($('.first-screen').width()/(1200/1066));
        });
         
        $('.background .col-sm-4 ').height($('.background').height()*(1/4));

        $(window).resize(function(){
            $('.background .col-sm-4 ').height($('.background').height()*(1/4));
        });
         
        $('.examples').height($('.examples').width()/(1200/1066));

        $(window).resize(function(){
            $('.examples').height($('.examples').width()/(1200/1066));
        });
        $('.popup-gallery .col-sm-4 ').height($('.examples').height()*(1/4));

        $(window).resize(function(){
            $('.popup-gallery .col-sm-4 ').height($('.examples').height()*(1/4));
        });
     }
    
    if( $(document).width() <= 768){
    
        $('.examples').height($('.examples').width()*2);

        $(window).resize(function(){
            $('.examples').height($('.examples').width()*2);
        });
        $('.popup-gallery .col-xs-6 ').height($('.examples').height()*(1/6));

        $(window).resize(function(){
            $('.popup-gallery .col-xs-6 ').height($('.examples').height()*(1/6));
        });
     }
         
    
     $('.popup-gallery').magnificPopup({
         delegate: 'a',
         type: 'image',
         tLoading: 'Загрузка изображения #%curr%...',
         gallery: {
             enabled: true,
             navigateByImgClick: true,
             preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         }
    });

    var image = "../img/marker.png"
    var uluru = {lat: 56.885243, lng: 60.588756}; 
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: image,
      title: 'Машиностроителей, 19 оф. 314/1'
    }); 
    
  
    
    jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
        return false;
      });
    
    jQuery("a.scrollto-2").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
        return false;
      });

   
    var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$('.numb-1')
                .prop('number', 0)
                .animateNumber({
                  number: 15000
                },
                1500
              );
			show = false;
            $('.numb-2')
                .prop('number', 0)
                .animateNumber({
                  number: 20000
                },
                1500
              );
			show = false;
		}
    });
    
    
});



