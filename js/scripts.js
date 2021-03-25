$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const side1 = $("#dim1").val();
    const side2 = $("#dim2").val();
    const side3 = $("#dim3").val();
    let result;
      if (side1 === side2 && side2 === side3 && side1 === side3) {
        result = "equilateral";
      } else if (side1 === side2 || side1 === side3) {
        result = "isosceles";
      } else if (side1 !== side2 || side2 !== side3) {
        result = "scalene";
      } else {
        alert("That is not a triangle... SORRY! enter a number...");
      }
    $("#result").text(result);
    $("#theDIMS").show();     
  });
});