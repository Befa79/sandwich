$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
    $('.collapsible').collapsible();
    $(".tooltipped").tooltip();
    $('select').formSelect();
});

function confirm_del(){
  var delete_confirmed = confirm("Delete this sandwich recipe?")
  if (delete_confirmed == true){
      window.location.href = "url_for('delete_recipe', recipe_id=recipe._id)";
  }
}


