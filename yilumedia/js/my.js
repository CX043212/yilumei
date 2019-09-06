$(".select ul li").click(function() {

    $(".select ul li").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $(".content>div").hide().eq($(this).index()).show();
});
$(".select-bottom ul li").click(function() {

    $(".select-bottom ul li").eq($(this).index()).addClass("active").siblings().removeClass('active');
    $(".content-bottom>div").hide().eq($(this).index()).show();
});
