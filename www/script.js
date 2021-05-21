//👉 Au clic sur le bouton “Fade Header”, mettez en place un effet en jQuery afin de faire clignoter ce titre 3 fois avant de se réafficher.

$('#button_header').click(function(){
    $(this).fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn()
})

// 👉 Au clic sur le bouton “Color Stack / off”, mettez en place un effet en jQuery afin de passer les éléments de class stack_container en vert.
// =>
// 👉 Le texte du bouton doit être modifié: “Color Stack / off”.

$('#color').click(function(){
    $('.stack_container').toggleClass("stack_container2");
    if ($('#color').text() == "Color Stack / OFF"){
        $('#color').text("Color Stack / ON");
    }else{
        $('#color').text("Color Stack / OFF");
    }
})

//👉 Au clic sur le bouton + de chaque élément, mettez en place un effet “scale” qui va faire grossir l’élément parent avant de le faire revenir à son état initial.
$('.bigger').click(function(){
    $(this).parent().effect("scale", {percent: 160}, 1000, function(){
        $(this).removeAttr("style") // effet trop rapide, trouver autre chose
    });
});