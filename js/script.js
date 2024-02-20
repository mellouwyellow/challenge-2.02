

$(document). ready(function() {

//hides box//
    $("#box").hide();

    //add click function//
    $("#button").click(function(){
    $("#box").toggle();
    });
    
    //box animation//
    $("#box").click(function(){
    $(".oval").addClass("animate-box");
    setTimeout(function() {
        $(".oval").removeClass("animate-box");  
       } , 5000);
       
       });
    

    
  
        
    
    
    })







