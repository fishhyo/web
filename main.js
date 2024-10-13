// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function triclick(){
  const myButton = document.getElementById('myButton');
    
  myButton.addEventListener('dblclick', () => {
    window.location.href = 'MILF.html';
  });

  myButton.addEventListener('touchend', (event) => {
    // Check for double-tap on mobile
    if (event.detail === 2) {
      window.location.href = 'MILF.html';
    }
  });
}

function dbclick(){
  $(document).ready(function(){
    $('#singleClick').on('click', function(e){
      e.preventDefault;
      console.log('solo un click');
    });
    var touchtime = 0;
    $('#doubleClick').on('click', function(e){
      e.preventDefault;
      //DoubleCLick function
      if (touchtime == 0) {
          touchtime = new Date().getTime();
      } else {
          if (((new Date().getTime()) - touchtime) < 800) {
              window.location.href = 'MILF.html';
              touchtime = 0;
          } else {
              touchtime = new Date().getTime();
          }
      }
      //DoubleCLick function
      //https://stackoverflow.com/users/643482/jrulle - Credit JRulle
    });
  })
}
