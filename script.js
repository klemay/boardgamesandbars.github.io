$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
var nextGameNight = function() {
  var d = new Date();
  var dd = d.getDate();
  var mm = d.getMonth()+1;
  
    
  var sep19 = "September 19";
  var sep26 = "September 26";
  var oct10 = "October 10";
  var oct17 = "October 17";
  var oct31 = "October 31";
  var nov7 = "November 7";
  var nov14 = "November 14";
  var nov28 = "November 28";
  var dec5 = "December 5";
  var dec12 = "December 12";
  
  var softspot = "Soft Spot Bar in Williamsburg";
  var reclamation = "Reclamation Bar in Williamsburg";
  var randolph = "Randolph Beer in Nolita";
  
  if (mm === 9) {
    if (dd <= 19) {
      var nextNight = sep19;
      var nextPlace = softspot;
    } else if (dd <= 26) {
      var nextNight = sep26;
      var nextPlace = softspot;
    } else {
      var nextNight = oct10;
      var nextPlace = softspot;
      
    }
  } else if (mm === 10) {
      if (dd <= 10) {
        var nextNight = oct10;
        var nextPlace = softspot;
      } else if (dd <= 17) {
        var nextNight = oct17;
        var nextPlace = reclamation;
      } else {
        var nextNight = oct31;
        var nextPlace = softspot;
      }
  } else if (mm === 11) {
    if (dd <= 7) {
      var nextNight = nov7;
      var nextPlace = randolph;
    } else if (dd <= 14) {
      var nextNight = nov14;
      var nextPlace = randolph;
    } else if (dd <= 28) {
      var nextNight = nov28;
      var nextPlace = randolph;
    } else {
      var nextNight = dec5;
      var nextPlace = randolph;
    }
  } else if (mm === 12) {
      if (dd <= 5) {
        var nextNight = dec5;
        var nextPlace = randolph;
      } else if (dd <= 12) {
        var nextNight = dec12;
      } else {
        var nextPlace = randolph;
      }
  } else {
    
  }
  
  document.getElementById("date").innerHTML = nextNight + " at " + nextPlace + " (7:30pm)";
  
  

}
nextGameNight();
