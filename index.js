let rect = document.querySelector('#centre')

rect.addEventListener("mousemove",(value)=>{
    let rectanglelocation = rect.getBoundingClientRect();
    //centre line is at x =360
    let mouselocation = value.clientX;
    console.log(mouselocation);
    let insiderect = mouselocation-rectanglelocation.left;
    // console.log(insiderect);

    if(insiderect<rectanglelocation.width/2){
        let redcolor = gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease:Power4
        })  
    }else{
        let bluecolor = gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,insiderect);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease:Power4
        })  
    
    }
    
})

