

// tabs filter code
       const tabs = document.querySelectorAll('.tab_btn_icon');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

$(document).ready(function(){
   $(".warranty-content").show();
   $(".Build-to-Order-content").hide();
  $(".Condition-Grading").hide();
  $(".warranty").click(function(){
    $(".warranty-content").show();
     $(".Build-to-Order-content").hide();
    $(".Condition-Grading").hide();
  });
    $(".Build").click(function(){
    $(".warranty-content").hide();
     $(".Build-to-Order-content").show();
      $(".Condition-Grading").hide();
  });
      $(".Condition").click(function(){
    $(".warranty-content").hide();
     $(".Build-to-Order-content").hide();
      $(".Condition-Grading").show();
  });
});





// setInterval(function(){
//   $('.related-grid-slider').slick({
//    arrows: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 6,
//   slidesToScroll: 1,
//     autoplay: false,
//   autoplaySpeed: 3000,
//       cssEase: 'linear',
//   responsive: [
//      {
//       breakpoint: 1440,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         infinite: true,
//         arrows: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: true,
//         arrows: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//          arrows: true,
//         autoplay: true,
//   autoplaySpeed: 2000,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         arrows: true,
//         dots:false,
//         autoplay: true,
//   autoplaySpeed: 2000
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
// }, 1000);

// featured collection slider code
  $('.review-slider').slick({
   arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay: false,
  autoplaySpeed: 3000,
      cssEase: 'linear',
  responsive: [
     {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
         arrows: true,
        autoplay: true,
  autoplaySpeed: 2000,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        autoplay: true,
  autoplaySpeed: 2000
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// popup trigger

$(document).ready(function(){
   $(".Means-Pop-up").hide();
  $(".custom_product_main .view-all").click(function(){
    $(".Means-Pop-up").show();
  });

    $(".means_popup_trigger").click(function(){
    $(".Means-Pop-up").hide();
  });
   
});

// request a qoute button script
setInterval(function(){
  $(document).ready(function() {
      // Extract the number from the link's innertext
      var number = $('.grfq-quote-widget-label a ').text();
      // Display the number in #qoute-count
      $("#qoute-count").text(number);
  });
}, 1000);




  document.addEventListener('DOMContentLoaded', function() {
    const partNumberInput = document.querySelector('.bottom-model');
    const nameInput = document.querySelector('.bottom-name');
    const checkRackBtn = document.querySelector('.check-rack-btn');

    function toggleButtonState() {
      if (partNumberInput.value.trim() !== '' && nameInput.value.trim() !== '') {
        checkRackBtn.classList.remove('disabled');
      } else {
        checkRackBtn.classList.add('disabled');
      }
    }

    partNumberInput.addEventListener('input', toggleButtonState);
    nameInput.addEventListener('input', toggleButtonState);
  });

// Ensure the DOM is fully loaded before adding event listener
document.addEventListener("DOMContentLoaded", function() {
  const checkRackBtn = document.querySelector('.check-rack-btn');

  if (checkRackBtn) {
    console.log(".check-rack-btn found, adding click event listener");

    // Add a click event listener to the button with class .check-rack-btn
    checkRackBtn.addEventListener('click', checkUrlAndRedirect);
  } else {
    console.log(".check-rack-btn not found");
  }

  // Additionally, check URL parameters on page load
  checkUrlAndRedirect();
});



    // Function to save values to local storage
    function saveToLocalStorage() {
        var bottomName = document.querySelector('.bottom-name').value;
        var bottomModel = document.querySelector('.bottom-model').value;
        
        localStorage.setItem('bottomName', bottomName);
        localStorage.setItem('bottomModel', bottomModel);
    }

    // Save values on input change
    document.querySelector('.bottom-name').addEventListener('input', saveToLocalStorage);
    document.querySelector('.bottom-model').addEventListener('input', saveToLocalStorage);


    // Function to set values from local storage to other input fields
    function setFromLocalStorage() {
        var bottomName = localStorage.getItem('bottomName');
        var bottomModel = localStorage.getItem('bottomModel');
        
        if (bottomName) {
            document.querySelector('input.rack-name-field').value = bottomName;
        }
        
        if (bottomModel) {
            document.querySelector('input[name="contact[Part/Model Number*]"]').value = bottomModel;
        }
    }

    // Set values on page load
    window.addEventListener('load', setFromLocalStorage);
