$(".choosehotel").click(function(){
	$(".choosehotel").removeClass('active')
	$(this).addClass("active")
	$("#typeOfhotels").text($(this).text())
})