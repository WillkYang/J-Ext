
function $(name) {
    return document.querySelector(name);
}

function $$(name) {
    return document.querySelectorAll(name);
}

function clearAll() {
    /**
     * 清除现有页面
     */
    var html = $('html');
    var length = html.childElementCount;
    for (var i = 0; i <= length; i++) {
        html.removeChild(html.childNodes[0]);
    }
}

function clear(domname) {
    var html = $(domname);
    html.remove();
}


$("body").style.cssText='padding-top:0px !important';
$(".post").style.cssText='width:80% !important';
clear('nav');
clear('.side-tool');
