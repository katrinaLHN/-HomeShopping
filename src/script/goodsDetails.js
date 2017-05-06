require(["jquery"], function ($) {
        //

        var goodsDetails = {
            init: function () {
                goodsDetails.getID();
            },
            getID: function () {
                var goodId = window.location.search;
                goodId = goodId.substring(goodId.indexOf("?") + 1, goodId.length);
                goodsDetails.getData(goodId);
            },
            getData: function (id) {
                $.get("/index/get_furniture_describe", {id: id},
                    function (data) {
                        var data = JSON.parse(data);
                        console.log(data);
                        goodsDetails.changePage(data);
                    });
            },
            handleImgPath: function (path) {
                if (path.endsWith(".jpg")) {
                    return 'http://119.29.102.247:8089/picture/' + path
                } else {
                    return 'http://119.29.102.247:8089/picture/' + path + '.jpg';
                }
            },
            handleHead: function (head) {
                var aHead = head.split("");
                var index = null;
                for (var i = 0; i < aHead.length; i++) {
                    if (aHead[i] == "]") {
                        index = i + 1;
                    }
                }
                if(index===null){
                    return;
                }
                return {
                    span: head.substring(0, index),
                    head: head.slice(index)
                }
            },
            changePage: function (data) {
                var price;
                var picPath = goodsDetails.handleImgPath(data[0].picture_path);
                $('.showImg').find("img").attr('src', picPath);
                var oSpan = goodsDetails.handleHead(data[0].furniture_describe).span;
                $('.goods_details').find('h2').text(data[0].furniture_name);
                $('.goods_details').find('h2').prepend("<span>" + oSpan + "</span>");
                $('.goods_details').find('h3').find('a').text(data[0].furniture_describe);
                if(data[0].furniture_price%1===0){
                    price=data[0].furniture_price+".00";
                }else{
                    price=data[0].furniture_price;
                }
                $('.price').text(price);
            }


            //
        }
        return goodsDetails.init();
        //
    }
);
