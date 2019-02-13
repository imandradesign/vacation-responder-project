$(document).ready(function() {
  $(".vacation-form form").submit(function(event) {
    var nameInput = $("input#name").val().charAt(0).toUpperCase() + $("input#name").val().slice(1);;
    var streetAddressInput = $("input#street-address").val();
    var cityInput = $("input#city").val().charAt(0).toUpperCase() + $("input#city").val().slice(1);
    var stateInput = $("input#state").val().toUpperCase();
    var zipCodeInput = $("input#zip-code").val();
    var season = $("#season").val();
    var favoriteColor = $("#color").val();
    var drink = $("input:radio[name=drink]:checked").val();
    var consentInput = $("input#consent").val();


    $(".name").text(nameInput);

    if (true) {
      $(".rome").show();
    };

    if (true) {
      $(".hawaii").show();
    };

    if (true) {
      $(".greenland").show();
    };

    event.preventDefault();
    });

    $(".click-rome").click(function() {
      $(".rome-facts").show();
    });

    $(".click-hawaii").click(function() {
      $(".hawaii-facts").show();
    });

    $(".click-greenland").click(function() {
      $(".greenland-facts").show();
  });
});
