/**
 * Created by lee on 2017/3/4.
 */
require(["jquery"], function ($) {
    //

    var home ={
        init:function () {
          home.navBackground();
          home.bannerMove();
        },
        navBackground:function () {
            //控制导航栏背景颜色和背景图片
            //儒雅中式
            $('nav ul li').eq(1).mouseover(function () {
                $('nav ul li').eq(1).css('background','url("../../resources/nav-li-bg/chinese.png")no-repeat');
                $('nav ul li').eq(1).css('background-size','105px 41px');
                $('nav').css('background','#faefed');
                $('body').css('background','#faefed');
            }).mouseout (function () {
                $('nav').css('background','#fff9e9');
                $('nav ul li').eq(1).css('background','none');
                $('body').css('background','#fff');
            })
            //时尚现代
            $('nav ul li').eq(2).mouseover(function () {
                $('nav ul li').eq(2).css('background','url("../../resources/nav-li-bg/modern.png")no-repeat');
                $('nav ul li').eq(2).css('background-size','105px 41px');
                $('nav').css('background','#faf9c3');
                $('body').css('background','#faf9c3');
            }).mouseout (function () {
                $('nav').css('background','#fff9e9');
                $('nav ul li').eq(2).css('background','none');
                $('body').css('background','#fff');
            })
            //清新地中海
            $('nav ul li').eq(3).mouseover(function () {
                $('nav ul li').eq(3).css('background','url("../../resources/nav-li-bg/mediterranean.png")no-repeat');
                $('nav ul li').eq(3).css('background-size','105px 41px');
                $('nav').css('background','#e3f4fe');
                $('body').css('background','#e3f4fe');
            }).mouseout (function () {
                $('nav').css('background','#fff9e9');
                $('nav ul li').eq(3).css('background','none');
                $('body').css('background','#fff');
            })
            //奢华欧式
            $('nav ul li').eq(4).mouseover(function () {
                $('nav ul li').eq(4).css('background','url("../../resources/nav-li-bg/european.png")no-repeat');
                $('nav ul li').eq(4).css('background-size','105px 41px');
                $('nav').css('background','#f9f0e1');
                $('body').css('background','#f9f0e1');
            }).mouseout (function () {
                $('nav').css('background','#fff9e9');
                $('nav ul li').eq(4).css('background','none');
                $('body').css('background','#fff');
            })
            //尊贵美式
            $('nav ul li').eq(5).mouseover(function () {
                $('nav ul li').eq(5).css('background','url("../../resources/nav-li-bg/american.png")no-repeat');
                $('nav ul li').eq(5).css('background-size','105px 41px');
                $('nav').css('background','#faf9c3');
                $('body').css('background','#faf9c3');
            }).mouseout (function () {
                $('nav').css('background','#fff2ea');
                $('nav ul li').eq(5).css('background','none');
                $('body').css('background','#fff');
            })
            //香草田园
            $('nav ul li').eq(6).mouseover(function () {
                $('nav ul li').eq(6).css('background','url("../../resources/nav-li-bg/pastoral.png")no-repeat');
                $('nav ul li').eq(6).css('background-size','105px 41px');
                $('nav').css('background','#effff4');
                $('body').css('background','#effff4');
            }).mouseout (function () {
                $('nav').css('background','#fff9e9');
                $('nav ul li').eq(6).css('background','none');
                $('body').css('background','#fff');
            })
        },
        bannerMove:function () {
            var curIndex = 0, //当前index
                imgLen = $(".img-list li").length; //图片总数
            // console.log(imgLen);
            // 定时器自动变换2.5秒每次
            var autoChange = setInterval(function(){
                if(curIndex < imgLen-1){
                    curIndex ++;
                }else{
                    curIndex = 0;
                }
                //调用变换处理函数
                changeTo(curIndex);
            },2500);
            //对右下角按钮index进行事件绑定处理等
            $(".button-list").find("li").each(function(item){
                $(this).hover(function(){
                    clearInterval(autoChange);
                    changeTo(item);
                    curIndex = item;
                },function(){
                    autoChangeAgain();
                });
            });
            //清除定时器时候的重置定时器--封装
            function autoChangeAgain(){
                autoChange = setInterval(function(){
                    if(curIndex < imgLen-1){
                        curIndex ++;
                    }else{
                        curIndex = 0;
                    }
                    //调用变换处理函数
                    changeTo(curIndex);
                },2500);
            }
            function changeTo(num){
                var goLeft = num * 1190;
                $(".img-list").animate({left: "-" + goLeft + "px"},500);
                $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
                $(".button-list").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
            }
        }

        //
        }
    return home.init();
    // home.init();
    //
    }
);
