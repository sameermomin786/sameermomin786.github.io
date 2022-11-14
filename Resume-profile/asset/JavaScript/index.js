console.log("sam");

$("#menu-bar").on('click', function () {
 $('#menu-bar').toggleClass('fa-times');
 $('#colse').toggleClass('.active');

});
$("#menu-bar").on('click',function(){
  
 $("#open-bar").toggle().css('transform', 'translateX(0%)')

});
