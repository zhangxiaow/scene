/**
 * Created by Administrator on 2016/10/17.
 */
var mySwiper = new Swiper(".swiper-container",{
    direction:"vertical",
    pagination: '.swiper-pagination',
    loop:"true",
    // effect:"coverflow",
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
});
var music = document.querySelector(".music");
var musicCtro = document.querySelector(".musicCtro");
var audio = document.querySelector("audio");
music.addEventListener("click",function(){
    if(audio.paused){
        audio.play();
        music.style.animationPlayState = "running";
        musicCtro.style.transform = "rotate(130deg)";
    }else{
        audio.pause();
        music.style.animationPlayState = "paused";
        musicCtro.style.transform = "rotate(170deg)";
    }
});

