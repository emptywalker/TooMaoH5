/**
 * Created by Administrator on 16/8/4.
 */
ready(function () {

    var path = URLBase + '/1.1/home';
    ajax({
        url:path,
        success: function (responseText) {
            console.log(responseText);
            var squareModel = JSON.parse(responseText);
            //设置广告
            var advArray = squareModel.adverts;
            var advULl= document.getElementById('advUL');
            var pointUL = document.getElementById('advSpan');
            var imageHtml = '';
            var spanPoint = '';
            for (var i = 0; i < advArray.length; i ++ ){
                var adv = advArray[i];
                imageHtml += "<img style='width: "+ document.body.clientWidth+"px' src='" + adv.image + "'>"

                let potinClass = '';
                if (i == 0){
                    potinClass = 'pointClass';
                    spanPoint += "<span class="+ potinClass +"></span>";
                }else {
                    spanPoint += "<span></span>";
                }
            }
            advULl.innerHTML = imageHtml;
            advULl.style.width = advArray.length * document.body.clientWidth + 'px';
            pointUL.innerHTML = spanPoint;
        },
        fail:function (status) {

        }
    });






    //tabBar点击处理
    document.getElementById('square').onclick = function () {
        // alert('square');
        window.location.href = '../../SquareModule/Html/Square.html';
    }

    document.getElementById('find').onclick = function () {
        window.location.href = '../../FindModule/Html/Find.html';
    }

    document.getElementById('area').onclick = function () {
        window.location.href = '../../AreaModule/Html/AreaScene.html';

    }

    document.getElementById('shopping-cart').onclick = function () {
        window.location.href = '../../ShoppingCartModule/Html/ShoppingCart.html';

    }
    document.getElementById('mine').onclick = function () {
        window.location.href = '../../MineModule/Html/Mine.html';
    }
});