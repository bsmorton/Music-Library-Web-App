// plays a song in the library
$("ul").on("click","#play", function(){
    $("li").removeClass("playing");
    $("#stop").replaceWith("<span id=\"play\"><i class=\"far fa-play-circle\"></i></span>");
    $(this).replaceWith("<span id=\"stop\"><i class=\"far fa-stop-circle\"></i></span>");
})

// stops a song in the library 
$("ul").on("click","#stop", function(){
    $(this).replaceWith("<span id=\"play\"><i class=\"far fa-play-circle\"></i></span>");

})

// deletes song in the library
$("ul").on("click", "#trash",function(event){
    $(this).parent().fadeOut(250, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

// add a song to the library
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var newSong = $(this).val();
        var htmlStr = "<li><span id=\"trash\"><i class=\"far fa-trash-alt\"></i></span><span id=\"play\"><i class=\"far fa-play-circle\"></i></span> "+newSong+"</li>"
        $("ul").append(htmlStr);
        $(this).val("");
    }
})

// hides/shows song input
$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle(250);
})

