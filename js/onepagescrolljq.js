const mySections = $("section");
const myDisplay = $(".maincontent");

const performTransition = sectionEq =>{
    const position = sectionEq * - 100;

    myDisplay.css({
        transform: `translate(${position}%)`
    });
}

$(window).on("wheel", e =>{
    
    console.log(e);
    let deltaY = e.originalEvent.deltaY;
    console.log(deltaY);
    if(deltaY > 0){
        performTransition(2);
    }
    if(deltaY < 0){
        
    }
});