$(function(){
	var flg = 1;

		setInterval(function(){
			if(flg == 1){
				$("#img1").fadeOut(3000);
				$("#img2").fadeIn(3000);
				flg = 2;

			}
			else if(flg == 2){
				$("#img2").fadeOut(3000);
				$("#img3").fadeIn(3000);
				flg = 3;
			}
			else if(flg == 3){
				$("#img3").fadeOut(3000);
				$("#img4").fadeIn(3000);
				flg = 4;
			}
			else if(flg == 4){
				$("#img4").fadeOut(3000);
				$("#img5").fadeIn(3000);
				flg = 5;
			}
			else if(flg == 5){
				$("#img5").fadeOut(3000);
				$("#img6").fadeIn(3000);
				flg = 6;
			}
			else if(flg == 6){	
				$("#img6").fadeOut(3000);
				$("#img7").fadeIn(3000);
				flg = 7;
			}
			else if(flg == 7){	
				$("#img7").fadeOut(3000);
				$("#img8").fadeIn(3000);
				flg = 8;
			}
			else if(flg == 8){	
				$("#img8").fadeOut(3000);
				$("#img9").fadeIn(3000);
				flg = 9;
			}
			else if(flg == 9){	
				$("#img9").fadeOut(3000);
				$("#img10").fadeIn(3000);
				flg = 10;
			}
			else if(flg == 10){	
				$("#img10").fadeOut(3000);
				$("#img11").fadeIn(3000);
				flg = 11;
			}
			else if(flg == 11){
				$("#img11").fadeOut(3000);
				$("#img12").fadeIn(3000);
				flg = 12;

			}
			else if(flg == 12){
				$("#img12").fadeOut(3000);
				$("#img13").fadeIn(3000);
				flg = 13;
			}
			else if(flg == 13){
				$("#img13").fadeOut(3000);
				$("#img14").fadeIn(3000);
				flg = 14;
			}
			else if(flg == 14){
				$("#img14").fadeOut(3000);
				$("#img15").fadeIn(3000);
				flg = 15;
			}
			else if(flg == 15){
				$("#img15").fadeOut(3000);
				$("#img16").fadeIn(3000);
				flg = 16;
			}
			else if(flg == 16){	
				$("#img16").fadeOut(3000);
				$("#img17").fadeIn(3000);
				flg = 17;
			}
			else if(flg == 17){	
				$("#img17").fadeOut(3000);
				$("#img18").fadeIn(3000);
				flg = 18;
			}
			else if(flg == 18){	
				$("#img18").fadeOut(3000);
				$("#img19").fadeIn(3000);
				flg = 19;
			}
			else if(flg == 19){	
				$("#img19").fadeOut(3000);
				$("#img20").fadeIn(3000);
				flg = 20;
			}
			else if(flg == 20){	
				$("#img20").fadeOut(3000);
				$("#img21").fadeIn(3000);
				flg = 21;
			}
			else if(flg == 21){	
				$("#img21").fadeOut(3000);
				$("#img1").fadeIn(3000);
				flg = 1;
			}





		}, 3000);

});