/**
 * Created by Administrator on 16/7/30.
 */
$(document).ready(function () {
    //请求数据
    var path = URLBase + '/1.2/regional/show';
    getRequest('get', path, null, function completeOperation(data, textStatus) {
        console.log(data);
        $.each(data.results, function (i, item) {
            $('ul').append(
                "<li> <a style='background-image:url(" + item.cardImage +")' href = './AreaDetailScene.html?id=" + item.id + "' ></a></li>"
            );
        });
        $('li').attr({'class':'areaContent'});
        $("a").attr({'class':'aClass'});

    }, function errorOperation(error) {
        console.log(error);
    });
});