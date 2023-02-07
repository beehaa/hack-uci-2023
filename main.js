
//   document.getElementById('get-started-button').addEventListener('click', function() {
//     $('#main-app').show();
//     $('#get-started-button').hide();
//   });

$('.ui.accordion').accordion();

function moveSteps() {
    let steps = $('.ui.steps .step');
    let currentStep = 0;
    let totalSteps = steps.length - 1;
  
    steps.eq(currentStep).addClass('active');
    $(`#step${currentStep}Box`).show();
  
    $('#next-button').click(function() {
      if (currentStep < totalSteps) {
        steps.eq(currentStep).removeClass('active');
        steps.eq(currentStep).addClass('completed');
        $(`#step${currentStep}Box`).hide();
        currentStep++;
        steps.eq(currentStep).addClass('active');
        steps.eq(currentStep).removeClass('disabled');
        $(`#step${currentStep}Box`).show();
      } 
      if (currentStep == totalSteps){
        steps.eq(currentStep).addClass('completed');
        $(`#step${currentStep}Box`).show();
      }
    });
  
    $('#back-button').click(function() {
      if (currentStep > 0) {
        steps.eq(currentStep).removeClass('active');
        $(`#step${currentStep}Box`).hide();
        currentStep--;
        steps.eq(currentStep).addClass('active');
        $(`#step${currentStep}Box`).show();
      }
    });
  }
  
  moveSteps();

  document.getElementById('reset-button').addEventListener('click', function() {
    location.reload();
  });

  $(".yes-button").click(function() {
    var buttonId = $(this).attr("id").split("-")[2];
    $("#yes-button-" + buttonId).addClass('active');
    $("#no-button-" + buttonId).removeClass('active');
    $("#yes-content-" + buttonId).show();
    $("#no-content-" + buttonId).hide();
  });
  
  $(".no-button").click(function() {
    var buttonId = $(this).attr("id").split("-")[2];
    $("#yes-button-" + buttonId).removeClass('active');
    $("#no-button-" + buttonId).addClass('active');
    $("#no-content-" + buttonId).show();
    $("#yes-content-" + buttonId).hide();
  });
  
  $('.income').on('change', function() {
    $('#necessities_amount').html("$"+Math.round(this.value/2));
    $('#wants_amount').html("$"+Math.round(this.value/3));
    $('#savings_amount').html("$"+Math.round(this.value/5));
  });

// age groups
$(document).ready(function() {
  $("#age_menu a").click(function() {
    $("#age_groups_content .content").hide();
    var index = $(this).index();
    // alert(index);
    $("#age_groups_content .ui.segment.content").eq(index).show();
  });
});


let ageMenu = document.querySelector("#age_menu");

ageMenu.addEventListener("click", function(event) {
  let clickedButton = event.target;

  if (clickedButton.tagName === "A") {
    let currentActiveButton = ageMenu.querySelector(".active");

    if (currentActiveButton) {
      currentActiveButton.classList.remove("active");
    }

    clickedButton.classList.add("active");
  }
});
// $(document).ready(function(){
//   $("#age_menu .item").click(function(){
//     // $("#age_groups_content .content").hide();
//     var index = $("#age_menu .item").index(this);
//     $("#age_groups_content .content").eq(index).show();
//   });
// });