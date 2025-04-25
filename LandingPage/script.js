const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnime() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInout
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInout,
            duration: 2,
            delay:-1,
            stagger: .2
        })

        tl.from("#herofooter", {
            y: -10,
            opacity: 0,
            delay:-1,
            duration: 1.5,
            ease: Expo.easeInout
        })
}

var timeout;

var xscale=1;
var yscale =1;

var xprev=0;
var yprev=0;

function circleChaptaKaro() {
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        
        xscale=gsap.utils.clamp(.8,1.2,dets.clientX- xprev);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY- yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;


        circleMouseFollower(xscale, yscale);

       timeout= setTimeout(function () {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

        },80);

    })
}


function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`


    })
}

document.querySelectorAll(".elem")
.forEach(function(elem) {

    var rotate = 0;
    var diffrot= 0;

    elem.addEventListener("mouseleave", function(dets) {
       
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            duration: 0.5,
            ease: Power3,
        });
    });

    elem.addEventListener("mousemove", function(dets) {
        diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot= dets.clientX-rotate;
        rotate= dets.clientX;

        gsap.utils.clamp(-20,20,diff)

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot*.2)
        });
    });
});




circleChaptaKaro()
circleMouseFollower();
firstPageAnime();


