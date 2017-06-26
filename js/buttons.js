 // contact form js
 $(document).ready(function(){
        $(".openContactForm").hide();
        $(".openform").click(function(e) {
            $(".openContactForm").show();
            // $("#btn").hide();
        });
    });

  $(document).ready(function(){
         $(".closeform").click(function(e) {
            $(".openContactForm").hide();
            // $("#btn").hide();
        });
    });

  $(document).ready(function(){
         $(".send").click(function(e) {
            $(".openContactForm").hide();
            // $("#btn").hide();
        });
    });


// navbar js
  $(document).ready(function(){
        $("#searchFormWrapper").hide();
        $("#search").click(function()
        {
        $("#searchFormWrapper").slideToggle(0);
        $("#basketContentWrapper").hide();
        });
    });

$(document).ready(function(){
        $("#basketContentWrapper").hide();
        $("#basket").click(function()
        {
        $("#basketContentWrapper").slideToggle(0);
        $("#searchFormWrapper").hide();
        });
    });
