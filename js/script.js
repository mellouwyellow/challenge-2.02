

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
    
       $("#name").click(function(){
        $("#box").css("background-color", "royalblue")
        $("#box").css("border", "1px solid color")
        $("#box").css("border-radius", "50%")
    });
    
    
  
        
    
    
    })







