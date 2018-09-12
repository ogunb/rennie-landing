var scene = document.getElementById('hero'),
  parallax = new Parallax(scene);
(window.mySwipe = Swipe(document.getElementById('slider'))),
  $('.fa-search').click(function() {
    $('.search-input').toggleClass('s-opacity'),
      $('.search').toggleClass('search-active'),
      $('.search-off').toggleClass('search-on');
  }),
  $('.fa-bars').click(function() {
    $('.nav').toggleClass('on');
  }),
  $(window).scroll(function() {
    var t = $(this).scrollTop();
    t >= 100
      ? $('#r-nav').addClass('is-active')
      : $('#r-nav').removeClass('is-active'),
      t >= 100
        ? $('#r-nav-mobile').addClass('is-active')
        : $('#r-nav-mobile').removeClass('is-active'),
      t > $('.firstSection').offset().top - $(window).height() / 1.1 &&
        $('.r-sm-thumb').addClass('is-showing'),
      t > $('.second-section').offset().top - $(window).height() / 0.7 &&
        ($('.second-section').addClass('is-showing'),
        $('.left-us h1').addClass('is-showing'),
        $('.right-us h1').addClass('is-showing')),
      t > $('.subdomains').offset().top - $(window).height() / 0.7 &&
        $('.subdomains').addClass('is-showing'),
      t > $('.multimedia').offset().top - $(window).height() / 0.7 &&
        $('.multimedia').addClass('is-showing'),
      t > $('.sss').offset().top - $(window).height() / 0.4 &&
        $('.sss').addClass('is-showing'),
      t + $(window).height() > $(document).height() - 300 &&
        $('.footer').addClass('is-showing');
  }),
  $('.show-it-b').mouseenter(function() {
    $('.left-us h1').addClass('r-tada'),
      $('.samp-ne').removeClass('is-active'),
      $('.biz-kimiz').addClass('is-active');
  }),
  $('.show-it-b').mouseleave(function() {
    $('.left-us h1').removeClass('r-tada');
  }),
  $('.show-it-s').mouseenter(function() {
    $('.biz-kimiz').removeClass('is-active'),
      $('.samp-ne').addClass('is-active'),
      $('.right-us h1').addClass('r-tada');
  }),
  $('.show-it-s').mouseleave(function() {
    $('.right-us h1').removeClass('r-tada');
  });
var action = 'click',
  speed = '500';
$(document).ready(function() {
  $('li.q').on(action, function() {
    $(this)
      .next()
      .slideToggle(speed)
      .siblings('li.a')
      .slideUp();
    var t = $(this).children('.fa');
    $(t)
      .not(t)
      .removeClass('rotate'),
      t.toggleClass('rotate');
  });
}),
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var t = $(this.hash);
        if (
          ((t = t.length ? t : $('[name=' + this.hash.slice(1) + ']')),
          t.length)
        )
          return (
            $('html, body').animate(
              {
                scrollTop: t.offset().top - '52'
              },
              1e3
            ),
            !1
          );
      }
    });
  });
