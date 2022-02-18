$(document).ready(function(){
    service();
});

function service(){
    $('.serviceButton').click(function(){
        $('.serviceContainer').toggleClass('active');
        $('.serviceContainer').css({'transition-duration':'2s' , 'transition-property' : 'width'});
        $('.serviceButton').toggleClass('active');
        $('.serviceContainer div ul').toggleClass('active');
    });
}

window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 10) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

var imgs = 3;
var now = 0;

function slide() {
    now = now == imgs ? 0 : now += 1; 

    $(".knowhowContainer > ul li img").eq(now - 1).css({"margin-left": "-550px"});
    $(".knowhowContainer > ul li img").eq(now).css({"margin-left": "0px"});
}

function start() {
    $(".knowhowContainer > ul li img").eq(0).siblings().css({"margin-left":"0px"});
    
    setInterval(function () { slide()}, 2000);
}
start();

