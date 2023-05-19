$(".gradients").on("click", ".gradient", function(){
  $(".gradients div").removeClass("selected");
  var $this = $(this);
  $this.addClass("selected");
  $("#controls").attr("class", $this.attr("data-class"))
})