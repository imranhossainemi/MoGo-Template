const header = document.querySelector(".navbar");
const banner = document.querySelector(".banner");

const bannerOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const bannerObs = new IntersectionObserver(
    function(entries,bannerObs){
        entries.forEach(entry =>{
            if (!entry.isIntersecting){
                header.classList.add("nav-scrolled");
            } else{
                header.classList.remove("nav-scrolled");
            }
        });
    },
    bannerOptions);
bannerObs.observe(banner);