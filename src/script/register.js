require(["jquery", "../script/home"], function ($) {
        var register = {
            init: function () {
                register.getInfo();
            },
            getInfo: function () {
                //用户名密码不能为空
                $('#userId').blur(
                    function () {
                        var tempVal = $('#userId').val();
                        if (tempVal == '') {
                            $('#userId').val('注意：用户名不能为空！');
                            // alert('注意：用户名不能为空！');
                        }
                    }
                );
                $('#userPassword').blur(
                    function () {
                        var tempVal = $('#userPassword').val();
                        if (tempVal == '') {
                            alert('注意：密码不能为空！');
                        }
                    }
                );
                //表单验证
                //邮箱验证
                // $('#userEmail').blur(function () {
                //     if (!validateEmail(userEmail)) {
                //         $('#userEmail').val('');
                //         alert('邮箱信息不正确，请重新输入！');
                //     }
                // });
                //身份证验证
                $('#userCard').blur(function () {
                    var tempVal = $('#userCard').val()
                    // console.log(idCardVildate(tempval))
                    if (!idCardVildate(tempVal)) {
                        $('#userCard').val('');
                        alert('身份证信息不正确，请重新输入！');
                    }
                });
                //提交表单
                $('#J-registerButton').click(function () {
                    //获取表单信息
                    var userId = $('#userId').val();
                    var userPassword = $('#userPassword').val();
                    var userAddress = $('#userAddress').val();
                    var userCard = $('#userCard').val();
                    var userTel = $('#userTel').val();
                    var userEmail = $('#userEmail').val();
                    var userSex = $("input:radio:checked").val();
                    var res = {
                        user_Id: userId,
                        user_password: userPassword,
                        user_address: userAddress,
                        user_card: userCard,
                        user_phone: userTel,
                        user_email: userEmail,
                        user_sex: userSex
                    };
                    console.log(res);
                    $.post("/login_regist/regist", res,
                        function (data, status) {
                            if (status == 'success') {
                                console.log('表单提交成功');
                                if (data.code == 0) {
                                    console.log(data.msg);
                                    $('#tanchuang-mask').css('display', 'block');
                                    $('#tanchuang-mask button').click(function () {
                                        window.location.href = "sign.html";
                                    })
                                } else if (data.code == -1 || data.code == 1) {
                                    alert(data.msg);
                                }
                            } else {
                                alert('输入信息有误或服务器连接失败！');
                            }
                        });
                });
                //验证邮箱
                // function validateEmail(emailValue) {
                //     var reg =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                //     return reg.test(emailValue);
                // }

                // 验证身份证
                function idCardVildate(cid) {
                    var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子  
                    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码  
                    var reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                    if (reg.test(cid)) {
                        var sum = 0, idx;
                        for (var i = 0; i < cid.length - 1; i++) {
                            // 对前17位数字与权值乘积求和  
                            sum += parseInt(cid.substr(i, 1), 10) * arrExp[i];
                        }
                        // 计算模（固定算法）  
                        idx = sum % 11;
                        // 检验第18为是否与校验码相等  
                        return arrValid[idx] == cid.substr(17, 1).toUpperCase();
                    } else {
                        return false;
                    }
                }
            }
        };
        return register.init();
    }
);
