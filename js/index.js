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
$(document).ready(function () {
    $('.coco').mouseover(function () {
         $('.co').show();
         $('.ci').show();
    })
  
    $('.coco').mouseout(function () {
         $('.co').hide();
         $('.ci').hide();
    })
  });
  $(document).ready(function () {
    $('.vava').mouseover(function () {
         $('.va').show();
         $('.v').show();
    })
  
    $('.vava').mouseout(function () {
         $('.va').hide();
         $('.v').hide();
    })
  });
  
  $(document).ready(function () {
    $('.lala').mouseover(function () {
         $('.la').show();
         $('.l').show();
    })
  
    $('.lala').mouseout(function () {
         $('.la').hide();
         $('.l').hide();
    })
  });
  $(document).ready(function(){
    $("form").submit(function (event) {
  var inputName = $("#name").val();
  var inputEmail = $("#email").val();
  var x = $("mess").val();
  if (inputName == "" || inputEmail == "" || x == "") {
    alert("invalid input");
  }
  else {
    alert('Hi  ' +  inputName + ' Thank you for reaching out to us.');
  }
  event.preventDefault();
  });
  });
