window.onscroll = function() {myFunction()};

var navbar = document.getElementById("firstpage");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbz8jyHRFjBQ7UKndUOboDLWekvbPIJNITiKbYA89_Y0c3SjetCy0ANuiSMZU1Z6GGeK4Q/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                        msg.innerHTML="Message sent Successfully"
                        setTimeout(function(){
                          msg.innerHTML=""
                        },2000)
                        form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })