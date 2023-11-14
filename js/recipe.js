$(document).ready(function() {
  // get the original ingredient amounts
  var originalAmounts = [];
  $('span[class^="amount"]').each(function() {
    originalAmounts.push($(this).html());
  });

  // function to double ingredient amounts
  $('#2').on('click', function() {
    $('span[class^="amount"]').each(function(index) {
      var amount = originalAmounts[index];
      if (amount.indexOf('&frac') !== -1) {
        var whole = parseInt(amount.charAt(0));
        var fraction = amount.substring(2);
        fraction = eval(fraction);
        amount = (whole * 2) + fraction;
        amount = simplify(amount);
      } else {
        amount = parseFloat(amount);
        amount *= 2;
      }
      $(this).html(amount);
    });
  });

  // function to half ingredient amounts
  $('#half').on('click', function() {
    $('span[class^="amount"]').each(function(index) {
      var amount = originalAmounts[index];
      if (amount.indexOf('&frac') !== -1) {
        var whole = parseInt(amount.charAt(0));
        var fraction = amount.substring(2);
        fraction = eval(fraction);
        amount = (whole / 2) + fraction;
        amount = simplify(amount);
      } else {
        amount = parseFloat(amount);
        amount /= 2;
      }
      $(this).html(amount);
    });
  });

  // function to reset ingredient amounts to original
  $('#1').on('click', function() {
    $('span[class^="amount"]').each(function(index) {
      $(this).html(originalAmounts[index]);
    });
  });

  // simplify mixed fractions
  function simplify(fraction) {
    var whole = Math.floor(fraction);
    var fractionString = '';
    var numerator = Math.round((fraction - whole) * 16);
    var denominator = 16;
    if (numerator === 0) {
      return whole.toString();
    } else if (numerator === denominator) {
      return (whole + 1).toString();
    } else if (numerator % 2 === 0 && denominator % 2 === 0) {
      numerator /= 2;
      denominator /= 2;
      fractionString = numerator.toString() + '/' + denominator.toString();
    } else {
      fractionString = numerator.toString() + '/' + denominator.toString();
    }
    if (whole === 0) {
      return fractionString;
    } else {
      return whole.toString() + ' ' + fractionString;
    }
  }
});


$('.jsbuttons button').click(function() {
  $('.jsbuttons button').removeClass('selected');
  $(this).addClass('selected');
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "inline-block";
  dots[slideIndex-1].className += " active";
}

function toggleMobileMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.style.display = (mobileMenu.style.display ==='block') ? 'none' : 'block';
}





// $(document).ready(function() {
//   // Set the first slide as active
//   $('.mySlides:first').addClass('active');

//   // Hide all the slides except the first one
//   $('.mySlides').not('.active').hide();

//   // Handle the next button click
//   $('.next').click(function() {
//       var currentSlide = $('.active');
//       var nextSlide = currentSlide.next('.mySlides');

//       if (nextSlide.length === 0) {
//           nextSlide = $('.mySlides:first');
//       }

//       currentSlide.fadeOut(500).removeClass('active');
//       nextSlide.fadeIn(500).addClass('active');
//   });

//   // Handle the previous button click
//   $('.prev').click(function() {
//       var currentSlide = $('.active');
//       var prevSlide = currentSlide.prev('.mySlides');

//       if (prevSlide.length === 0) {
//           prevSlide = $('.mySlides:last');
//       }

//       currentSlide.fadeOut(500).removeClass('active');
//       prevSlide.fadeIn(500).addClass('active');
//   });

  // Handle the dot click
//   $('.dot').click(function() {
//       var slideNumber = $(this).index() + 1;
//       $('.mySlides').removeClass('active').fadeOut(500);
//       $('.mySlides:nth-of-type(' + slideNumber + ')').addClass('active').fadeIn(500);
//   });
// });


// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }
