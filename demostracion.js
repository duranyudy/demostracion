$("#appli").click(function() {
	price_1 = parseInt($("#price-1").text());
	price_2 = parseInt($("#price-2").text());
	price_3 = parseInt($("#price-3").text());
	price_4 = parseInt($("#price-4").text());
	price_5 = parseInt($("#price-5").text());

	percent = $("input[name='percent']").val();

	if(percent > 0 && percent <= 100){
		
		price_new_1 = (percent * price_1) / 100;

		price_new_2 = (percent * price_2) / 100;

		price_new_3 = (percent * price_3) / 100;

		price_new_4 = (percent * price_4) / 100;

		price_new_5 = (percent * price_5) / 100;

		if($("#aum_min").val() == '0'){

			$("#price-1").text(price_1 + price_new_1);
			$("#price-2").text(price_2 + price_new_2);
			$("#price-3").text(price_3 + price_new_3);
			$("#price-4").text(price_4 + price_new_4);
			$("#price-5").text(price_5 + price_new_5);

		} else if($("#aum_min").val() == '1'){

			$("#price-1").text(price_1 - price_new_1);
			$("#price-2").text(price_2 - price_new_2);
			$("#price-3").text(price_3 - price_new_3);
			$("#price-4").text(price_4 - price_new_4);
			$("#price-5").text(price_5 - price_new_5);

		}

	} else {
		alert("El valor del porcentaje debe estar entre 1 y 100");
	}

	
});