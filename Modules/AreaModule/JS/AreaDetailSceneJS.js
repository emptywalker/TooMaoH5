/**
 * Created by Administrator on 16/8/3.
 */

ready(function () {

    var path = URLBase + '/1.2/regional/' + getQueryString("id") + '/detail';
    ajax({ url: path,
        success: function (responseText, response) {
            // 此处放成功后执行的代码
            var original = JSON.parse(responseText);
            document.getElementById('top-image').src = original.regional.topImage;
            document.getElementById('title').textContent = original.regional.title;
            document.getElementById('description').textContent = original.regional.desc;

            var productArray = new Array()
            var html = '';
            productArray = original.product;
            for (var i = 0; i < productArray.length; i++){
                let module =   productArray[i];
                html += "<li> <a class='product' href='" + module.productUrl+ "'>  <img src=" + module.productImage +">  </a></li>";
            }
            document.getElementById("product-list").innerHTML = html;//"<a class='product' style='background-image:url("+ module.productImage +")'></a>";

        },
        fail: function (status) {
            // 此处放失败后执行的代码
            console.log(status);
        }
    });

});

