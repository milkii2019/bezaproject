///////////// BEGIN HOME PAGE///////////
$("figure").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);

///////////// END HOME PAGE////////////


///////////// begin gallery //////////////////////


function openGallery() {
  document.getElementById("myGallery").style.display = "block";
}

function closeGallery() {
  document.getElementById("myGallery").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function presentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

  function display_blackwhite(obj) {
    $(obj).addClass("blk-white");
    }
    function display_colorphoto(obj) {
    $(obj).removeClass("blk-white");
    }
    

//////////// end gallery /////////////////////// 

////////////////////// contact form////////////


// Defining a function to validate form 
function checkInputs() {
   
        var n = document.myForm.Name.value;
        // to check email
        var em = document.myForm.Email.value;
        // should contain these character
        var at = em.indexOf("@"); 
        var dot = em.lastIndexOf(".");
        // check email end
        var s = document.myForm.Subject.value;
        var ms = document.myForm.Message.value;
        // Defining error variables with a default value
        var nameErr = emailErr = subjErr  = msgErr= true;
        var letter = /^[a-zA-Z\s]+$/;
        
        if( n== "" ||n.length<2  ) {
          alert( "Please provide your name!" );
          document.myForm.Name.focus() ;
          return false;
       }
       if( em == "" ||at < 1 || ( dot - at < 2 ) ) {
          alert( "Please provide valid Email!" );
          document.myForm.Email.focus() ;
          return false;
       }
       if( s == ""||s.length<2 ) {
          
          alert( "Please provide subject " );
          document.myForm.Subject.focus() ;
          return false;
       }

       return( true );
}

////////////// end contact form///////////////////

/////////////// resume begins////////////
$(document).ready(function(){  
	$("p1").mouseover(function(){  
		$("div").css("background-color", "green");  
	});  
	$("p1").mouseout(function(){  
		$("p1").css("background-color", "orange");  
	  });  
});  
/////////////resume ends here////////////////