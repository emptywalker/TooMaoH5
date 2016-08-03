/**
 * Created by Administrator on 16/8/3.
 */

ready(function () {

    var path = URLBase + '/1.2/regional/' + getQueryString("id") + '/detail';
    ajax({ url: path,
        success: function (responseText, response) {
            // 此处放成功后执行的代码
            console.log('responseText ===' + responseText);
            console.log('response ===' + response);
        },
        fail: function (status) {
            // 此处放失败后执行的代码
        }
    });

});

