
function openNav() {
    $("#navContent").removeClass("sidenavContent");
  $("#mySidenav").css('width', '374px');
     
     
}

function closeNav() {
    $("#navContent").addClass("sidenavContent");
  $("#mySidenav").css('width', '0px');
     
}

$(document).ready(function(){
    
  $(".videoImg, .videoCloseBtn").click(function () {
        $('#videoContent, #introDiv').toggleClass('introVideoRemove');
  }); 
    $("#myCarousel").carousel({interval: 50000});
    
    
    
});