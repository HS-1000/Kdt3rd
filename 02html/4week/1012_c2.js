// document -> $(document)

// 1. Load Event
$(document).ready(function() {
  console.log('ready - 문서의 dom 트리가 완성되면 실행');
})

$(function() {
  console.log('hi');
});

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded", "문서의 dom 트리가 완성되면 실행");
});
$('.p-msg').click(function() {
  $('.p-msg').css('color', 'red');
});
$('.num').click(function() {
  console.log(1);
  $(this).css('color','red');
});

$('.num').mouseover(function() {
  $(this).css('font-weight', '700');
});

$('.div-hover').hover(
  function() {
    $(this).addClass('hover');
  },
  function() {
    $(this).removeClass('hover');
  }

)
// $(window).scroll(function() {
//   console.log(this);//스크롤이 움직이면
// })

$('.input-key').keydown(function(e) {
  console.log(e.key);
})

$('#todo-form').submit(function(event) {
  event.preventDefault();
  const todo = $('input[name="todo"]').val();
  $('.todos').append(`<li>${todo}</li>`);
  $('input[name="todo"]').val('');
})