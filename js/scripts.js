$(document).ready(function() {
  $("#reload").hide();
  $(".vacation-form form").submit(function(event) {
    var nameInput = $("input#name").val().charAt(0).toUpperCase() + $("input#name").val().slice(1);;
    var cityInput = $("input#city").val().charAt(0).toUpperCase() + $("input#city").val().slice(1);
    var stateInput = $("input#state").val().toUpperCase();
    var season = $("#season").val();
    var favoriteColor = $("#color").val();
    var drink = $("input:radio[name=drink]:checked").val();


    $(".name").text(nameInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);


    event.preventDefault();

    $("form").hide();
    $("#reload").show();

    if (drink === 'mojito') {
      $(".hawaii").show();
    }

    if (drink === "prosecco") {
      $(".rome").show();
    }

    if (drink === "coffeewhiskey") {
      $(".qaqortoq").show();
    }
  });

  $(".click-rome").click(function() {
    $(".rome-facts").show();
  });

  $(".click-hawaii").click(function() {
    $(".hawaii-facts").show();
  });

  $(".click-qaqortoq").click(function() {
    $(".qaqortoq-facts").show();
  });

  $("#reload").click(function(event) {
    $("form").show();
    $("#reload").hide();
    $(".qaqortoq").hide();
    $(".hawaii").hide();
    $(".rome").hide();
    event.preventDefault();
  });
});
