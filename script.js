const openbutton=document.getElementById('btn-open');
const closebutton=document.getElementById('btn-close');
const menulist=document.getElementById('nav-menu');

openbutton.addEventListener('click',()=>{
    menulist.classList.add('showbutton');
})
closebutton.addEventListener('click',()=>{
    menulist.classList.remove('showbutton')
})

// section 1



// scroll javascript for header

const headerscroll = () => {
    const header = document.getElementById('header');
    const logo = document.getElementById('logo');
    const hamburger=document.getElementById('btn-open');

    if (this.scrollY >= 50) {
        header.classList.add('scroll-class');
        logo.style.color = '#1B2430';
        hamburger.style.color='#1B2430';
        
    } else {
        header.classList.remove('scroll-class');
        logo.style.color = 'white'; 
        hamburger.style.color='white';
    }
}
window.addEventListener('scroll',headerscroll)

var popularswiper = new Swiper(".popular-images", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop:true,
    
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    
  });


  window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop ) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };

const sr=ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:'2500',
    delay:300,
})
sr.reveal('.main-container')
sr.reveal('.home-lamp',{origin:'bottom'})
sr.reveal('.popular ')
sr.reveal('.feature-image',{origin:'right'})
sr.reveal('.feature-content',{origin:'left'})
sr.reveal('.product',{origin:'top'})
sr.reveal('.footer-container',{origin:'left'})
