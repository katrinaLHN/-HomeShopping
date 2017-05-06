require(["jquery"], function ($) {
        //

        var home = {
            init: function () {
                home.navBackground();
                home.bannerMove();
                home.welcomeUser();
                home.getType();
                // console.log(sessionStorage.username);
            },
            navBackground: function () {
                //控制导航栏背景颜色和背景图片
                //儒雅中式
                $('nav ul li').eq(1).mouseover(function () {
                    $('nav ul li').eq(1).css('background', 'url("../../resources/nav-li-bg/chinese.png")no-repeat');
                    $('nav ul li').eq(1).css('background-size', '105px 41px');
                    $('nav').css('background', '#faefed');
                    $('body').css('background', '#faefed');
                }).mouseout(function () {
                    $('nav').css('background', '#fff9e9');
                    $('nav ul li').eq(1).css('background', 'none');
                    $('body').css('background', '#fff');
                })
                //时尚现代
                $('nav ul li').eq(2).mouseover(function () {
                    $('nav ul li').eq(2).css('background', 'url("../../resources/nav-li-bg/modern.png")no-repeat');
                    $('nav ul li').eq(2).css('background-size', '105px 41px');
                    $('nav').css('background', '#faf9c3');
                    $('body').css('background', '#faf9c3');
                }).mouseout(function () {
                    $('nav').css('background', '#fff9e9');
                    $('nav ul li').eq(2).css('background', 'none');
                    $('body').css('background', '#fff');
                })
                //清新地中海
                $('nav ul li').eq(3).mouseover(function () {
                    $('nav ul li').eq(3).css('background', 'url("../../resources/nav-li-bg/mediterranean.png")no-repeat');
                    $('nav ul li').eq(3).css('background-size', '105px 41px');
                    $('nav').css('background', '#e3f4fe');
                    $('body').css('background', '#e3f4fe');
                }).mouseout(function () {
                    $('nav').css('background', '#fff9e9');
                    $('nav ul li').eq(3).css('background', 'none');
                    $('body').css('background', '#fff');
                })
                //奢华欧式
                $('nav ul li').eq(4).mouseover(function () {
                    $('nav ul li').eq(4).css('background', 'url("../../resources/nav-li-bg/european.png")no-repeat');
                    $('nav ul li').eq(4).css('background-size', '105px 41px');
                    $('nav').css('background', '#f9f0e1');
                    $('body').css('background', '#f9f0e1');
                }).mouseout(function () {
                    $('nav').css('background', '#fff9e9');
                    $('nav ul li').eq(4).css('background', 'none');
                    $('body').css('background', '#fff');
                })
                //尊贵美式
                $('nav ul li').eq(5).mouseover(function () {
                    $('nav ul li').eq(5).css('background', 'url("../../resources/nav-li-bg/american.png")no-repeat');
                    $('nav ul li').eq(5).css('background-size', '105px 41px');
                    $('nav').css('background', '#faf9c3');
                    $('body').css('background', '#faf9c3');
                }).mouseout(function () {
                    $('nav').css('background', '#fff2ea');
                    $('nav ul li').eq(5).css('background', 'none');
                    $('body').css('background', '#fff');
                })
                //香草田园
                $('nav ul li').eq(6).mouseover(function () {
                    $('nav ul li').eq(6).css('background', 'url("../../resources/nav-li-bg/pastoral.png")no-repeat');
                    $('nav ul li').eq(6).css('background-size', '105px 41px');
                    $('nav').css('background', '#effff4');
                    $('body').css('background', '#effff4');
                }).mouseout(function () {
                    $('nav').css('background', '#fff9e9');
                    $('nav ul li').eq(6).css('background', 'none');
                    $('body').css('background', '#fff');
                })
            },
            bannerMove: function () {
                var curIndex = 0, //当前index
                    imgLen = $(".img-list li").length; //图片总数
                // console.log(imgLen);
                // 定时器自动变换2.5秒每次
                var autoChange = setInterval(function () {
                    if (curIndex < imgLen - 1) {
                        curIndex++;
                    } else {
                        curIndex = 0;
                    }
                    //调用变换处理函数
                    changeTo(curIndex);
                }, 2500);
                //对右下角按钮index进行事件绑定处理等
                $(".button-list").find("li").each(function (item) {
                    $(this).hover(function () {
                        clearInterval(autoChange);
                        changeTo(item);
                        curIndex = item;
                    }, function () {
                        autoChangeAgain();
                    });
                });
                //清除定时器时候的重置定时器--封装
                function autoChangeAgain() {
                    autoChange = setInterval(function () {
                        if (curIndex < imgLen - 1) {
                            curIndex++;
                        } else {
                            curIndex = 0;
                        }
                        //调用变换处理函数
                        changeTo(curIndex);
                    }, 2500);
                }

                function changeTo(num) {
                    var goLeft = num * 1190;
                    $(".img-list").animate({left: "-" + goLeft + "px"}, 500);
                    $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
                    $(".button-list").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
                }
            },
            welcomeUser: function () {
                if (sessionStorage.username) {
                    var username = "欢迎，" + sessionStorage.username;
                    $('#welcome').text(username);
                } else {
                    $('#welcome').text('');
                    $('#welcome').append("<a href='sign.html'>请登录</a>");
                }

            },
            getType: function () {
                home.getInf('chinese', 'chinese');
                home.getInf('fashion', 'fashionModern');
                home.getInf('medit', 'frish');
                home.getInf('european', 'luxurious');
                home.getInf('america', 'honourable');
                home.getInf('postal', 'countryside');
            },
            getInf: function (address, type) {
                $.post("/index/get_" + address,
                    function (data, status) {
                        if (status == 'success') {
                            var data = JSON.parse(data);
                            console.log(data);
                            home.addInfo(data, type);
                        } else {
                            alert('服务器连接失败！');
                        }
                    });
            },
            handleImgPath: function (path) {
                if (path.endsWith(".jpg")) {
                    return 'http://119.29.102.247:8089/picture/' + path
                } else {
                    return 'http://119.29.102.247:8089/picture/' + path + '.jpg';
                }
            },
            addInfo: function (data, type) {
                var listName = '.' + type + ' .goods-list';
                var $aGoodsList = $(listName);
                for (var i = 0; i < data.length; i++) {
                    var picPath = home.handleImgPath(data[i].picture_path);
                    var goodsList = "." + type + " .goods-list:eq(" + i + ")";
                    $(goodsList).find("li.name").text(data[i].furniture_name);
                    $(goodsList).find("li.tips").text(data[i].furniture_describe);
                    $(goodsList).find("li.price").text(data[i].furniture_price);
                    $(goodsList).find("img").attr('src', picPath);
                    $(goodsList).find("a").attr('target', '_blank');
                    // $(goodsList).find("a").attr('href','/index/get_furniture_describe?id=32842e2d-db42-430e-af6a-702d941d907a')
                    $(goodsList).find("a").attr('href', 'goodsDetails.html?' + data[i].furniture_id);
                }
            }
        }
        return home.init();
        // home.init();
        //
    }
);
