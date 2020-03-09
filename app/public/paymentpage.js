$(function(){
  var isClick =0;

  
  $('.square_1_1').click(function(){
	  isClick = 1;
	  window.location = '/donate/donation-10'

  });
  $('.square_1_2').click(function(){
  	isClick = 2;

  });
   $('.square_1_3').click(function(){
  	isClick = 3;

  });

   $('.square_1_4').click(function(){
  	isClick = 4;

  });
   	console.dir(isClick);
  $('.square_1_1').hover(function() {
             // 鼠标移入时添加hover类
             $('.square_1_1').css("background-color","#23785B");
             $('.price_1').css('color','#fff');
             $('.desc_1').css('color','#fff');
         }, function() {
         	 	
         		 if(isClick==1){
         		 	console.dir(isClick);
         		 	    $('.square_1_1').css("background-color","#23785B");
             			$('.price_1').css('color','#fff');
                        $('.desc_1').css('color','#fff');

                     $('.square_1_2').css("background-color","#fff");
		             $('.price_2').css('color','#12ABBF');
		             $('.desc_2').css('color','#12ABBF');


		              $('.square_1_3').css("background-color","#fff");
		             $('.price_3').css('color','#12ABBF');
		             $('.desc_3').css('color','#12ABBF');

		              $('.square_1_4').css("background-color","#fff");
		             $('.price_4').css('color','#12ABBF');
		             $('.desc_4').css('color','#12ABBF');
         		 }else{
         		 	console.dir(isClick);
	         		 $('.square_1_1').css("background-color","#fff");
		             $('.price_1').css('color','#12ABBF');
		             $('.desc_1').css('color','#12ABBF');
         		 }
	             // 鼠标移出时移出hover类 
	       });

	 $('.square_1_2').hover(function() {
	             // 鼠标移入时添加hover类
	             $('.square_1_2').css("background-color","#23785B");
	             $('.price_2').css('color','#fff');
	             $('.desc_2').css('color','#fff');
	         }, function() {
	         	if(isClick==2){
         		 	console.dir(isClick);
         		 		$('.square_1_2').css("background-color","#23785B");
             			$('.price_2').css('color','#fff');
                        $('.desc_2').css('color','#fff');


                         $('.square_1_1').css("background-color","#fff");
             			$('.price_1').css('color','#12ABBF');
                        $('.desc_1').css('color','#12ABBF');

                         $('.square_1_3').css("background-color","#fff");
		             $('.price_3').css('color','#12ABBF');
		             $('.desc_3').css('color','#12ABBF');

		              $('.square_1_4').css("background-color","#fff");
		             $('.price_4').css('color','#12ABBF');
		             $('.desc_4').css('color','#12ABBF');



         		 }else{
         		 	console.dir(isClick);
	         		 $('.square_1_2').css("background-color","#fff");
		             $('.price_2').css('color','#12ABBF');
		             $('.desc_2').css('color','#12ABBF');
         		 }
	             
	            
	         });



	  $('.square_1_3').hover(function() {
	             // 鼠标移入时添加hover类
	             $('.square_1_3').css("background-color","#23785B");
	             $('.price_3').css('color','#fff');
	             $('.desc_3').css('color','#fff');
	         }, function() {
	         	if(isClick==3){
         		 	console.dir(isClick);
         		    $('.square_1_3').css("background-color","#23785B");
             	    $('.price_3').css('color','#fff');
                    $('.desc_3').css('color','#fff');

                     $('.square_1_1').css("background-color","#fff");
             		 $('.price_1').css('color','#12ABBF');
                     $('.desc_1').css('color','#12ABBF');

                     $('.square_1_2').css("background-color","#fff");
		             $('.price_2').css('color','#12ABBF');
		             $('.desc_2').css('color','#12ABBF');

		              $('.square_1_4').css("background-color","#fff");
		             $('.price_4').css('color','#12ABBF');
		             $('.desc_4').css('color','#12ABBF');

         		 }else{
         		 	console.dir(isClick);
	         		 $('.square_1_3').css("background-color","#fff");
		             $('.price_3').css('color','#12ABBF');
		             $('.desc_3').css('color','#12ABBF');
         		 }
	         });


	   $('.square_1_4').hover(function() {
	             // 鼠标移入时添加hover类
	             $('.square_1_4').css("background-color","#23785B");
	             $('.price_4').css('color','#fff');
	             $('.desc_4').css('color','#fff');
	         }, function() {
	         	if(isClick==4){
         		 	console.dir(isClick);
         		    $('.square_1_4').css("background-color","#23785B");
             	    $('.price_4').css('color','#fff');
                    $('.desc_4').css('color','#fff');

                     $('.square_1_1').css("background-color","#fff");
             		 $('.price_1').css('color','#12ABBF');
                     $('.desc_1').css('color','#12ABBF');

                     $('.square_1_2').css("background-color","#fff");
		             $('.price_2').css('color','#12ABBF');
		             $('.desc_2').css('color','#12ABBF');

		              $('.square_1_3').css("background-color","#fff");
		             $('.price_3').css('color','#12ABBF');
		             $('.desc_3').css('color','#12ABBF');

         		 }else{
         		 	console.dir(isClick);
	         		 $('.square_1_4').css("background-color","#fff");
		             $('.price_4').css('color','#12ABBF');
		             $('.desc_4').css('color','#12ABBF');
         		 }
	         });

	});


