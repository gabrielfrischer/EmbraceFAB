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
  $("#FABbtnContinue1").click(function() {
    $('ul.tabs').tabs('select_tab', 'test2');
  });
   $("#FABbtnContinue2").click(function() {
    $('ul.tabs').tabs('select_tab', 'test3');
  });
    $("#FABbtnContinue3").click(function() {
    $('ul.tabs').tabs('select_tab', 'test4');
  });
     $("#FABbtnContinue4").click(function() {
    $('ul.tabs').tabs('select_tab', 'test5');
  });
      $("#FABbtnContinue5").click(function() {
    $('ul.tabs').tabs('select_tab', 'test6');
  });
      $("#FABbtnContinue5").click(function() {
    $('ul.tabs').tabs('select_tab', 'test6');
  });
      $("#FABbtnContinue6").click(function() {
    $('ul.tabs').tabs('select_tab', 'test7');
  });
      $("#FABbtnContinue7").click(function() {
    $('ul.tabs').tabs('select_tab', 'test8');
  });
      $("#FABbtnContinue8").click(function() {
    $('ul.tabs').tabs('select_tab', 'test9');
  });
      $("#FABbtnContinue9").click(function() {
    $('ul.tabs').tabs('select_tab', 'test10');
  });
});

/*   $(document).ready(function() {
  
  
    $("#m").slideUp("100px");


  });
  
*/



$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
        

