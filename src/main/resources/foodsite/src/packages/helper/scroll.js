export function scroll(){

        $(document).ready(function () {

            var doner = $(".services")[0].childNodes[0];
            var FingerFood = $(".services")[0].childNodes[1];
            var schnitzel = $(".services")[0].childNodes[2];
            var pizza = $(".services")[0].childNodes[3];
            var Pasta = $(".services")[0].childNodes[4];
            var salat = $(".services")[0].childNodes[5];
            var auflaufle = $(".services")[0].childNodes[6];
            var Burger = $(".services")[0].childNodes[7];
            var Indisch = $(".services")[0].childNodes[8];
            var Asiatisch = $(".services")[0].childNodes[9];
            var Getranke = $(".services")[0].childNodes[10];
            var vegetarischeFalafel = $(".services")[0].childNodes[11];


            $(doner).click(function() {
              var element = document.querySelector(".Döner");
              element.scrollIntoView({behavior: 'smooth'});
            });

            $(FingerFood).click(function() {
              var element = document.querySelector(".FingerFood");
              element.scrollIntoView({behavior: 'smooth'});
            });
            $(Getranke).click(function() {
              var element = document.querySelector(".Getränke");
              element.scrollIntoView({behavior: 'smooth'});
            });
            
            $(Indisch).click(function() {
              var element = document.querySelector(".Indische");
              element.scrollIntoView({behavior: 'smooth'});
            });
            $(pizza).click(function() {
              var element = document.querySelector(".Pizzas");
              element.scrollIntoView({behavior: 'smooth'});
            });

            $(schnitzel).click(function() {
              var element = document.querySelector(".schnitzel");
              element.scrollIntoView({behavior: 'smooth'});
            });

            $(auflaufle).click(function() {
              var element = document.querySelector(".Aufläufle");
              element.scrollIntoView({behavior: 'smooth'});
            });

            $(Pasta).click(function() {
              var element = document.querySelector(".Pasta");
              element.scrollIntoView({behavior: 'smooth'});
            });

            $(salat).click(function() {
              var element = document.querySelector(".Salate");
              element.scrollIntoView({behavior: 'smooth'});
            });

            $(Burger).click(function() {
              var element = document.querySelector(".Burger");
              element.scrollIntoView({behavior: 'smooth'});
            });
            $(Asiatisch).click(function() {
              var element = document.querySelector(".Asiatisch");
              element.scrollIntoView({behavior: 'smooth'});
            });
            $(vegetarischeFalafel).click(function() {
              var element = document.querySelector(".VegetarischeFalafel");
              element.scrollIntoView({behavior: 'smooth'});
            });


            $(".FingerFood")[0].childNodes[0].childNodes[0].childNodes[1].outerHTML = "<h1 class='centered'> Finger </br> Food </h1>";
            $(".VegetarischeFalafel")[0].childNodes[0].childNodes[0].childNodes[1].outerHTML = "<h1 class='centered'> Vegetarische </br> Falafel </h1>";
            $(".VegetarischeFalafel")[0].childNodes[0].childNodes[0].childNodes[1].style.fontSize = "40px";

            $(document).click(function(e){
              $(".navbar-toggler").attr("aria-expanded", "false");
              $(".navbar-toggler").addClass("collapsed");
              $(".navbar-collapse").removeClass("show");
              e.stopPropagation();
          });
        });
}