$(document).ready(function() {
  $("#reload").hide();
  $(".vacation-form form").submit(function(event) {
    var nameInput = $("input#name").val().charAt(0).toUpperCase() + $("input#name").val().slice(1);;
    var cityInput = $("input#city").val().charAt(0).toUpperCase() + $("input#city").val().slice(1);
    var stateInput = $("input#state").val().toUpperCase();
    var season = $("#season").val();
    var favoriteColor = $("#color").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var interest = $("input[type='checkbox']").val();


    $(".name").text(nameInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);


    event.preventDefault();

    $("form").hide();
    $("#reload").show();

    if (season === "summer" && drink === "margarita") {
      $(".puerto-escondido").show();
    } else if (season === "winter" && drink === "coffeewhiskey" && interest === "hiking") {
      $(".qaqortoq").show();
    } else if (season === "spring" && interest === "sake") {
      $(".kyoto").show();
    } else if (drink === "prosecco" && interest === "reading") {
      $(".rome").show();
    }
  });

  function letterCheck(inputtxt) {
    var letterS = "s";
    if (inputtxt.value.match(letterS)) {
      $(".singapore").show();
    }
  }

  $(".click-rome").click(function() {
    $(".rome-facts").show();
  });

  $(".click-kyoto").click(function() {
    $(".kyoto-facts").show();
  });

  $(".click-qaqortoq").click(function() {
    $(".qaqortoq-facts").show();
  });

  $(".click-puerto-escondido").click(function() {
    $(".puerto-escondido-facts").show();
  });

  $(".click-singapore").click(function() {
    $(".singapore-facts").show();
  });


  $("#reload").click(function(event) {
    $("form").show();
    $("#reload").hide();
    $(".qaqortoq").hide();
    $(".kyoto").hide();
    $(".rome").hide();
    $(".puerto-escondido").hide();
    $(".singapore").hide();
    event.preventDefault();
  });
});
