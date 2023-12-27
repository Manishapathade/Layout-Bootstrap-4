const cl = console.log;


// owl-carousel vr jaun functionality dyaycya 

$('#testimonialsCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // navtext: [ethe icon pn taku shukkte 2 single cot kiva double cot madhe]
    // autopay:true, timing sathi 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})