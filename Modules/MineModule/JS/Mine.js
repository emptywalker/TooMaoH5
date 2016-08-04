/**
 * Created by Administrator on 16/8/4.
 */
ready(function () {
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