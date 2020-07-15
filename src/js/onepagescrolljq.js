const sections = $("section");
const display = $(".maincontent");
const sideMenu = $(".pager");
const sideMenuItems = sideMenu.find(".pager__item");
const dropdown = $('.dropdown');
const wrapper = $('.wrapper');

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobileOpen = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = (sectionEq) =>{
    
    return sectionEq * - 100;
}

const changeMenuTheme = (sectionEq) =>{
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr('data-sidemenu-theme');
    const activeClass = "pager_theme_black";
    if(menuTheme == 'black'){
        sideMenu.addClass(activeClass);
    } else{
        sideMenu.removeClass(activeClass);
    }
}

const resetActiveClass = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = (sectionEq) =>{

    if(inScroll == false){
        inScroll = true;

        const position = countSectionPosition(sectionEq);

        changeMenuTheme(sectionEq);
        display.css({
            transform: `translateY(${position}%)`
        });
        resetActiveClass(sections, sectionEq, 'active');
        
        
        
        setTimeout(() =>{
            inScroll = false;

            resetActiveClass(sideMenuItems, sectionEq, "pager__item_active");

        }, 1300);
    }

    
}
const viewportSсroller = () =>{
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    return{
        next(){
            if (nextSection.length){
                performTransition(nextSection.index());
            }
        },
        prev(){
            if (prevSection.length){
                performTransition(prevSection.index());
            }
        }
    }

}
$(window).on("wheel", e =>{
    
    let deltaY = e.originalEvent.deltaY;
    const scroller = viewportSсroller();

    if(deltaY > 0){
        scroller.next();
    }
    if(deltaY < 0){
        scroller.prev();
    }
});

$(window).on('keydown', e => {
    const scroller = viewportSсroller();
    const tagName = e.target.tagName.toLowerCase();
    if(tagName != 'input' && tagName != 'textarea'){
        switch (e.keyCode) {
            case 38:
                scroller.prev()
                break;
            
            case 40:
                scroller.next();
                break;
        }
    }

    
});

$('.wrapper').on('touchmove', e => e.preventDefault());

$("[data-scroll-to]").click(e =>{
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());
    
    if(dropdown.hasClass('dropdown__active')){
        dropdown.removeClass('dropdown__active');
    }
});

if (isMobileOpen){
    $("body").swipe( {
    
        swipe:function(event, direction) {
            const scroller = viewportSсroller();
            let scrollDirection = '';
    
            if(direction == 'up') scrollDirection = 'next';
            if(direction == 'down') scrollDirection = 'prev';
            
            scroller[scrollDirection]();
        }
    
    });
}
