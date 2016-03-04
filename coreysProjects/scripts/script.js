$('#projectList').hide();
$('#projects').hide();
$('#about').hide();
$('#arrow').hide();
$('#resumeSheet').hide();

$('main').hover(function() {
  $('#projects').addClass('flipInX animated');
  $('#projects').show();
  $('main').unbind();
});

$('#aboutButton').on('click', function(event) {
  $('#projectList').hide();
  $('#projects').hide();
  $('#results').hide();
  $('#resumeSheet').hide();
  $('#about').addClass('fadeInUpBig animated');
  $('#about').show();
});
$('#projects').on('click', function(event) {
  $('#projects').addClass('flipOutX');
  setTimeout(function() {
    $('#projects').hide();
    $('#projectList').addClass('fadeInDown animated');
    $('#projectList').show();
  }, 500);
});

$('#projects').hover(function() {
  $(this).removeClass('flipInX');
  $(this).toggleClass('pulse');
});

function size() {
  var height = $(window).height();
  $('main').css('height', height);
  $('#results').css('height', height-100);
  $('#resumeSheet').css('height', height-100);
  $('#about').css('height', height-100);
}
size();

$(window).resize(function() {
  size();
});

$('#arrow').on('click', function(event) {
  $('.eachArticle').addClass('slideOutDown animated');
  setTimeout(function() {
    $('#results').empty();
    $('#projectList').removeClass('fadeOutUp');
    $('#projectList').addClass('fadeInDown');
    $('#projectList').show();
    $('#arrow').hide();
    $('#about').hide();
    $('#resumeSheet').hide();
  }, 500);
});

$('#home').on('click', function(event) {
  window.open('./index.html', '_self');
});

$('.lists li').hover(function() {
  $(this).toggleClass('tada animated');
});

$('#arrow').hover(function() {
  $(this).toggleClass('rubberBand animated');
});

$('#projectList li').on('click', function(event) {
  var id = $(this).attr('id');
  $('#results').empty();
  $("#results").show();
  $('#projectList').addClass('fadeOutUp');
  setTimeout(function(){
    $('#projectList').hide();
    $('#arrow').show();
    articles.forEach(function(each) {
      if (each.id === id) {
        var template = $('#articleTemplate').html();
        var compileTemplate = Handlebars.compile(template);
        var html = compileTemplate(each);
        $('#results').append(html);
      }
    });
    swiperJS();
    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 0,
    });
    galleryTop.params.control = galleryThumbs;
  }, 750);
});

$('.icons').hover(function() {
  $(this).toggleClass('shake animated');
});

$('.icons').on('click', function(event) {
  var pickedId = $(this).attr('id');
  if (pickedId === 'github') {
    window.open('https://github.com/BeroMaze', '_blank');
  }
  else if (pickedId === 'linkedIn') {
    window.open('https://www.linkedin.com/in/coreyberning', '_blank');
  }
  else if (pickedId === 'resume') {
    $('#resumeSheet').show();
    $('#about').hide();
  }
});
