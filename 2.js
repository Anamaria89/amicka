
//onload
$(function(){
	
	//resetujemo polje kada se udje u njega, ako je bilo oznaceno kao pogresno
	$('.form-control').focus(function(){
		$(this).removeClass('greska');
	});
	
	
	$('#telefon').keydown(function(event){
		
		console.log(event.key);
		if( isNaN(parseInt(event.key)) ){
			//nije broj. proveri da li je mozda backspace?
			if( event.key!='Backspace' ){
				//nije ni backspace, ignorisi
				return false;
			}
		}
		
		//ako i jeste cifra, svakako treba da se proveri da li je dostignut maksimum za unos
		if( $('#telefon').val().length == 12 ){
			//dostignut maksimum, ignorisi ovo novo
			if( event.key!='Backspace' ){
				//nije ni backspace, ignorisi
				return false;
			} 
			
		}
	});
	
	$('#telefon').keyup(function(event){
		
		if( event.key!='Backspace' ){
		
			if( $('#telefon').val().length==3 ){
				tel = $('#telefon').val() + '/';
				$('#telefon').val(tel);
			}
			
			if( $('#telefon').val().length==7 ){
				tel = $('#telefon').val() + '-';
				$('#telefon').val(tel);
			}
		}
	});
	
	
	$('#prijava').submit(function(){
		//ovde ide provera da li je u formi sve uneseno kako treba
		var dobro = true;
		
		if( $('#ime_prezime').val().length<5 ){
			dobro = false;
			$('#ime_prezime').addClass('greska');
			$(".greskaIme").css("display","block");
			
		}
		
		re_tel = /^[\d]{3}\/[\d]{3}\-[\d]{3,4}$/
			//   ^  ovo znaci pocetak
			//   $  ovo znaci kraj
		if( !$('#telefon').val().match(re_tel) ){   // ako ovo NE valja, zato !, jer me interesuje kad nije dobro
			dobro = false;
			$('#telefon').addClass('greska');
			$(".greskaTel").css("display","block");
		}
		
		//re_email = /^[\a]+.?[\a]+.?[\a]+@[\a]+\.[\a]{2,4}$/
		
		var re_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
		if( !$('#email').val().match(re_email) ){
			dobro = false;
			$('#email').addClass('greska');
			$(".greskaEmail").css("display","block");
		}
		
		if( $('#poruka').val().length<5 ){
			dobro = false;
			$('#poruka').addClass('greska');
			$(".greskaPoruka").css("display","block");
		}
		
		return dobro;
	});
	
	
});