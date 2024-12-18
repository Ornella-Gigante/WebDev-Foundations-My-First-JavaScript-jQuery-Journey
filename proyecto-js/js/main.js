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

// Funcion que actualizara los colore del acordeon 


function updateAccordionTheme(color) {
    const themeColors = {
        green: {
            header: '#235E3D',
            headerHover: '#1d4d32',
            headerActive: '#1a442c',
            text: '#ffffff'
        },
        red: {
            header: '#ff0000',
            headerHover: '#e60000',
            headerActive: '#cc0000',
            text: '#ffffff'
        },
        blue: {
            header: '#0000ff',
            headerHover: '#0000e6',
            headerActive: '#0000cc',
            text: '#ffffff'
        }
    };

    const colors = themeColors[color];

    $('.ui-accordion .ui-accordion-header').css({
        'background': colors.header,
        'color': colors.text,
        'border': '1px solid ' + colors.header
    });

    $('.ui-accordion .ui-accordion-header:hover').css({
        'background': colors.headerHover
    });

    $('.ui-accordion .ui-accordion-header.ui-state-active').css({
        'background': colors.headerActive
    });

    $('.ui-accordion .ui-accordion-content').css({
        'border': '1px solid ' + colors.header,
        'border-top': 'none'
    });
}



// Selector de tema 

var theme = $("#theme");

$("#to-green").click(function(){
    theme.attr("href", "css/green.css");
    updateAccordionTheme('green'); // Actualiza el acordeón
    $('body').attr('data-theme', 'green'); // Añadido para el botón Send
});

$("#to-red").click(function(){
    theme.attr("href", "css/red.css");
    updateAccordionTheme('red'); 
    $('body').attr('data-theme', 'red'); 
});

$("#to-blue").click(function(){
    theme.attr("href", "css/blue.css");
    updateAccordionTheme('blue'); 
    $('body').attr('data-theme', 'blue'); 
});

// Detectar el tema patra poder cambiar el boton SEND de contact.html al color que corresponde 

$(document).ready(function(){
    // Detectar tema inicial
    var currentTheme = 'green';
    if($("#theme").attr('href').includes('red')) {
        currentTheme = 'red';
    } else if($("#theme").attr('href').includes('blue')) {
        currentTheme = 'blue';
    }
    $('body').attr('data-theme', currentTheme);
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
    $("#acordeon").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    
    // Detectar y aplicar el tema actual al acordeón
    let currentTheme = 'green'; // tema por defecto
    if(theme.attr('href').includes('red')) {
        currentTheme = 'red';
    } else if(theme.attr('href').includes('blue')) {
        currentTheme = 'blue';
    }
    updateAccordionTheme(currentTheme);
}

// Reloj 
if(window.location.href.indexOf('reloj')> -1){
    // Función para actualizar el reloj
    function updateClock() {
        var now = moment();
        var clockDisplay = now.format("HH:mm:ss");
        $("#reloj").html(clockDisplay);

        // Actualizar el tema del reloj
        var currentTheme = 'green';
        if($("#theme").attr('href').includes('red')) {
            currentTheme = 'red';
        } else if($("#theme").attr('href').includes('blue')) {
            currentTheme = 'blue';
        }
        $('body').attr('data-theme', currentTheme);
    }

    // Actualizar cada segundo
    updateClock(); // Actualización inicial
    setInterval(updateClock, 1000);

    // Modificar los handlers de tema para actualizar también el reloj
    $("#to-green, #to-red, #to-blue").click(function() {
        setTimeout(updateClock, 100); // Pequeño delay para asegurar que el tema se actualizó
    });
}


    //Validacion 
    //Esto se ejecutará en la página de contactos 
    // Se ejecutará si existe contact (condicion) 

    if(window.location.href.indexOf('contact')> -1){

        //Creando calendario para date 

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang:'en'
        })

    }


   // Función para obtener el color según el tema
   function getThemeColor() {
    const themeColors = {
        green: '#235E3D',
        red: '#CA3413',
        blue: '#1F87C4'
    };
    
    let currentTheme = 'green';
    if($("#theme").attr('href').includes('red')) {
        currentTheme = 'red';
    } else if($("#theme").attr('href').includes('blue')) {
        currentTheme = 'blue';
    }
    
    return themeColors[currentTheme];
}

// Configuración de la validación con mensaje de éxito
$.validate({
    lang: 'en',
    onSuccess: function($form) {
        // Obtener el color del tema actual
        const themeColor = getThemeColor();
        
        // Crear el div para el mensaje si no existe
        if($('#successMessage').length === 0) {
            $('<div>', {
                id: 'successMessage',
                class: 'success-message',
                style: `
                    display: none;
                    background-color: ${themeColor};
                    color: white;
                    padding: 20px;
                    border-radius: 5px;
                    margin: 20px auto;
                    text-align: center;
                    font-size: 16px;
                    position: fixed;
                    top: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                    transition: background-color 0.3s ease;
                `
            }).appendTo('body');
        } else {
            // Actualizar el color si el mensaje ya existe
            $('#successMessage').css('background-color', themeColor);
        }

        // Mostrar el mensaje de éxito
        $('#successMessage')
            .html('<i class="fas fa-check-circle"></i> Form submitted successfully!')
            .fadeIn()
            .delay(3000)
            .fadeOut();

        // Limpiar el formulario
        $form[0].reset();

        return false; // Prevenir el envío tradicional del formulario
    }
});

// Actualizar el color del mensaje cuando cambia el tema
$("#to-green, #to-red, #to-blue").click(function() {
    if($('#successMessage').length > 0) {
        setTimeout(() => {
            $('#successMessage').css('background-color', getThemeColor());
        }, 100);
    }
});

})