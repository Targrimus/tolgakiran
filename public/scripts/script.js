//this is a script

$( document ).ready(function(){
 
    // Sets up click behavior on all button elements with the alert class
    // that exist in the DOM when the instruction was executed
    $(".nav-link").removeClass("active").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
 
});