/**
 * Created by Administrator on 16/7/27.
 */

$(document).ready(function () {


    //倒计时
    var time = 60;
    var interval;
    function run() {
        interval = setInterval(timerfun, 1000);
    }
    function timerfun() {
        $('.getCode').text('|    ' + time + '秒');
        time -- ;
        if (time == 50){
            clearTimeout(interval);
            $('.getCode').text('|  重新发送');
        }
    }

    //获取验证码按钮
    $('.getCode').click(function () {
        let path = URLBase + '/1.1/requestRegisterSmsCode';
        let data = {'mobilePhoneNumber':$('.phoneNumberInput').val()};

        getRequest('post',path,data,function completeOperation(data, textStatus) {
            run();
        },function errorOperation(error) {
        });
    });


    //用户注册
    $(".registerButton").click(function () {
        let path = URLBase + '/1.1/usersByMobilePhone';
        let dataBody = {
            "mobilePhoneNumber": $(".phoneNumberInput").val(),
            "smsCode": $(".codeInput").val(),
            "password": $(".psswordInput").val(),
            "inviteCode": "123456"};
        getRequest('post', path, dataBody, function completeOperation(data, textStatus) {

        }, function errorOperation(error) {

        });
    });


    //密码是否可见
    var eyeOpen = false;
    $('.imageEye').click(function () {
        eyeOpen = !eyeOpen;
        let type = 'password';
        let src =  '../../Images/LoginAndRegisterImages/eyes_selected.png';
        if (!eyeOpen){
            type = 'text';
            src = '../../Images/LoginAndRegisterImages/eyes.png';
        }
        $('.psswordInput').attr('type',type);
        $(".imageEye").attr('src',src);
    });

    //back
    $('.rightBack').click(function () {
        location.href = "../HtmlScene/LoginScene.html";
    });
})