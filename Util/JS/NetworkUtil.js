/**
 * Created by Administrator on 16/7/28.
 */


var URLBase = 'https://api.toomao.com';//'https://dev-api.toomao.com';


function getRequest(type, path, dataBody, completeOperation, errorOperation) {
    $.ajax({
        type: type,
        url: path,
        data: JSON.stringify(dataBody),
        dataType: 'json',
        // contentType:'xml',
        headers: {
            'Content-Type' : 'application/json'
        },
        success:function (data, textStatus) {
            completeOperation(data, textStatus);
        },
        complete: function () {

        },
        error: function (error) {
            errorOperation(error);
        }
    });
}



//解析URL的参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}


//发送网络请求
function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = JSON.stringify( options.data);

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.response);
            } else {
                options.fail && options.fail(status);
            }
        }
    }
    //连接 和 发送 - 第二步
    xhr.open(options.type, options.url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(params);
}