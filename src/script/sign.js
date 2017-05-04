require(["jquery", "../script/home"], function ($) {
        var sign = {
            init: function () {
                sign.getInfo();
            },
            getInfo: function () {
                //提交表单
                $('#J-signButton').click(function () {
                    //获取表单信息
                    var userId = $('#userName').val();
                    var userPassword = $('#userPassword').val();
                    var res = {
                        user_Id: userId,
                        user_password: userPassword
                    };
                    console.log(res);
                    $.post("/login_regist/login", res,
                        function (data, status) {
                            if (status == 'success') {
                                console.log('表单提交成功');
                                if (data.code == 1) {
                                    console.log(data.msg);
                                    sessionStorage.username=data.id;
                                    $('#tanchuang-mask').css('display', 'block');
                                    $('#tanchuang-mask button').click(function () {
                                        window.location.href = "home.html";
                                    })
                                } else if (data.code == -1 || data.code == 0) {
                                    alert(data.msg);
                                }
                            } else {
                                alert('输入信息有误或服务器连接失败！');
                            }
                        });
                });
            }
        };
        return sign.init();
    }
);
