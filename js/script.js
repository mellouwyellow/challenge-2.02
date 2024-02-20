

$(document). ready(function() {

//hides box//

    $("#box").hide();

    //add click function//

    $("#button").click(function(){
    $("#box").toggle();
    });
    
    //box animation//
    
    $("#box").click(function(){
    $(".square").addClass("animate-box");
    setTimeout(function() {
        $(".square").removeClass("animate-box");  
       } , 5000);
       
       });
    //circle animation//
       $("#name").click(function(){
        $("#box").css("background-color", "lightgreen")
        $("#box").css("border", "2px solid color")
        $("#box").css("border-radius", "50%")
    });
    
    $("#gif").click(function(){
        $("#box").hide();
        $("#box").css("background-color", "violet")
        $(".square").removeClass("animate-box");
        $("#box").css("border", "2px solid salmon")
        $("#box").css("border-radius", "100px 75px")
        });
  
        
    
    
    })







