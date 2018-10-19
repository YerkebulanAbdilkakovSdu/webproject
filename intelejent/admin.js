var btngroup = 0;

var s2 = ["3Yerkebulan Abdilkakovasdad","13Yerkebulan Abdilkakov Kasdl","23Yerkebulan Abdilkakov Kasdl","33Yerkebulan Abdilkakov Kasdl","43Yerkebulan Abdilkakov Kasdl"]
var sd2 = [6,7,8,9]
var s1 = ["Yerkebulan Abdilkakovasdad","1Yerkebulan Abdilkakov Kasdl","2Yerkebulan Abdilkakov Kasdl","3Yerkebulan Abdilkakov Kasdl","4Yerkebulan Abdilkakov Kasdl"]
var sd1 = [1,2,3,4]
var s,sd;

$( document ).ready(function() {
   	s = s1
	sd = sd1
	for(var f = 0;f<s.length;f++){
		$("#collection").append('<a href="#!" class="collection-item">'+s[f]+'</a>');
	}
});

$(".btngroupofsort").click(function(){

	$( ".btngroupofsort" ).removeClass( "active" )
	$( this ).addClass( "active" );
	btngroup = $(this).index();
	if(btngroup == 0){
		s = s1
		sd = sd1
		$("#btndeleteadd").text("ADD")
	}else{
		s = s2
		sd = sd2
		$("#btndeleteadd").text("delete")
	}
	$("#collection").empty();
	for(var f = 0;f<s.length;f++){
		$("#collection").append('<a href="#!" class="collection-item">'+s[f]+'</a>');
	}
})

$(".collection-item").click(function(){
	var i = $(this).index()
	$('#name').text(s[i])
	$('#number').text(sd[i])
})

$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
}