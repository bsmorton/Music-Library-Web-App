// click to play/stop song
$("li").on("click", function(){
    $(this).toggleClass("playing");
})

// click to delete song
$("span").on("click", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
})