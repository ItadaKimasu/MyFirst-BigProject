let toggle = document.querySelector('.toggle');
        let topbar = document.querySelector('.topbar');
        let navigation = document.querySelector('.navigation');
        let main = document.querySelector('.main');
        let themeswitch = document.querySelector('.themeswitch');
        let body = document.querySelector('body')
        toggle.onclick = function(){
            toggle.classList.toggle('active');
            topbar.classList.toggle('active');
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        }

        themeswitch.onclick = function(){
            body.classList.toggle('dark')
        }


//------------------------------------------------------


//------------------------------------------------------
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});