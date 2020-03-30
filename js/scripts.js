$(document).ready(function() {
  $("#things").submit(function(event) {
    event.preventDefault();
    var hobby = $("input:radio[name=hobby]:checked").val();
    var animal = $("#animal").val();
    var beverage =$("#beverage").val();
    var thingsArray = [hobby, animal, beverage];

    var newArray = [];
    var i;
    var j;
    for (i=0; i < thingsArray.length; i++){
      newArray.push(thingsArray[i]);
      for (j = 0; j < newArray.length; j++){
        $("#output").text(newArray[j]);
      }
    }
  });
});