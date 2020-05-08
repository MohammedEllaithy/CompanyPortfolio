$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });

  /**/
  navbar-nav
  $(document).ready(function(){
    $(".navbar-nav").css({
        display : "none"
    });
    $(".fa-bars").click(function(){
        $(".navbar-nav").toggle(300);
    });
    $(".navbar-nav li").click(function(){
        $(".navbar-nav").slideUp();
    });
});
