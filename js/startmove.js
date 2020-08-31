function startMove(domobj, json,fn) {
    clearInterval(domobj.timer);
    domobj.timer = setInterval(function () {
        var flag = true; //假设所有的属性都达到了目标值
        for (var attr in json) {
            var iTarget = json[attr]; //取到目标值
            if (attr == "opacity") { //透明度的处理
                var iCur = parseInt(getStyle(domobj, "opacity") * 100);
            } else {
                var iCur = parseInt(getStyle(domobj, attr)); //取到当前值
            }
            var iSpeed = (iTarget - iCur) / 8;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr == "opacity") {
                domobj.style.opacity = (iCur + iSpeed) / 100;
                domobj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
            } else {
                domobj.style[attr] = iCur + iSpeed + "px";

            }

            if (iTarget != iCur) { //只要有没达到的 flag为false
                flag = false;
            }
        }
        if (flag) { //只有在flag为true时才清定时器
            clearInterval(domobj.timer);
            if(fn){
                fn();
            }
        }

    },100)
}

function getStyle(domobj, attr) {
    if (window.getComputedStyle) {
        return getComputedStyle(domobj, null)[attr];
    }
    return domobj.currentStyle[attr];
}
