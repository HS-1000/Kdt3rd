function submitjs() {
  document.querySelector('.div1').innerHTML = "방가방가";
  document.querySelector('.div1').setAttribute('style', 'border: 2px solid red');
}
function submitjquery() {
  $('.div1').text('hi');
  $('.div1').css('border', '3px dotted blue');
}
function getValue() {
  let inputValue = $('#input1').val();
  console.log(inputValue);
}
function setValue() {
  $('#input1').val('value설정');
}
const changeCssJs = function() {
  let span = document.querySelector('.span1');
  span.style = 'font-size: 20px; color: red;'
}
const changeCssJQuery = function() {
  // $('.span1').css('font-size', '40px');
  // $('.span1').css('color', 'blue');
  $('.span1').css({
    'font-size': '40px',
    'color': 'blue'
  });
}
const getCssJQuery = function() {
  console.log($('.span1').css('color'));
}
const changeAttrJs = function() {
  document.querySelector('#link1').setAttribute('href', 'https://www.naver.com');
}
const changeAttrJQuery = function() {
  $('#link1').attr('href', 'https://www.daum.net');
}
const changeTextJs = function() {
  document.getElementsByClassName('text1')[0].textContent = 'js';
}
const changeTextJQ = function() {
  $('.text1').text('jq');
}
const changeHTMLJs = function() {
  document.getElementsByClassName('text2')[0].innerHTML = '<h3>js</h3>';
}
const changeHTMLJQ = function() {
  $('.text2').html('<h3>jq</h3>');
}
const appendJs = function() {
  let ul = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = 'pink';
  li.classList.add('pink');
  ul.append(li);
}
const appendJQ = function() {
  $('.colors').append('<li>pink</li>');
}
const prependJs = function() {
  let ul = document.querySelector('.colors');
  let li = document.createElement('li');
  li.innerText = 'pink';
  li.classList.add('pink');
  ul.prepend(li);
}
const prependJQ = function() {
  $('.colors').prepend('<li>pink</li>');
}
const beforeJs = function() {
  let ul = document.querySelector('.colors');
  let li = document.createElement('p');
  li.innerText = 'pink';
  li.classList.add('pink');
  ul.before(li);
}
const beforeJQ = function() {
  $('.colors').before('pink');
}
const afterJs = function() {
  let ul = document.querySelector('.colors');
  let li = document.createElement('p');
  li.innerText = 'pink';
  li.classList.add('pink');
  ul.after(li);
}
const afterJQ = function() {
  $('.colors').after('pink');
}
const removeJs = function() {
  document.getElementById('li2').remove();
}
const removeJQ = function() {
  $("#li2").remove();
}
const emptyJs = function() {
  document.querySelector('ul.nums').innerHTML = '';
  // js에는 empty 없다
}
const emptyJQ = function() {
  $("ul.nums").empty();
}

function findParent() {
  console.log($('.child2').parent());
}

function findParents() {
  console.log($('.child2').parents());
}

function findNext() {
  console.log($('.child2').next());
}

function findPrev() {
  console.log($('.child2').prev());
}

function findChildren() {
  console.log($('.parent').children());
}

const addClass = function() {
  $('#hi').addClass('fs-50');
}
const removeClass = function() {
  $('#hi').removeClass('fs-50');
}
const hasClass = function() {
  console.log($('#hi').hasClass('fs-50'));
}
const toggleClass = function() {
  $('#hi').toggleClass('fs-50');
}