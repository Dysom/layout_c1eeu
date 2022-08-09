"use strict";

//let xx= 1;

document.querySelector("#main-block-scroll-link").addEventListener("click", (e) => {
    e.preventDefault();    
    document.querySelector("#footer").scrollIntoView({behavior: "smooth"});
});

document.querySelectorAll("#slider > a").forEach((elem) => {
    elem.addEventListener("click", (e) => {
        e.preventDefault();    
    
        let linkStr = e.target.id.replace("slider-link-", "");

        if(linkStr == "start") {
            document.querySelector("#main-wrapper").scrollIntoView({behavior: "smooth"});
        }
        else {
            document.querySelector("#content_" + linkStr).scrollIntoView({behavior: "smooth"});
        }
    });
});

{
    const scrollingElemsAndItsSliderLinks = [
        {elemId: "#main-wrapper", linkId: "#slider-link-start"}
    ];

    for(let i = 1; i <= 3; i++) {
        scrollingElemsAndItsSliderLinks.push({elemId: "#content_" + i.toString().padStart(2, "0"), linkId: "#slider-link-" +  i.toString().padStart(2, "0")});
    }

    const topLimit = -100;
    const bottomLimit = 100;

    window.addEventListener('scroll', () => {
        let box, activePair = null;

        for(const pair of scrollingElemsAndItsSliderLinks) {
            if((box = document.querySelector(pair.elemId).getBoundingClientRect()).top >= topLimit && box.top <= bottomLimit) {
                activePair = pair;
    
                break;
            }
        }

        for(const pair of scrollingElemsAndItsSliderLinks) {
            if(pair == activePair) {                
                document.querySelector(pair.linkId).classList.add("active");
            }
            else {
                document.querySelector(pair.linkId).classList.remove("active");
            }
        }

        if(document.body.getBoundingClientRect().top == 0) {
            document.querySelector("#header-wrapper").classList.remove("shifted");            
        }
        else {
            document.querySelector("#header-wrapper").classList.add("shifted");
        }
    });
}

alert(scrollingElemsAndItsSliderLinks);
