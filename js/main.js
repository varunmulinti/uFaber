
function openNav() {
    $("#navContent").removeClass("sidenavContent");
  $("#mySidenav").css('width', '374px');
     
     
}

function closeNav() {
    $("#navContent").addClass("sidenavContent");
  $("#mySidenav").css('width', '0px');
     
}

$(document).ready(function(){
    
  $(".imgA1, .videoCloseBtn").click(function () {
        $('#videoContent, #introDiv').toggleClass('introVideoRemove');
  }); 
    $("#myCarousel").carousel({interval: 50000});
    
    $(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 5 ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -5 ){
            $(this).carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});
    
    
   
    
    
    
});