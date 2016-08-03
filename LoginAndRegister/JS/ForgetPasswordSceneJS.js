/**
 * Created by Administrator on 16/7/27.
 */

$(document).ready(function () {
    $(".rightBack").click(function () {
        location.href = "../HtmlScene/LoginScene.html";
    });

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
})