$(function() {
    console.log($(".rjcd li"))
    $(".rjcd li").mouseenter(function() {
        $(".rjcd-aa").show();
    });
    $(".rjcd").mouseleave(function() {
            $(".rjcd-aa").hide();
        })
        /* 放回顶部 */
    $(window).scroll(function() {

        $(".dingwei li").eq(3).click(function() {
            $("html,body").stop().animate({
                "scrollTop": 0
            }, 500)
        })

        $(".dingweia ul li span").each(function(i) {
            if ($(window).scrollTop() >= ($(".diannao").outerHeight()) / 2 + 1200 + i * 720) {

                $(".dingweia ul li").eq(i).find("span").css({
                    "color": "#333",
                    "borderColor": "red"
                });
                $(".dingweia ul li").eq(i).siblings().find("span").css({
                    "color": "#cecece",
                    "borderColor": "white"
                });

            }
            if ($(window).scrollTop() <= ($(".diannao").outerHeight()) / 2 + 1200 + i * 720) {
                $(".dingweia ul li").eq(i).find("span").css({
                    "color": "#cecece",
                    "borderColor": "white"
                });
            }
            if ($(window).scrollTop() > 400 && $(window).scrollTop() < 500) {
                $(".dingweia").stop().animate({
                    "right": 0
                }, 500);
            }
            if ($(window).scrollTop() < 400) {
                $(".dingweia").stop().animate({
                    "right": "-100px"
                }, 500);
            }
            $(".dingweia ul li").eq(i).hover(function() {
                $(".dingweia ul li").eq(i).find("span").css({
                    "color": "#333",
                    "borderColor": "red"
                });
            }, function() {
                $(".dingweia ul li").eq(i).find("span").css({
                    "color": "#cecece",
                    "borderColor": "white"
                });
            })
        })

    })

    $("body").click(function() {

        location.href = "详情页.html";

    })
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: 38559,
        pagesize: 100
    }, data => {
        console.log(data);
    })
})