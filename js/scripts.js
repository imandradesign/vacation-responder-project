$(document).ready(function() {
  $("#reload").hide();

  $(".vacation-form form").submit(function(event) {
    var nameInput = $("input#name").val().charAt(0).toUpperCase() + $("input#name").val().slice(1);;
    var cityInput = $("input#city").val().charAt(0).toUpperCase() + $("input#city").val().slice(1);
    var stateInput = $("input#state").val().toUpperCase();
    var season = parseInt($("#season").val());
    var favoriteColor = $("#color").val();
    var drink = parseInt($("input:radio[name=drink]:checked").val());
    var hairColor = parseInt($("input:radio[name=hair]:checked").val());
    var allEntries = [nameInput, cityInput, stateInput, season, drink, hairColor];

    $(".name").text(nameInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);

    if (season + drink + hairColor >= 12){
      $(".puerto-escondido").show();
    } else if (season + drink + hairColor >= 9){
      $(".rome").show();
    } else if (season + drink + hairColor >= 6){
      $(".kyoto").show();
    } else if (season + drink + hairColor >= 3){
      $(".qaqortoq").show();
    }

    event.preventDefault();

    $("form").hide();
    $("#reload").show();


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
