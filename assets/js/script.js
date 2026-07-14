

// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn && mobileMenu){
    menuBtn.onclick = ()=>{
        mobileMenu.classList.toggle("hidden");
    }
    
    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Mobile Dark Mode
const themeBtnMobile = document.getElementById("themeBtnMobile");
if(themeBtnMobile){
    themeBtnMobile.onclick = ()=>{
        document.documentElement.classList.toggle("dark");
    }
}

// Mobile RTL
const rtlBtnMobile = document.getElementById("rtlBtnMobile");
if(rtlBtnMobile){
    rtlBtnMobile.onclick = ()=>{
        document.documentElement.dir = document.documentElement.dir==="ltr" ? "rtl" : "ltr";
    }
}

// Dark Mode

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

themeBtn.onclick = ()=>{

document.documentElement.classList.toggle("dark");

}

}

// RTL

const rtlBtn = document.getElementById("rtlBtn");

if(rtlBtn){

rtlBtn.onclick = ()=>{

document.documentElement.dir =
document.documentElement.dir==="ltr" ? "rtl" : "ltr";

}

}

// Navbar Background

const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.classList.add("bg-black/90","backdrop-blur-xl");

}else{

navbar.classList.remove("bg-black/90","backdrop-blur-xl");

}

});

