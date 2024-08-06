gsap.registerPlugin(ScrollTrigger);


// const headTxt1 = new SplitType('.intro .intro__title-text', { types: 'words, chars'});

// gsap.from('.intro .intro__title-text .char',{
//     scale:2,
//     stagger:{
//         from:"random",
//         each:0.07
//     }
// })

const headTxt2 = new SplitType('.intro .intro__title-strong', { types: 'words, chars'});

gsap.from('.intro .intro__title-strong .char',{
    scale:0,
    stagger:{
        from:"random",
        each:0.05
    }
})

const ani2 = gsap.timeline({
    scrollTrigger:{
        trigger:".project .project__list",
        start:"0 0",
        end:"100% 100%",
        scrub:0,
        //markers:true
    }
});

ani2
.to(".project__sticky .project01 .project__imgwrap",{'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
.to(".project__sticky .project02",{top:0})
.to(".project__sticky .project02 .project__imgwrap",{'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
.to(".project__sticky .project03",{top:0})
.to(".project__sticky .project03 .project__imgwrap",{'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
.to(".project__sticky .project04",{top:0})
.to(".project__sticky .project04 .project__imgwrap",{'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})
.to(".project__sticky .project05",{top:0})
.to(".project__sticky .project05 .project__imgwrap",{'clip-path':'polygon(0 0, 100% 0, 100% 100%, 0 100%)'})


// const rollTxt1 = new SplitType('.rolling .rollingwrap01 .rolling__text', { types: 'words, chars'});
// gsap.set('.rolling .rollingwrap01 .rolling__text .char', {
//     opacity: 0,
//     y: 50,
// });

// gsap.to('.rolling .rollingwrap01 .rolling__text .char', {
//     opacity: 1,
//     y: 0,
//     stagger: {
//         each: 0.05
//     },
//     scrollTrigger: {
//         trigger: ".rolling",
//         start: "top bottom", 
//         end: "bottom top",
//         //scrub: true,
//         markers: true // 스크롤 트리거 시작과 끝을 표시하는 마커 (디버깅용)
//     },
//     onComplete: startInfiniteScroll
// });
// function startInfiniteScroll() {
//     const textWidth = document.querySelector('.rollingwrap01 .rolling__text').offsetWidth;
//     const totalWidth = textWidth * 2; // 두 개의 텍스트 넓이를 합친 값

//     gsap.to('.rolling .rolling__text', {
//         x: -textWidth,
//         duration: textWidth / 50, // 속도 조절 (값을 조정하여 원하는 속도로 설정)
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//             x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) // 무한 반복
//         }
//     });
// }

