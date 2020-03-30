$(document).ready(function() {
  $("#things").submit(function(event){
    event.preventDefault();
    var hobby = $("input:radio[name=hobby]:checked").val();
  });
});