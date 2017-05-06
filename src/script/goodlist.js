require(["jquery"], function ($) {

        var goodlist = {
            init: function () {
                goodlist.changeBackground();
                goodlist.getData();
            },
            changeBackground: function () {
                var type = window.location.search;
                type = type.substring(type.indexOf("?") + 1, type.length);
                switch (type) {
                    case 'chinese':
                        $('body').css('background', '#faefed');
                        $('nav').css('background', '#faefed');
                        break;
                    case 'fashionModern':
                        $('body').css('background', '#faf9c3');
                        $('nav').css('background', '#faf9c3');
                        break;
                    case 'frish':
                        $('body').css('background', '#e3f4fe');
                        $('nav').css('background', '#e3f4fe');
                        break;
                    case 'luxurious':
                        $('body').css('background', '#f9f0e1');
                        $('nav').css('background', '#f9f0e1');
                        break;
                    case 'honourable':
                        $('body').css('background', '#faf9c3');
                        $('nav').css('background', '#faf9c3');
                        break;
                    case 'countryside':
                        $('body').css('background', '#effff4');
                        $('nav').css('background', '#effff4');
                        break;
                }
            },
            getData: function () {
                var type = window.location.search;
                type = type.substring(type.indexOf("?") + 1, type.length);
                $.get("/index/get_list", {type: type},
                    function (data) {
                        var data = JSON.parse(data);
                        console.log(data);
                        // goodsDetails.changePage(data);
                    });
            }

        };
        return goodlist.init();
    }
);
