$(document).ready(function() {
    $("#productimg").click(function() {
        $("#producttxt").show();
    });
    $("#producttxt").click(function(){
        $("#producttxt").hide();
    });
    
  });
  $(document).ready(function() {
    $("#devimg").click(function() {
        $("#devtxt").show();
    });
    $("#devtxt").click(function(){
        $("#devtxt").hide();
    });
    
  });
  $(document).ready(function() {
    $("#designimg").click(function() {
        $("#designtxt").show();
    });
    $("#designtxt").click(function(){
        $("#designtxt").hide();
    });
    
  });
  $(document).ready(function () {
    $('.Description').mouseover(function () {
         $('.portimg').show();
         $('.porttext').show();
    })

    $('.Description').mouseout(function () {
         $('.portimg').hide();
         $('.porttext').hide();
    })
});
$(document).ready(function () {
  $('.jojo').mouseover(function () {
       $('.fix').show();
       $('.nana').show();
  })

  $('.jojo').mouseout(function () {
       $('.fix').hide();
       $('.nana').hide();
  })
});
    
$(document).ready(function () {
  $('.dada').mouseover(function () {
       $('.d').show();
       $('.ni').show();
  })

  $('.dada').mouseout(function () {
       $('.d').hide();
       $('.ni').hide();
  })
});
    
$(document).ready(function () {
  $('.dudu').mouseover(function () {
       $('.k').show();
       $('.ki').show();
  })

  $('.dudu').mouseout(function () {
       $('.k').hide();
       $('.ki').hide();
  })
});
