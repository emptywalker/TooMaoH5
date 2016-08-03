/**
 * Created by Administrator on 16/7/26.
 */


$(document).ready(function(){

    //发送登录请求
    function snederLoginRequestClick() {
        // alert('snederLoginRequest');
        var userName = $(".userNameInput").val();
        var password = $(".psswordInput").val();
        if (userName.length == 11 && password.length > 5 && password.length < 20){
            // alert('you can request login');
            var path = URLBase + '/1.1/login?username=' + userName + '&password=' + password;

            getRequest('get', path, null, function complete(data, textStatus) {
                console.log(data + textStatus);
                location.href = "../../Modules/AreaModule/Html/AreaScene.html";
            }, function error(error) {
                console.log(error);
            });

        }else {
            alert('请输入正确格式的用户名和密码');
        }
    }

    //输入密码明暗文切换
    var eyeOpen = false;
    $('#eyeImg').click(function () {
        eyeOpen = !eyeOpen;
        let type = 'password';
        let src =  '../../Images/LoginAndRegisterImages/eyes_selected.png';
        if (!eyeOpen){
            type = 'text';
            src = '../../Images/LoginAndRegisterImages/eyes.png';
        }
        $('.psswordInput').attr('type',type);
        $(".eyeImg").attr('src',src);
    });

    $('.loginBtn').click(snederLoginRequestClick);

    $('.registerBtn').click(function () {

        location.href = "../HtmlScene/RegisterScene.html";
        }
    );

    $('.forgotBtn').click(function () {
            // alert('forgotBtn');
        location.href = "../HtmlScene/ForgetPasswordScene.html";
        }
    );
})
