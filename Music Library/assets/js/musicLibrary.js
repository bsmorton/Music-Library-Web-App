// click to play/stop song
$("ul").on("click", "li", function(){
    $(this).toggleClass("playing");
})

// click to delete song
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// add a song to the library
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabs new song name from input
        var newSong = $(this).val();
        // creates new song
        $("ul").append("<li><span>X</span> "+newSong+"</li>");
        // clear text input
        $(this).val("");
    }
})

