const changeImg = function(imgSrc) {
  $('#main').empty();
  let imgTag = document.createElement('img');
  imgTag.src = imgSrc;
  $('#main').append(imgTag);
}
$('#f1').click(function() {
  changeImg('./img/apple.jpg');
})
$('#f2').click(function() {
  changeImg('./img/bananas.jpg');
})
$('#f3').click(function() {
  changeImg('./img/grapes.jpg');
})
$('#f4').click(function() {
  changeImg('./img/peaches.jpg');
})
$('#colorBox').click(function() {

  let red = Math.floor(256*Math.random());
  let green = Math.floor(256*Math.random());
  let blue = Math.floor(256*Math.random());
  $(this).css('background-color', `rgb(${red},${green},${blue})`);
})