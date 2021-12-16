//jQuery()
//$("h1").css("color", "red");
// $("h1").addClass("big-title margin-50");
// $("h1").removeClass("big-title margin-50");
// $("h1").text("YO");
// $("button").html("<em>Hey</em>");

// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");

// $("h1").attr("class");

// $("h1").click(function() {
//     $("h1").css("color", "purple");
// });


//jQuery
// $("button").click(function() {
//     $("h1").css("color", "purple");
// })

//vanilla javascript
// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelectorAll("h1").style.color = "purple";
//     });
// }


// $("input").keypress(function(event) {
//     console.log(event.key);
// });

// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// });


// $("h1").before("<button>New</button");
// $("h1").after("<button>New</button");

// $("h1").prepend("<button>New</button");
// $("h1").append("<button>New</button");

$("button").on("click", function() {
   $("h1").slideToggle().animate({opacity: 0.5});
});

// $("h1").hide();
// $("h1").show();
// $("h1").toggle();
// $("h1").fadeOut();
// $("h1").fadeToggle();
// $("h1").slideUp();
// $("h1").slideDown();
// $("h1").slideToggle();
// $("h1").animate({opacity: 0.5});
// $("h1").slideUp().SlideDown().animate({opacity: 0.5});