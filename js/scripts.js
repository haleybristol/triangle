var triangle = function(a, b, c) {

  if (a === b && b === c) {
    return ("equilateral");
  };

  if ((a === b && b !== c) || (a !== b && b === c) || (c === a && a !==b)){
    return("isosceles");
  };

  if ((a + b <= c) || (c + b <= a) || (c + a <= b)){
    return("not a triangle");
  } else if ((a !== b) && (b !== c) && (c !== a)){
      return("scalene");

  };

};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    var type = triangle(sideA, sideB, sideC);
    if (type === 'equilateral') {
      $(".length").text("If side A =      " + parseInt(sideA) + ", side B = " + sideB + ", and side C = " + sideC + ".");
      $(".type").text(" an equilateral ");
    }
    $("#result").removeClass("hidden");
    $("#result").addClass("show");
    event.preventDefault();
  });
});
