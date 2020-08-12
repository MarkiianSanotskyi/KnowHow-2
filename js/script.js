$(document).ready(function () { // вся магия после загрузки страницы
    $('.modal1_open').click(function (event) { // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function () { // после выполнения предъидущей анимации
		 	    $('#modal_form')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({ opacity: 1, top: '50%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		 	});
    });
	
	$('.modal2_open').click(function (event) { // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function () { // после выполнения предъидущей анимации
		 	    $('#modal_form3')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({ opacity: 1, top: '10%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		 	});
    });
	
	
		$('.modal4_open').click(function (event) { // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function () { // после выполнения предъидущей анимации
		 	    $('#modal_form4')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({ opacity: 1, top: '10%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		 	});
    });
	    $('#modal_close4, #overlay').click(function () { // ловим клик по крестику или подложке
        $('#modal_form4')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
				    $(this).css('display', 'none'); // делаем ему display: none;
				    $('#overlay').fadeOut(400); // скрываем подложку
				}
			);
    });
	
			$('.modal5_open').click(function (event) { // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function () { // после выполнения предъидущей анимации
		 	    $('#modal_form5')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({ opacity: 1, top: '10%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		 	});
    });
	    $('#modal_close5, #overlay').click(function () { // ловим клик по крестику или подложке
        $('#modal_form5')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
				    $(this).css('display', 'none'); // делаем ему display: none;
				    $('#overlay').fadeOut(400); // скрываем подложку
				}
			);
    });
	
	
	
	
	$('.modal6_open').click(function (event) { // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function () { // после выполнения предъидущей анимации
		 	    $('#modal_form6')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({ opacity: 1, top: '10%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		 	});
    });
	    $('#modal_close6, #overlay').click(function () { // ловим клик по крестику или подложке
        $('#modal_form6')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
				    $(this).css('display', 'none'); // делаем ему display: none;
				    $('#overlay').fadeOut(400); // скрываем подложку
				}
			);
    });
	
	$('.modal7_open').click(function (event) { // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function () { // после выполнения предъидущей анимации
		 	    $('#modal_form7')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({ opacity: 1, top: '10%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		 	});
    });
	    $('#modal_close7, #overlay').click(function () { // ловим клик по крестику или подложке
        $('#modal_form7')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
				    $(this).css('display', 'none'); // делаем ему display: none;
				    $('#overlay').fadeOut(400); // скрываем подложку
				}
			);
    });	
	
	
		$('.modal8_open').click(function (event) { // ловим клик по ссылки с id="go"
        event.preventDefault(); // выключаем стандартную роль элемента
        $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
		 	function () { // после выполнения предъидущей анимации
		 	    $('#modal_form8')
					.css('display', 'block') // убираем у модального окна display: none;
					.animate({ opacity: 1, top: '10%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
		 	});
    });
	    $('#modal_close8, #overlay').click(function () { // ловим клик по крестику или подложке
        $('#modal_form8')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
				    $(this).css('display', 'none'); // делаем ему display: none;
				    $('#overlay').fadeOut(400); // скрываем подложку
				}
			);
    });
	
	
	
	
	
	
	$('#sub').mouseover(function () {
		 	    $('.hover_ef').animate({ width: 196}, 250);
				$('#sub').css("color","#e84103");
    });
	
		$('#sub').mouseout(function () {
		 	    $('.hover_ef').animate({ width: 0}, 250); 
				$('#sub').css("color","#fff");
    });
	
	
	
	$('.q1').mouseover(function () {
		 	    $('.hover_ef1').animate({ width: 219}, 250); 
		 	$('.q1').css("color","#e84103");
    });
	
		$('.q1').mouseout(function () {
		 	    $('.hover_ef1').animate({ width: 0}, 250);
		 	$('.q1').css("color","#fff");
    });	

	
	
	
	$('.anim_b').each(function() {
	var a = $(this).find('.hover_efect');
	var b = $(this).find('.number_zacaz');
	$(b).mouseover(function () {
		$(a).animate({ width: 202}, 250);
		$(b).css("color","#556270");
    });
});

		$('.anim_b').mouseout(function () {
		 	    $('.hover_efect').animate({ width: 0}, 250); 
		 	$('.number_zacaz').css("color","#fff");
    });	
	
	
	
		$('.modal_sub').mouseover(function () {
		 	    $('.mod_anim').animate({ width: 134}, 250);
		 	$('.modal_sub').css("color","#e84103");
    });
	
		$('.modal_sub').mouseout(function () {
		 	    $('.mod_anim').animate({ width: 0}, 250); 
		 	$('.modal_sub').css("color","#fff");
    });
	
	
	
	

	
	
	
	
	
	
	
	
	
    /* Закрытие модального окна, тут делаем то же самое но в обратном порядке */
    $('#modal_close, #overlay').click(function () { // ловим клик по крестику или подложке
        $('#modal_form')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
				    $(this).css('display', 'none'); // делаем ему display: none;
				    $('#overlay').fadeOut(400); // скрываем подложку
				}
			);
    });

    $('#modal_close2, #overlay').click(function () { // ловим клик по крестику или подложке
        $('#modal_form2')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
				    $(this).css('display', 'none'); // делаем ему display: none;
				    $('#overlay').fadeOut(400); // скрываем подложку
				}
			);
    });

	    $('#modal_close3, #overlay').click(function () { // ловим клик по крестику или подложке
        $('#modal_form3')
			.animate({ opacity: 0, top: '45%' }, 200,  // плавно меняем прозрачность на 0 и одновременно двигаем окно вверх
				function () { // после анимации
				    $(this).css('display', 'none'); // делаем ему display: none;
				    $('#overlay').fadeOut(400); // скрываем подложку
				}
			);
    });
	
	
	
	
	
    $('.bxslider').bxSlider({
        auto: true
    }
        );

    $('.bxslider2').bxSlider({
        minSlides: 3,
        maxSlides: 3,
        slideWidth: 240,
        slideMargin: 10,
        moveSlides: 1,
        slideMargin: 60,
        pager:false
    });

    $('.count_wrap').countdown('2014/12/31 23:55:55').on('update.countdown', function (event) {
        var $this = $(this).html(event.strftime('<div class="container"><div class="ost">ОСТАЛОСЬ</div>'
        + '<div class="count_day_wrap"><div class="count">%-D</div><div class="inf">дней</div></div><div class="dv">:</div>'
        + '<div class="count_hour_wrap"><div class="count">%-H</div><div class="inf">часов</div></div><div class="dv">:</div>'
        + '<div class="count_minute_wrap"><div class="count">%M</div><div class="inf">минут</div></div><div class="dv">:</div>'
        + '<div class="count_second_wrap"><div class="count">%S</div><div class="inf">секунд</div></div><div class="org">БЕСПЛАТНО</div></div>'));
    });



    $('.pan1').click(function (event) {
        event.preventDefault(); // выключаем стандартную роль элемента
        $('.player_wrap iframe').attr('src','panorams/1_Dom/Dom_1.html' );
        $('.frame_modal_win iframe').attr('src','panorams/1_Dom/Dom_1.html' );
    });

    $('.pan3').click(function (event) {
        event.preventDefault(); // выключаем стандартную роль элемента
        $('.player_wrap iframe').attr('src', 'panorams/Naberejnaja_19/Naberejnaja.html');
        $('.frame_modal_win iframe').attr('src', 'panorams/Naberejnaja_19/Naberejnaja.html');
    });

    $('.pan2').click(function (event) {
        event.preventDefault(); // выключаем стандартную роль элемента
        $('.player_wrap iframe').attr('src','panorams/2_dom/Dom_2.html' );
        $('.frame_modal_win iframe').attr('src','panorams/2_dom/Dom_2.html' );
    });

});

function show_modal2() {
    $('#overlay').fadeIn(400, // сначала плавно показываем темную подложку
    function () { // после выполнения предъидущей анимации
        $('#modal_form2')
            .css('display', 'block') // убираем у модального окна display: none;
            .animate({ opacity: 1, top: '50%' }, 200); // плавно прибавляем прозрачность одновременно со съезжанием вниз
    });
}

var visiteduuid = '-';	
var referrer = '-';
var reference = '-';


		



		function _onfocus(event){
			cheak_edit(event);
		}
		
		function _onblur(event){
			cheak_edit(event);
		}	
			
		function cheak_edit(event){
			var startval = ($('#'+event.id).attr('startval')!=null)?$('#'+event.id).attr('startval'):'';
			
			if (event.value == ""+startval) {
					$('#'+event.id).val($('#'+event.id).attr('defval'));
					$("#"+event.id).removeClass('edit_f_te');
					return;
				}
			
			if ($('#'+event.id).attr('defval') != null)
				if (event.value.length!=0){
					if ((event.value != $('#'+event.id).attr('defval'))){
							$("#"+event.id).addClass('edit_f_te');
						}else{
							$('#'+event.id).val(""+startval);
							$("#"+event.id).addClass('edit_f_te');
						}
				}else {
					$('#'+event.id).val($('#'+event.id).attr('defval'));
					$("#"+event.id).removeClass('edit_f_te');
				}
				$('#'+event.id).removeClass('edit_f_error');
		}
		


	function pushmsg(event) {
                var str = 'action=pushcform&p=1';
				var sform=null; var ft='';
				var v = 0;
				$(event).parents('form').each(function(){
					sform =  this;
				});

				// vemail="true"
				$(sform).find("input[vemail*='true']").each(function(){
					if (validate($(this).val())==false){
						$(this).addClass('edit_f_error');
						v = 1;
					}
				});
				
				$(sform).find("input[vphone='true']").each(function(){
					if (validatephone($(this).val())==false){
						$(this).addClass('edit_f_error');
						v = 1;
					}
				});	
				
				$(sform).find("input[type='text'], textarea, select").each(function(){
					str +=  "&" + $(this).attr('id')+'='+encodeURIComponent(
					(($(this).attr('sname')!=null)?$(this).attr('sname'):$(this).attr('defval'))
					+':;:'+$(this).val());
					if (($(this).attr('defval')==$(this).val()) && ($(this).attr('require')!=null)){
						$(this).addClass('edit_f_error');
						v = 1;
					}
				});


				$(sform).find("input[type='radio']:checked, input[type='checkbox']:checked").each(function(){
					str += "&" + $(this).attr('id')+'='+encodeURIComponent(
					(($(this).attr('sname')!=null)?$(this).attr('sname'):$(this).attr('defval'))
					+':;:'+$(this).val());
				}); 

				if (v==1) return;
				
				ft = $(sform).find('.label_to').text();
				
				$(sform).children().hide();
				$(sform).find(".progressimg").show();
				
				
				str +=  "&" + generateGuid()+'='+encodeURIComponent('Сайт:'+':;:'+location.hostname);

				str +=  "&tmes=" + encodeURIComponent(ft);
				

                $.ajax({
                    url: "wp-admin/admin-ajax.php",
                    data: str,
                    dataType: "json",
                    success: function (data, textStatus) {
                      	 	if (data.error=="0"){

                       	 				$(sform).find(".progressimg").hide();
							$(sform).find('.label_sndok').show();
							$(sform).find('a[goal="true"]').click();
							putorder();
								}
                        	else {
								$(sform).find('.label_sndok').show();
                        	}		
                    },
                     error: 
					 function (request, status, error) {
        				alert('Error!');//alert(request.responseText);
    			}
				/*	 function () {
                        alert('Error!');
                    }*/
                });
}


	function validate(address) {
	   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	   if(reg.test(address) == false) {
		  return false;
	   }
	   return true;
	}
	

	function validatephone(phone) {
		var reg = /^\+?[+\-()\s\d]+$/;
		return reg.test(phone);
	}	

	
		
	function generateGuid() {
	    var result, i, j;
	    result = '';
	    for(j=0; j<32; j++) {
	        if( j == 8 || j == 12|| j == 16|| j == 20)
	            result = result + '-';
	        i = Math.floor(Math.random()*16).toString(16).toUpperCase();
	        result = result + i;
	    }
	    return result;
	}
	
	
	function bmf(){
	
		$("form").each(function(){
			$(this).find("input[type='text'], textarea").bind('focus', function() {
				_onfocus(this);
			});

			$(this).find("input[type='text'], textarea").bind('blur', function() {
				_onblur(this);
			});
			
			$(this).find('*').each(function(){
					if ($(this).attr('id')==null){
						$(this).attr('id',generateGuid() );
					} 
				});
			$(this).find("input[type='text'], textarea").each(function(){
						if ($(this).attr('sname')==null){
						$(this).attr('sname',$(this).attr('defval'));
					}
				});				
		});
	}
	
	function init_forms(){
		bmf();
	}
	
	$(function(){
               init_forms();
 
    });

function putvisit(){


}
function putorder(){


}



var guid = (function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return function() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
  };
})();

function initialize() {
  var myLatlng = new google.maps.LatLng(35.148936,33.37417);
  var mapOptions = {
	   disableDefaultUI: true,
    zoom: 14,
    center: myLatlng,
	styles:[  ]
					
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);



  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'KNOWHOW'
  });
}


google.maps.event.addDomListener(window, 'load', initialize);

