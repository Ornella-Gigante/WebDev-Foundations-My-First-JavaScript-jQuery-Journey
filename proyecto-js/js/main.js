'use strict'

/**
 * Slider
 * Pagina usada: https://bxslider.com/examples/image-slideshow-captions
 */
$(document).ready(function(){
/**
 * Se comprueba si hay index o no
 * Verifica si la URL actual contiene "index" y, de ser así, 
 * inicializa un slider (galería) con el plugin bxSlider, configurando su modo, captions, y otras opciones.
 */
    
    if(window.location.href.indexOf('index')> -1){

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            responsive: true,
            pager:true
          })
    }
  


//POSTS 
// Los posts se dividen en: titulo-fecha-cuerpo 
// La fecha se define a través de moment: https://cdnjs.com/libraries/moment.js

//SE creará una condición para que esto se ejecute cuando el usuario está en el index unicamente 

if(window.location.href.indexOf('index')> -1){

var posts = [

        {
            title: 'Titulo 1',
            date: 'Published on' + ' ' + moment().format("MMMM ddd YYYY"),
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        
        {
            title: 'Titulo 1',
            date: 'Published on' + ' ' + moment().format("MMMM ddd YYYY"),
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        {
            title: 'Titulo 2',
            date: 'Published on' + ' ' + moment().format("MMMM ddd YYYY"),
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        {
            title: 'Titulo 3',
            date: 'Published on' + ' ' + moment().format("MMMM ddd YYYY"),
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        {
            title: 'Titulo 4',
            date: 'Published on' + ' ' + moment().format("MMMM ddd YYYY"),
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },
        {
            title: 'Titulo 5',
            date: 'Published on' + ' ' + moment().format("MMMM ddd YYYY"),
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },

        {
            title: 'Titulo 6',
            date: 'Published on' + ' ' + moment().format("MMMM ddd YYYY"),
            content: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            `
        },

            
];


    // Se recorrerá cada artículo 

    posts.forEach((item,index) => {

        var post = `
        
        
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p >${item.content}</p>
            <a href="#" class="button-more">Read more</a>
            </article> 
        
        
        `
        
        $("#posts").append(post);
        

    });


}


// Selector de tema 

var theme = $("#theme");

$("#to-green").click(function(){

    theme.attr("href", "css/green.css");

});

$("#to-red").click(function(){

    theme.attr("href", "css/red.css");

});

$("#to-blue").click(function(){

    theme.attr("href", "css/blue.css");

});

// Scroll arriba de la web 


$('.subir').click(function(e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

//login falso 

$("#login form").submit(function(e){
    e.preventDefault();  // <- Agregado
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
    location.reload();  // <- Agregado
});

var form_name = localStorage.getItem("form_name");

if(form_name != null && form_name != "undefined"){


    //Se crea mensaje de bienvenida automático al guardar el nombre 

    var about_parrafo = $("#about p");

    about_parrafo.html(`
        <div class="welcome-message">
            <div class="welcome-text">
                ¡Welcome, ${form_name}!
            </div>
            <div class="logout-container">
                <a href='#' id='logout' class="logout-btn">
                    <i class="fas fa-sign-out-alt"></i>
                    End Session
                </a>
            </div>
        </div>
    `);
    // SE oculta la caja de login 

    $("#login").hide();


    // Si se le da click a END SESSION se hará un localStorage clear y se borrarán los datos de sesion 
    // Mostrará de nuevo el log in 

    $("#logout").click(function(e){  //
        e.preventDefault();          // 
        localStorage.clear();
        location.reload();
    });


};


//Condicion para el acordeon 

if(window.location.href.indexOf('about')> -1){

    $("#acordeon").accordion();

}


});





