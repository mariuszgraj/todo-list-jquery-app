$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("button").click(function(){
	var todo = $("input").val();
	$("input").val("");
	$("ul").append("<li><span><i class='fa fa-times' aria-hidden='true'></i></span> " + todo + "</li>")
});