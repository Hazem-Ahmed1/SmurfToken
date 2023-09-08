const mobileNavShow = document.querySelector('.mobile-nav-show');
const mobileNavHide = document.querySelector('.mobile-nav-hide');

document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
  el.addEventListener('click', function(event) {
    event.preventDefault();
    mobileNavToogle();
  })
});

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavShow.classList.toggle('d-none');
  mobileNavHide.classList.toggle('d-none');
}



// Hide mobile nav on same-page/hash links
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });



// Scroll Top Btn 


const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
    const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }));
}





let tokenSection = document.querySelector(".nft");
let isMoved = false;

window.onscroll = function () {
  if (!isMoved && window.scrollY > tokenSection.offsetTop) {
    move();
    isMoved = true;

  }
};

var i = 0;

function getBackgroundColor(element) {
  return window.getComputedStyle(element, null).getPropertyValue("background-color");
}

function move() {
  if (i == 0) {
    i = 1;
    var elem = document.querySelectorAll(".myBar");
    elem.forEach((element) => {
      var targetWidth = parseFloat(element.getAttribute("data-width"));
      var currentWidth = 0;
      var id = setInterval(frame, 20);

      // Get the background color of the .myBar element
      var bgColor = getBackgroundColor(element);

      function frame() {
        if (currentWidth >= targetWidth) {
          clearInterval(id);
          i = 0;
        } else {
          currentWidth += 1;
          element.style.width = currentWidth + "%";
          element.querySelector(".label").textContent = currentWidth + "%";

          // Set the label's background color and border color
          element.querySelector(".label").style.boxShadow = bgColor;
          element.querySelector(".label").style.borderColor = bgColor;
        }
      }
    });
  }
}

function updateLabel(bar, width) {
  const label = bar.querySelector(".label");
  const percentage = parseInt(width, 10);
  label.textContent = `${percentage}%`;
}

new WOW().init();


wow = new WOW(
  {
  boxClass:     'animate__animated',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();



let navbarlinks = document.querySelectorAll('#navbar a');

function navbarlinksActive() {
  navbarlinks.forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    let position = window.scrollY + 200;

    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      navbarlink.classList.add('active');
    } else {
      navbarlink.classList.remove('active');
    }
  })
}
window.addEventListener('load', navbarlinksActive);
document.addEventListener('scroll', navbarlinksActive);




// scroller



let progress_scroller = document.querySelector(".scroller-bar");
let heightPage = document.documentElement.scrollHeight - document.documentElement.clientHeight;



window.addEventListener("scroll",() =>{
  let scrollTop = document.documentElement.scrollTop;
  progress_scroller.style.width = `${(scrollTop/heightPage)*100}%`;
})



// dark theme 


let darkTheme = document.querySelector(".dark i");
let bodyCondition = document.querySelector("body");
let links = document.querySelectorAll("link");

darkTheme.onclick = function() {
  if(bodyCondition.classList.contains("lightTheme")){
    darkTheme.classList.replace("fa-moon","fa-lightbulb");
    bodyCondition.classList.remove("lightTheme");
    links[8].href ="css/dark.css"
  }
  else{
    darkTheme.classList.replace("fa-lightbulb","fa-moon");
    bodyCondition.classList.add("lightTheme");
    links[8].href ="css/style.css"
  }
}




// Read More




const buttonR = document.getElementById("readMoreGame");
const ga = document.querySelector(".ReadMoreGame");


function readMore() {
  // Get the button and the div.


  // Delete the button.
  buttonR.remove();

  // Show the div.
  ga.style.display = "block";
}
buttonR.addEventListener("click", readMore);



let CopyText = document.querySelector(".copyText");
CopyText.querySelector("button").addEventListener("click", function() {
  let copyInput = CopyText.querySelector("input");
  copyInput.select();
  document.execCommand("copy");
  CopyText.classList.add("active");
  window.getSelection().removeAllRanges();
  setTimeout(() => {
    CopyText.classList.remove("active");
  }, 2500);
});
