(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  // Initialize collapse button
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  



 $(document).ready(function() {
    $('input#input_text, textarea#textarea1').characterCounter();
  });

   $(document).ready(function(){
    $('ul.tabs').tabs();
  });
     


   $(document).ready(function() {
  $('ul.tabs').tabs();
  $("#SFTbtnContinue1").click(function() {
    $('ul.tabs').tabs('select_tab', 'test2');
  });
   $("#SFTbtnContinue2").click(function() {
    $('ul.tabs').tabs('select_tab', 'test3');
  });
    $("#SFTbtnContinue3").click(function() {
    $('ul.tabs').tabs('select_tab', 'test4');
  });
     $("#SFTbtnContinue4").click(function() {
    $('ul.tabs').tabs('select_tab', 'test5');
  });
      $("#SFTbtnContinue5").click(function() {
    $('ul.tabs').tabs('select_tab', 'test6');
  });
});


$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
        

