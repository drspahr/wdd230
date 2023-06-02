const imagesToLoad = document.querySelectorAll("  [data-src]");

function ldImages (image) {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");
    };
};

const imageOptions = {
    threshold: .6,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserve = new IntersectionObserver((items, imgObserve) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            ldImages(item.target);
            imgObserve.unobserve(item.target);
        }
    })
}, imageOptions);

imagesToLoad.forEach(image => {
    imgObserve.observe(image);
});


